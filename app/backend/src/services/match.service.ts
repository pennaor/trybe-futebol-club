import Team from '../database/models/Team';
import Match from '../database/models/Match';

class MatchesService {
  private _matchModel = Match;

  public getAll = async (): Promise<Match[]> => {
    const matches = await this._matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matches;
  };

  public getByProgressStatus = async (inProgress: string): Promise<Match[]> => {
    const matches = await this._matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
      where: { inProgress: inProgress === 'true' },
    });
    return matches;
  };
}

export default MatchesService;
