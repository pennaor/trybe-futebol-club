import { RequestHandler } from 'express';
import LoginService from '../services/login.service';

class LoginController {
  private _service = new LoginService();

  public login: RequestHandler = async (req, res) => {
    const token = await this._service.login(req.body);
    return res.status(200).json({ token });
  };

  public validate: RequestHandler = async (req, res) => {
    const token = req.header('Authorization');
    const { id, ...role } = this._service.validate(token);
    return res.status(200).json(role);
  };
}

export default LoginController;
