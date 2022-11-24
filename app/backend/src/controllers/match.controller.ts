import { RequestHandler } from 'express';
import MatchService from '../services/match.service';
import Match from '../database/models/Match';

class MatchController {
  private _service = new MatchService();

  public getAll: RequestHandler = async (req, res) => {
    const { inProgress } = req.query;
    let matches: Match[];

    if (typeof inProgress !== 'string') {
      matches = await this._service.getAll();
    } else {
      matches = await this._service.getByProgressStatus(inProgress);
    }

    return res.status(200).json(matches);
  };

  public create: RequestHandler = async (req, res) => {
    const match = await this._service.create(req.body);
    return res.status(201).json(match);
  };
}

export default MatchController;
