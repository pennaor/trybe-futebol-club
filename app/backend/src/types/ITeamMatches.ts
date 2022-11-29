import { IMatch } from './IMatch';
import Team from './Team';

interface ITeamMatch extends Team {
  homeMatches?: IMatch[];
  awayMatches?: IMatch[];
  inProgress?: boolean;
}

export { Team, ITeamMatch };
