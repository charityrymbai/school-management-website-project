import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';

import studAuthMiddleware from '../middlewares/studAuthMiddleware';
import { SiginSchema } from '../ZodSchemas/CommonSchemas';

const studentRouter = new Hono();

studentRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const parsed = SiginSchema.safeParse(body);

    if (!parsed.success) {
        return c.json(
            {
                message: 'Wrong inputs',
            },
            400
        );
    }

    const loginInput = {
        std_id: body.id, 
        date_of_birth: body.date_of_birth,
    }

    try {
        const student = await prisma.student.findFirst({
            where: loginInput,
        });

        if (student === null) {
            return c.json(
                {
                    message: 'There is no student with the provided details',
                },
                200
            );
        }

        const secret = c.env.JWT_SECRET;

        const token = await sign(loginInput, secret);

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

studentRouter.get('/getStudentDetails', studAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const studentDetails = await prisma.student.findUnique({
            where: c.student,
            include: {
                fees: true,
                libraryBooks: {
                    include: {
                        bookDetail: true,
                    },
                },
                attendance: true,
            },
        });

        return c.json(studentDetails, 200);
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

studentRouter.post('/payFees', studAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const res = await prisma.fees.create({
            data: {
                std_id: c.student.std_id,
                amount: parseInt(c.req.query('amount')),
                installment_no: parseInt(c.req.query('installment')),
            },
        });

        return c.json(res, 200);
    } catch (error) {
        console.error(error);
        return c.json(
            {
                message: 'Server issue',
            },
            500
        );
    } finally {
        await prisma.$disconnect();
    }
});

studentRouter.get('/getFeeDetails', studAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const feeDetails = await prisma.fees.findMany({
            where: {
                std_id: c.student.std_id,
            },
        });

        return c.json(feeDetails, 200);
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

studentRouter.get('/getLibraryRecords', studAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const libraryRecords = await prisma.libraryStd.findMany({
            where: {
                std_id: c.student.std_id,
            },
            include: {
                bookDetail: true,
            },
        });

        return c.json(libraryRecords, 200);
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

studentRouter.get('/getAttendance', studAuthMiddleware, async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const attendanceRecords = await prisma.attendance.findMany({
            where: {
                std_id: c.student.std_id,
            },
            include: {
                subject: true,
            },
        });

        return c.json(attendanceRecords, 200);
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

export default studentRouter;
