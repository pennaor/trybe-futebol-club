import { IMatch } from './IMatch';

interface ITeamMatches {
  id: number;
  teamName: string;
  homeMatches?: IMatch[];
  awayMatches?: IMatch[];
  inProgress?: boolean;
}

export default ITeamMatches;
