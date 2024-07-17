import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt'


import studAuthMiddleware from '../middlewares/studAuthMiddleware';
import { StudentSiginSchema } from '../ZodSchemas/StudentSchemas';

const studentRouter = new Hono();


studentRouter.post('/signin', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json()

  const parsed = StudentSiginSchema.safeParse(body);

  if (!parsed.success){
    return c.json({
        message: "Wrong inputs"
    }, 400)
  }

  try {
    const student = await prisma.student.findFirst({
      where: body
    })

    if (student===null){
      return c.json({
        message: "There is no student with the provided details"
      }, 200)
    }

    const secret = c.env.JWT_SECRET;

    const token = await sign(student, secret)

    return c.json({
      message: "Logged in successful",
      token: token
    }, 200)
    
  } catch (error) {
    console.error(error);
    return c.json({
        message: "Error logging in"
    }, 500)
  } finally {
    await prisma.$disconnect();
  }
});


studentRouter.post('/getStudentDetails', studAuthMiddleware,  async (c) => {
  return c.json(c.student)
});





export default studentRouter;
