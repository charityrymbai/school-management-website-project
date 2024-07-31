import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import {
    AddBookSchema,
    CreateAdminSchema,
    CreateStudentSchema,
    CreateTeacherSchema,
    StdLendBookSchema,
    StudentSchema,
    TeacherSchema,
    TeachLendBookSchema,
} from '../ZodSchemas/adminSchemas';
import { SigninSchema } from '../ZodSchemas/CommonSchemas';
import { sign } from 'hono/jwt';
import adminAuthMiddleware from '../Middlewares/adminAuthMiddleware';

const adminRouter = new Hono();

adminRouter.post('/createAdmin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = CreateAdminSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.admin.create({
            data: body,
        });
        return c.json(
            {
                message: 'Created Admin',
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error creating student',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/signin', async (c) => {
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
        ad_id: body.id,
        password: body.password,
    };

    try {
        const admin = await prisma.admin.findFirst({
            where: loginInput,
        });

        if (admin === null) {
            return c.json(
                {
                    message: 'There is no admin with the provided details',
                },
                200
            );
        }

        const secret = c.env.JWT_SECRET;

        const token = await sign(
            {
                ad_id: loginInput.ad_id,
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

adminRouter.get("/getAdminOverview", adminAuthMiddleware, async (c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const studentNo = await prisma.student.count()
        const teacherNo = await prisma.teacher.count()
        return c.json({
            stdNumber: studentNo,
            teachNumber: teacherNo
        })
    }catch(error){
        console.log(error)
        return c.json({
            message: "Error getting Overview info"
        })
    }finally{
        await prisma.$disconnect()
    }
})

adminRouter.get('/getDetails', adminAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const adminDetails = await prisma.admin.findUnique({
            where: {
                ad_id: c.admin.ad_id,
            },
        });

        return c.json(adminDetails, 200);
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

adminRouter.post('/createStudent', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = CreateStudentSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.student.create({
            data: body,
        });
        return c.json(
            {
                message: 'Created student',
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error creating student',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/createTeacher', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = CreateTeacherSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.teacher.create({
            data: body,
        });
        return c.json(
            {
                message: 'Created Teacher',
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error creating Teacher',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/getStudent', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = StudentSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.student.findMany({
            where: body,
        });
        return c.json(
            {
                data: res,
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error fetching student',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/getTeacher', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = TeacherSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.teacher.findMany({
            where: body,
        });
        return c.json(
            {
                data: res,
            },
            200
        );
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error fetching Teacher',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.patch('/updateStudent', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const std_class = parseInt(c.req.query('class'));
    const std_rollNo = parseInt(c.req.query('roll_no'));

    const body = await c.req.json();

    const parsed = StudentSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    try {
        const res = await prisma.student.updateMany({
            where: {
                roll_no: std_rollNo,
                class: std_class,
            },
            data: body,
        });
        return c.json(res, 200);
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error updating student',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/stdLendBook', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const payload = await c.req.json();
    const parsedPayload = StdLendBookSchema.safeParse(payload);
    if (!parsedPayload.success) {
        return c.json({
            message: 'Wrong inputs',
        });
    }

    const takenOn = new Date();
    const duedate = new Date(takenOn);
    duedate.setDate(duedate.getDate() + 14); // Add 14 days to takenOn date

    try {
        const res = await prisma.libraryStd.create({
            data: {
                std_id: payload.std_id,
                bookNo: payload.bookNo,
                dueDate: duedate.toISOString(),
            },
        });

        return c.json({
            message: 'Record added successfully',
        });
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error creating record',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/teachLendBook', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const payload = await c.req.json();
    const parsedPayload = TeachLendBookSchema.safeParse(payload);
    if (!parsedPayload.success) {
        return c.json({
            message: 'Wrong inputs',
        });
    }

    const takenOn = new Date();
    const duedate = new Date(takenOn);
    duedate.setDate(duedate.getDate() + 20); // Add 20 days to takenOn date

    try {
        const res = await prisma.libraryTeach.create({
            data: {
                emp_id: payload.emp_id,
                bookNo: payload.bookNo,
                dueDate: duedate.toISOString(),
            },
        });

        return c.json({
            message: 'Record added successfully',
        });
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error creating record',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

adminRouter.post('/addBook', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const payload = await c.req.json();
    console.log(payload);
    const parsedPayload = AddBookSchema.safeParse(payload);
    if (!parsedPayload.success) {
        return c.json({
            message: 'Wrong inputs',
        });
    }

    try {
        const res = await prisma.libraryBooks.create({
            data: {
                bookNo: payload.bookNo,
                bookName: payload.bookName,
            },
        });

        return c.json({
            message: 'Book added successfully',
        });
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Error adding Book',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

export default adminRouter;
