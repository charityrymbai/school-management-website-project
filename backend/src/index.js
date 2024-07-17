import { Hono } from 'hono'
import studentRouter from './Routes/studentRoutes'
import adminRouter from './Routes/adminRoutes'


const app = new Hono()



app.route("/api/v1/student", studentRouter)
app.route("/api/v1/admin", adminRouter)

export default app