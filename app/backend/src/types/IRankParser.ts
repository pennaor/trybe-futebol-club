import { ITeamMatch } from './ITeamMatches';
import TeamRank from './TeamRank';

interface IRankParser {
  teamMatches: ITeamMatch[],
  matchesResult: TeamRank[],
  generateEmptyRank(init: object): TeamRank,
  parse(): TeamRank[],
}

export default IRankParser;
