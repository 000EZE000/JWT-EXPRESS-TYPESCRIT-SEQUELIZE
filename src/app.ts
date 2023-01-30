import express from 'express';
import routerAuth from './routes/auth'
import morgan from 'morgan';
import routerHome from './routes/home';
const app = express();

app.use(express.json());
app.use(morgan('dev'))

app.use(express.static('./public'))
app.use('/api/auth', routerAuth);
app.use('/', routerHome)


export default app;