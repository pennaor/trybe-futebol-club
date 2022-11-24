import NotFound from '../errors/NotFound.error';
import Team from '../database/models/Team';
import validate from './validations/validateSchema';

class TeamService {
  private _teamModel = Team;

  public getAll = async (): Promise<Team[]> => {
    const teams = await this._teamModel.findAll();
    return teams;
  };

  public getById = async (teamId: number): Promise<Team> => {
    validate.identifier(teamId);

    const team = await this._teamModel.findByPk(teamId);
    if (!team) {
      throw new NotFound('Time não encontrado');
    }

    return team;
  };
}

export default TeamService;
