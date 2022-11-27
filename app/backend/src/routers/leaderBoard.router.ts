import * as express from 'express';
import LeaderBoardController from '../controllers/leaderBoard.controller';

class LeaderBoardRouter {
  private _controller = new LeaderBoardController();
  private _router = express.Router();

  constructor() { this.config(); }

  get router(): express.Router {
    return this._router;
  }

  private config() {
    this.router.get('/home', this._controller.getByHomeMatches);
    this.router.get('/away', this._controller.getByAwayMatches);
    this.router.get('/', this._controller.getAll);
  }
}

export default new LeaderBoardRouter().router;
