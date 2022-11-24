import * as express from 'express';
import loginRouter from './login.router';
import teamRouter from './team.router';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/teams', teamRouter);

export default routers;
