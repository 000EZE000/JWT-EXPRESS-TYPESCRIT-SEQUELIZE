import express from 'express';
import routerAuth from './routes/auth'
import morgan from 'morgan';
const app = express();

app.use(express.json());
app.use(morgan('dev'))
app.use('/api/auth', routerAuth)



export default app;