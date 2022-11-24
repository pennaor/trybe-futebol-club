import * as express from 'express';
import MatchController from '../controllers/match.controller';

class MatchRouter {
  private _controller = new MatchController();
  private _router = express.Router();

  constructor() { this.config(); }

  get router(): express.Router {
    return this._router;
  }

  private config() {
    this.router.get('/', this._controller.getAll);
  }
}

export default new MatchRouter().router;
