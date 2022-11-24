import * as express from 'express';
import LoginController from '../controllers/login.controller';

class LoginRouter {
  private _controller = new LoginController();
  private _router = express.Router();

  constructor() { this.config(); }

  get router(): express.Router {
    return this._router;
  }

  private config() {
    this.router.get('/validate', this._controller.validate);
    this.router.post('/', this._controller.login);
  }
}

export default new LoginRouter().router;
