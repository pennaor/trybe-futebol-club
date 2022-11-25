import { RequestHandler } from 'express';
import MatchService from '../services/match.service';

class MatchController {
  private _service = new MatchService();

  public getAll: RequestHandler = async (req, res) => {
    const matches = await this._service.getAll(req.query);
    return res.status(200).json(matches);
  };

  public create: RequestHandler = async (req, res) => {
    const match = await this._service.create(req.body);
    return res.status(201).json(match);
  };

  public finish: RequestHandler = async (req, res) => {
    await this._service.finish(req.params.id);
    return res.status(200).json({ message: 'Finished' });
  };
}

export default MatchController;
