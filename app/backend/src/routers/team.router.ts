import * as express from 'express';
import TeamController from '../controllers/team.controller';

class TeamRouter {
  private _controller = new TeamController();
  private _router = express.Router();

  constructor() { this.config(); }

  get router(): express.Router {
    return this._router;
  }

  private config() {
    this.router.get('/:id', this._controller.getById);
    this.router.get('/', this._controller.getAll);
  }
}

export default new TeamRouter().router;
