import { LoginSchema } from "../ZodSchemas/CommonSchemas"

const teacher = {
    id: "ST0123", 
    dateOfBirth: new Date(2003, 5, 18).toDateString()
}

const teachAuthMiddleware = async (c, next) =>{
    const body = await c.req.json()
    const parsed = LoginSchema.safeParse(body)
    if (!parsed.success){
        return c.json({
            message: "You have given the wrong inputs"
        })
    }
    if (body.id === teacher.id && body.dateOfBirth === teacher.dateOfBirth){
        console.log("teacher verified")
        await next();
        return;
    }
    return c.json({
        message: "Wrong Teacher-id or Date of Birth"
    })
}

export default teachAuthMiddleware