import { IMatch } from '../interfaces';
import Team from '../database/models/Team';
import Match from '../database/models/Match';

interface TeamMatches {
  id: number;
  teamName: string;
  homeMatches?: IMatch[];
  awayMatches?: IMatch[];
  inProgress?: boolean;
}

type TeamRank = {
  id?: number;
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
};

const emptyRank: TeamRank = {
  id: 0,
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

class LeaderBoardService {
  private _teamModel = Team;

  private _matchModel = Match;

  private setMatchResult = (teamRank: TeamRank): TeamRank => {
    const rank = { ...teamRank };
    if (teamRank.goalsFavor > teamRank.goalsOwn) {
      rank.totalPoints += 3;
      rank.totalVictories += 1;
    } else if (teamRank.goalsFavor === teamRank.goalsOwn) {
      rank.totalPoints += 1;
      rank.totalDraws += 1;
    } else {
      rank.totalLosses += 1;
    }
    return rank;
  };

  private computeGoals = (teamRank: TeamRank, match: IMatch): TeamRank => {
    const rank = { ...teamRank };
    rank.totalGames += 1;

    if (rank.id === match.homeTeam) {
      rank.goalsFavor += match.homeTeamGoals;
      rank.goalsOwn += match.awayTeamGoals;
    } else {
      rank.goalsFavor += match.awayTeamGoals;
      rank.goalsOwn += match.homeTeamGoals;
    }

    delete rank.id;
    return this.setMatchResult(rank);
  };

  private getTeamRank = (team: TeamMatches): TeamRank => {
    const { id, teamName, homeMatches = [], awayMatches = [] } = team;
    const matches = [...homeMatches, ...awayMatches];
    const newRank = { ...emptyRank, id };
    newRank.name = teamName;

    const rank = matches.reduce(this.computeGoals, newRank);

    rank.goalsBalance = rank.goalsFavor - rank.goalsOwn;
    rank.efficiency = (rank.totalPoints / (rank.totalGames * 3)) * 100;
    rank.efficiency = Number(rank.efficiency.toFixed(2));

    return rank;
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
    const teams: TeamMatches[] = await this._teamModel.findAll({
      include: [
        { model: this._matchModel, as: 'homeMatches', where: { inProgress: false } },
        { model: this._matchModel, as: 'awayMatches', where: { inProgress: false } },
      ],
    });
    const ranks = teams.map(this.getTeamRank);

    return this.orderTeams(ranks);
  };
}

export default LeaderBoardService;
