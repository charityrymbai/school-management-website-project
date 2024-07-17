import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { CreateStudentSchema, StudentSchema } from '../ZodSchemas/adminSchemas';

const adminRouter = new Hono();

adminRouter.post('/createStudent', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json()

  const parsed = CreateStudentSchema.safeParse(body);

  if (!parsed.success){
    return c.json({
        message: "Wrong inputs"
    }, 400)
  }

  try {
    const res = await prisma.student.create({
      data: body,
    });
    return c.json({
        message: "Created student"
    }, 200)
  } catch (error) {
    console.error(error);
    return c.json({
        message: "Error creating student"
    },500)
  } finally {
    await prisma.$disconnect();
  }
});

adminRouter.get('/getStudent', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json()

  const parsed = StudentSchema.safeParse(body);

  if (!parsed.success){
    return c.json({
        message: "Wrong inputs"
    }, 400)
  }

  try {
    const res = await prisma.student.findMany({
      where: {
        roll_no: body.roll_no, 
        class: body.class,
      },
    });
    return c.json({
      data: res
    }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ 
        message: 'Error fetching student' 
    }, 500);
  } finally {
    await prisma.$disconnect();
  }
});


adminRouter.patch('/updateStudent', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const std_class = parseInt(c.req.query("class"))
  const std_rollNo = parseInt(c.req.query("roll_no"))

  const body = await c.req.json()

  const parsed = StudentSchema.safeParse(body);

  if (!parsed.success){
    return c.json({
        message: "Wrong inputs"
    }, 400)
  }

  try {
    const res = await prisma.student.updateMany({
      where: {
        roll_no: std_rollNo, 
        class: std_class,
      }, data: body
    });
    return c.json(res, 200);
  } catch (error) {
    console.error(error);
    return c.json({ 
        message: 'Error updating student' 
    }, 500);
  } finally {
    await prisma.$disconnect();
  }
});



export default adminRouter;
