import * as express from 'express';
import LoginRouter from './login.router';

const routers = express.Router();

routers.use('/login', new LoginRouter().router);

export default routers;
