import zod from "zod"

export const StudentSiginSchema = zod.object({
    std_id: zod.number(), 
    date_of_birth: zod.string()
})