import { IMatch } from './IMatch';
import Team from './Team';

interface ITeamMatches extends Team {
  homeMatches?: IMatch[];
  awayMatches?: IMatch[];
  inProgress?: boolean;
}

export { Team, ITeamMatches };
