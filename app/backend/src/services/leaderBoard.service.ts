import { ITeamMatch, TeamRank } from '../types';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import RankSorter from './helpers/RankSorter';
import RankParser from './helpers/RankParser';
import MatchParser from './helpers/MatchParser';

type leaderBoardOptions = 'allMatches' | 'homeMatches' | 'awayMatches';

class LeaderBoardService {
  private _teamModel = Team;

  private _matchModel = Match;

  public getLeaderBoard = async (options: leaderBoardOptions): Promise<TeamRank[]> => {
    const include = [
      { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
      { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
    ];

    if (options === 'homeMatches') {
      include.pop();
    } else if (options === 'awayMatches') {
      include.shift();
    }

    const teamsAndMatches: ITeamMatch[] = await this._teamModel.findAll({ include });

    const rankParser = new RankParser(teamsAndMatches, new MatchParser());
    return new RankSorter(rankParser).sort();
  };
}

export default LeaderBoardService;
