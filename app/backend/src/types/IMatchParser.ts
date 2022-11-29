import { IMatch } from './IMatch';
import { MatchResult } from './MatchResult';

interface IMatchParser {
  matchResult: MatchResult;
  match: IMatch;
  teamId: number;
  generateEmptyResult(init: object): MatchResult;
  parse(): MatchResult;
  init(match: IMatch, teamId: number): this;
}

export default IMatchParser;
