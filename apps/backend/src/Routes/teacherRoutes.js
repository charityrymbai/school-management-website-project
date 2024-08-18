import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';

import { SigninSchema } from '../ZodSchemas/CommonSchemas';
import teachAuthMiddleware from '../Middlewares/teachAuthMiddleware';

const teacherRouter = new Hono();

teacherRouter.post('/signin', async (c) => {
     const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate());

     const body = await c.req.json();

     const parsed = SigninSchema.safeParse(body);

     if (!parsed.success) {
          return c.json(
               {
                    message: 'Wrong inputs',
               },
               400
          );
     }

     const loginInput = {
          emp_id: body.id,
          password: body.password,
     };

     try {
          const teacher = await prisma.teacher.findFirst({
               where: loginInput,
          });

          if (teacher === null) {
               return c.json(
                    {
                         message: 'There is no teacher with the provided details',
                    },
                    200
               );
          }

          const secret = c.env.JWT_SECRET;

          const token = await sign(
               {
                    emp_id: loginInput.emp_id,
               },
               secret
          );

          return c.json(
               {
                    message: 'Logged in successful',
                    token: token,
               },
               200
          );
     } catch (error) {
          console.error(error);
          return c.json(
               {
                    message: 'Error logging in',
               },
               500
          );
     } finally {
          await prisma.$disconnect();
     }
});

teacherRouter.get('/getDetails', teachAuthMiddleware, async (c) => {
     const prisma = new PrismaClient({
          datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate());
     try {
          const teacherDetails = await prisma.teacher.findUnique({
               where: {
                    emp_id: c.teacher.emp_id,
               },
          });

          return c.json(teacherDetails, 200);
     } catch (error) {
          console.error(error);
          return c.json(
               {
                    message: 'Error getting details',
               },
               500
          );
     } finally {
          await prisma.$disconnect();
     }
});

export default teacherRouter;
