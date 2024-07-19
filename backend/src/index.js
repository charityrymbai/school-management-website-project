import { Hono } from 'hono';
import { cors } from 'hono/cors';
import studentRouter from './Routes/studentRoutes';
import adminRouter from './Routes/adminRoutes';

const app = new Hono();

app.use('*', cors());

app.route('/api/v1/student', studentRouter);
app.route('/api/v1/admin', adminRouter);

export default app;
