import { IMatch, ITeamMatches } from '../interfaces';
import { TeamRank } from '../types';
import Team from '../database/models/Team';
import Match from '../database/models/Match';

type Goals = {
  favor: number;
  own: number;
};

type MatchResult = {
  points: 0 | 1 | 3;
  victories: 0 | 1;
  draws: 0 | 1;
  losses: 0 | 1;
  goals: Goals;
};

const emptyMatchResult: MatchResult = {
  points: 0,
  victories: 0,
  draws: 0,
  losses: 0,
  goals: {
    favor: 0,
    own: 0,
  },
};

const emptyRank: TeamRank = {
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
};

interface ITeam {
  id: number;
  teamName: string;
}

class LeaderBoardService {
  private _teamModel = Team;

  private _matchModel = Match;

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
    const result: MatchResult = { ...emptyMatchResult, goals };
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

  private parseMatch = (match: IMatch, team: ITeam): MatchResult => {
    const goals = this.computeGoals(match, team.id);
    const result = this.getMatchResult(goals);
    return result;
  };

  private getTeamRank = (team: ITeamMatches): TeamRank => {
    const { teamName, homeMatches = [], awayMatches = [] } = team;
    const matches = [...homeMatches, ...awayMatches];
    let teamRank = { ...emptyRank, name: teamName };

    for (let i = 0; i < matches.length; i += 1) {
      const matchResult = this.parseMatch(matches[i], team);
      teamRank = this.updateTeamRank(teamRank, matchResult);
    }

    teamRank.goalsBalance = teamRank.goalsFavor - teamRank.goalsOwn;
    teamRank.efficiency = (teamRank.totalPoints / (teamRank.totalGames * 3)) * 100;
    teamRank.efficiency = Number(teamRank.efficiency.toFixed(2));

    return teamRank;
  };

  private orderByGoalsOwn = (a: TeamRank, b: TeamRank): number => {
    if (a.goalsOwn < b.goalsOwn) {
      return -1;
    }
    return 0;
  };

  private orderByGoalsFavor = (a: TeamRank, b: TeamRank): number => {
    if (a.goalsFavor === b.goalsFavor) {
      return this.orderByGoalsOwn(a, b);
    }
    if (a.goalsFavor > b.goalsFavor) {
      return -1;
    }
    return 0;
  };

  private orderByGoalsBalance = (a: TeamRank, b: TeamRank): number => {
    if (a.goalsBalance === b.goalsBalance) {
      return this.orderByGoalsFavor(a, b);
    }
    if (a.goalsBalance > b.goalsBalance) {
      return -1;
    }
    return 0;
  };

  private orderByVictories = (a: TeamRank, b: TeamRank): number => {
    if (a.totalVictories === b.totalVictories) {
      return this.orderByGoalsBalance(a, b);
    }
    if (a.totalVictories > b.totalVictories) {
      return -1;
    }
    return 0;
  };

  private orderTeams = (teamRanks: TeamRank[]): TeamRank[] => teamRanks.sort((a, b) => {
    if (a.totalPoints === b.totalPoints) {
      return this.orderByVictories(a, b);
    }
    if (a.totalPoints > b.totalPoints) {
      return -1;
    }
    return 0;
  });

  public getAll = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
        { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return this.orderTeams(ranks);
  };

  public getByHomeMatches = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return this.orderTeams(ranks);
  };

  public getByAwayMatches = async (): Promise<TeamRank[]> => {
    const teams: ITeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
      ],
    });

    const ranks = teams.map(this.getTeamRank);
    return this.orderTeams(ranks);
  };
}

export default LeaderBoardService;
