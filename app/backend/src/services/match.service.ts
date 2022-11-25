import { IMatch } from '../interfaces';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import validate from './validations/validateSchema';
import { NotFound } from '../errors';

class MatchesService {
  private _matchModel = Match;

  public getAll = async (queries: qs.ParsedQs): Promise<Match[]> => {
    const findOptions = { where: {} };

    const { inProgress } = queries;
    if (inProgress === 'true') {
      findOptions.where = { inProgress: true };
    } else if (inProgress === 'false') {
      findOptions.where = { inProgress: false };
    }

    const matches = await this._matchModel.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
      ...findOptions,
    });
    return matches;
  };

  public create = async (payload: IMatch): Promise<Match> => {
    validate.newMatch(payload);
    try {
      const match = await this._matchModel.create({ ...payload });
      return match;
    } catch (error) {
      if (error instanceof Error && error.name === 'SequelizeForeignKeyConstraintError') {
        throw new NotFound('There is no team with such id!', error);
      }
      throw error;
    }
  };

  public finish = async (matchId: string): Promise<void> => {
    validate.identifier(Number(matchId));
    await this._matchModel.update({ inProgress: false }, { where: { id: matchId } });
  };
}

export default MatchesService;
