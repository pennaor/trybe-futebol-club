import * as express from 'express';
import leaderBoardRouter from './leaderBoard.router';
import loginRouter from './login.router';
import matchRouter from './match.router';
import teamRouter from './team.router';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/teams', teamRouter);
routers.use('/matches', matchRouter);
routers.use('/leaderboard', leaderBoardRouter);

export default routers;
