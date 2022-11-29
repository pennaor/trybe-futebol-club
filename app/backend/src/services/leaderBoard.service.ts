import { IMatch, ITeamMatches, TeamRank, MatchResult, Goals } from '../types';
import Team from '../database/models/Team';
import Match from '../database/models/Match';
import SortTeams from './helpers/SortTeams';

class LeaderBoardService {
  private _teamModel = Team;

  private _matchModel = Match;

  private generateEmptyRank = (init: object): TeamRank => ({
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

  private generateEmptyResult = (init: object): MatchResult => ({
    points: 0,
    victories: 0,
    draws: 0,
    losses: 0,
    goals: {
      favor: 0,
      own: 0,
    },
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

  private getMatchResult = (goals: Goals): MatchResult => {
    const result: MatchResult = this.generateEmptyResult({ goals });
    if (goals.favor > goals.own) {
      result.points += 3;
      result.victories += 1;
    } else if (goals.favor === goals.own) {
      result.points += 1;
      result.draws += 1;
    } else {
      result.losses += 1;
    }
    return result;
  };

  private computeGoals = (match: IMatch, teamId: number): Goals => {
    const goals: Goals = { favor: 0, own: 0 };
    const { homeTeam, homeTeamGoals, awayTeamGoals } = match;

    if (teamId === homeTeam) {
      goals.favor += homeTeamGoals;
      goals.own += awayTeamGoals;
    } else {
      goals.favor += awayTeamGoals;
      goals.own += homeTeamGoals;
    }
    return goals;
  };

  private parseMatch = (match: IMatch, team: ITeamMatches): MatchResult => {
    const goals = this.computeGoals(match, team.id);
    const result = this.getMatchResult(goals);
    return result;
  };

  private getTeamRank = (team: ITeamMatches): TeamRank => {
    const { teamName, homeMatches = [], awayMatches = [] } = team;
    const matches = [...homeMatches, ...awayMatches];
    let teamRank = this.generateEmptyRank({ name: teamName });

    for (let i = 0; i < matches.length; i += 1) {
      const matchResult = this.parseMatch(matches[i], team);
      teamRank = this.updateTeamRank(teamRank, matchResult);
    }

    teamRank.goalsBalance = teamRank.goalsFavor - teamRank.goalsOwn;
    teamRank.efficiency = (teamRank.totalPoints / (teamRank.totalGames * 3)) * 100;
    teamRank.efficiency = Number(teamRank.efficiency.toFixed(2));

    return teamRank;
  };

  public getAll = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
        { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return new SortTeams(ranks).sort();
  };

  public getByHomeMatches = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return new SortTeams(ranks).sort();
  };

  public getByAwayMatches = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return new SortTeams(ranks).sort();
  };
}

export default LeaderBoardService;
