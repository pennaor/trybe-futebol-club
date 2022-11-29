import { ITeamMatch, TeamRank, MatchResult, IMatchParser } from '../../types';
import MatchParser from './MatchParser';

class RankParser {
  private _matchesResult!: TeamRank[];

  private _teamMatches: ITeamMatch[];

  private _matchParser: IMatchParser;

  constructor(teamMatches: ITeamMatch[], matchParser?: IMatchParser) {
    this._teamMatches = teamMatches;
    this._matchParser = matchParser ?? new MatchParser();
  }

  public generateEmptyRank = (init: object): TeamRank => ({
    name: '',
    totalPoints: 0,
    totalGames: 0,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 0,
    goalsFavor: 0,
    goalsOwn: 0,
    goalsBalance: 0,
    efficiency: 0,
    ...init,
  });

  private updateTeamRank = (rank: TeamRank, result: MatchResult): TeamRank => {
    const teamRank = { ...rank };

    teamRank.totalGames += 1;
    teamRank.goalsFavor += result.goals.favor;
    teamRank.goalsOwn += result.goals.own;
    teamRank.totalPoints += result.points;
    teamRank.totalVictories += result.victories;
    teamRank.totalDraws += result.draws;
    teamRank.totalLosses += result.losses;

    return teamRank;
  };

  private getMatchesResult = (team: ITeamMatch): TeamRank => {
    const { id, teamName, homeMatches = [], awayMatches = [] } = team;
    const matches = [...homeMatches, ...awayMatches];
    let teamRank = this.generateEmptyRank({ name: teamName });

    for (let i = 0; i < matches.length; i += 1) {
      const matchResult = this.matchParser.init(matches[i], id).parse();
      teamRank = this.updateTeamRank(teamRank, matchResult);
    }

    teamRank.goalsBalance = teamRank.goalsFavor - teamRank.goalsOwn;
    teamRank.efficiency = (teamRank.totalPoints / (teamRank.totalGames * 3)) * 100;
    teamRank.efficiency = Number(teamRank.efficiency.toFixed(2));

    return teamRank;
  };

  public get teamMatches(): ITeamMatch[] {
    return this._teamMatches;
  }

  public get matchesResult() : TeamRank[] {
    return this._matchesResult;
  }

  public get matchParser(): IMatchParser {
    return this._matchParser;
  }

  public parse = (): TeamRank[] => {
    this._matchesResult = this.teamMatches.map(this.getMatchesResult);
    return this.matchesResult;
  };
}

export default RankParser;
