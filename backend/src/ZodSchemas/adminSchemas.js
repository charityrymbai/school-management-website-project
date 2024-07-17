import zod from "zod"

export const CreateStudentSchema = zod.object({
    firstName: zod.string(), 
    middleName: zod.string().optional(), 
    lastName: zod.string(), 
    date_of_birth: zod.string(),
    roll_no: zod.number(),
    cgpa: zod.number(),
    class: zod.number(),
})

export const StudentSchema = zod.object({
    firstName: zod.string().optional(), 
    middleName: zod.string().optional(), 
    lastName: zod.string().optional(), 
    date_of_birth: zod.string().optional(),
    roll_no: zod.number().optional(),
    cgpa: zod.number().optional(),
})


