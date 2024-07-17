
import { verify } from 'hono/jwt';

const studAuthMiddleware = async (c, next) =>{
    const body = await c.req.json()

    try {
        const secret = c.env.JWT_SECRET;
        const verifiedToken = await verify(body.token, secret)
        c.student = verifiedToken;
        await next();
    }catch{
        return c.json({
            message:"not authorised"
        })
    }
}

export default studAuthMiddleware