import * as express from 'express';
import authenticateUser from '../middlewares/authenticateUser';
import MatchController from '../controllers/match.controller';

class MatchRouter {
  private _controller = new MatchController();
  private _router = express.Router();

  constructor() { this.config(); }

  get router(): express.Router {
    return this._router;
  }

  private config() {
    this.router.patch('/:id/finish', this._controller.finish);
    this.router.get('/', this._controller.getAll);
    this.router.post('/', authenticateUser, this._controller.create);
  }
}

export default new MatchRouter().router;
