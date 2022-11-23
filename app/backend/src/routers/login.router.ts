import * as express from 'express';
import LoginController from '../controllers/login.controller';

class LoginRouter {
  private controller = new LoginController();
  private _router = express.Router();

  constructor() { this.config(); }

  private config() {
    this.router.get('/validate', this.controller.validate);
    this.router.post('/', this.controller.login);
  }

  get router(): express.Router {
    return this._router;
  }
}

export default LoginRouter;
