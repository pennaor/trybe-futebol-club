import { IMatch, MatchResult, Goals } from '../../types';

class MatchParser {
  private _matchResult!: MatchResult;

  private _match!: IMatch;

  private _teamId!: number;

  // constructor(match: IMatch, teamId: number) {
  //   this._match = match;
  //   this._teamId = teamId;
  // }

  public init(match: IMatch, teamId: number) {
    this._match = match;
    this._teamId = teamId;
    return this;
  }

  private getMatchResult = (goals: Goals): MatchResult => {
    const result = this.generateEmptyResult({ goals });
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

  private computeGoals = (): Goals => {
    const { homeTeam, homeTeamGoals, awayTeamGoals } = this.match;
    const goals: Goals = { favor: 0, own: 0 };

    if (this.teamId === homeTeam) {
      goals.favor += homeTeamGoals;
      goals.own += awayTeamGoals;
    } else {
      goals.favor += awayTeamGoals;
      goals.own += homeTeamGoals;
    }
    return goals;
  };

  public generateEmptyResult = (init: object): MatchResult => ({
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

  public parse = (): MatchResult => {
    if (!this.match || !this._teamId) {
      throw new Error('This instance must be initialized with init() method');
    }
    const goals = this.computeGoals();
    this._matchResult = this.getMatchResult(goals);
    return this.matchResult;
  };

  public get matchResult(): MatchResult {
    return this._matchResult;
  }

  public get match() : IMatch {
    return this._match;
  }

  public get teamId() : number {
    return this._teamId;
  }
}

export default MatchParser;
