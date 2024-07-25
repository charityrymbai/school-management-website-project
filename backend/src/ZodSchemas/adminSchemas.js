import zod from 'zod';

const dateSchema = zod.preprocess(
    (dateString) => new Date(dateString),
    zod.date()
);

export const CreateStudentSchema = zod.object({
    firstName: zod.string(),
    middleName: zod.string().optional(),
    lastName: zod.string(),
    date_of_birth: dateSchema,
    roll_no: zod.number(),
    cgpa: zod.number(),
    class: zod.number(),
});

export const CreateTeacherSchema = zod.object({
    firstName: zod.string(),
    middleName: zod.string().optional(),
    lastName: zod.string(),
    date_of_birth: dateSchema,
    password: zod.string(), 
    dept: zod.string(),
});

export const CreateAdminSchema = zod.object({
    firstName: zod.string(),
    middleName: zod.string().optional(),
    lastName: zod.string(),
    date_of_birth: dateSchema,
    password: zod.string(),
});

export const StudentSchema = zod.object({
    firstName: zod.string().optional(),
    middleName: zod.string().optional(),
    lastName: zod.string().optional(),
    date_of_birth: dateSchema.optional(),
    roll_no: zod.number().optional(),
    cgpa: zod.number().optional(),
});

export const StdLendBookSchema = zod.object({
    std_id: zod.number(),
    bookNo: zod.number(),
});

export const TeachLendBookSchema = zod.object({
    emp_id: zod.number(),
    bookNo: zod.number(),
});

export const AddBookSchema = zod.object({
    bookNo: zod.number(),
    bookName: zod.string(),
});
