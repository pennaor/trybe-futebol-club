import { RequestHandler } from 'express';
import TeamService from '../services/team.service';

class LoginController {
  private _service = new TeamService();

  public getAll: RequestHandler = async (_req, res) => {
    const teams = await this._service.getAll();
    return res.status(200).json(teams);
  };

  public getById: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const team = await this._service.getById(Number(id));
    return res.status(200).json(team);
  };
}

export default LoginController;
