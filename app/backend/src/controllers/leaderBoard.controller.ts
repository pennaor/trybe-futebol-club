import { RequestHandler } from 'express';
import LeaderBoardService from '../services/leaderBoard.service';

class LeaderBoardController {
  private _service = new LeaderBoardService();

  public getAll: RequestHandler = async (_req, res) => {
    const leaderBoard = await this._service.getLeaderBoard('allMatches');
    return res.status(200).json(leaderBoard);
  };

  public getByHomeMatches: RequestHandler = async (_req, res) => {
    const leaderBoard = await this._service.getLeaderBoard('homeMatches');
    return res.status(200).json(leaderBoard);
  };

  public getByAwayMatches: RequestHandler = async (_req, res) => {
    const leaderBoard = await this._service.getLeaderBoard('awayMatches');
    return res.status(200).json(leaderBoard);
  };
}

export default LeaderBoardController;
