import { TeamRank } from '../../types';

type SortCondition = (afterElement: TeamRank, beforeElement: TeamRank) => boolean;

type SortRule = ['string', SortCondition];

type SortRules = SortRule[];

interface SortRulesMap {
  [key: string]: SortCondition
}

class SortTeams {
  readonly sortRulesDefault: SortRulesMap = {
    totalPoints: (a, b) => a.totalPoints > b.totalPoints,
    totalVictories: (a, b) => a.totalVictories > b.totalVictories,
    goalsBalance: (a, b) => a.goalsBalance > b.goalsBalance,
    goalsFavor: (a, b) => a.goalsFavor > b.goalsFavor,
    goalsOwn: (a, b) => a.goalsOwn < b.goalsOwn,
  };

  private _sortRules: SortRules;

  private _teamsRank: TeamRank[];

  private _sortIndexCount = 0;

  constructor(
    teamsRank: TeamRank[],
    rules?: SortRulesMap,
  ) {
    this._teamsRank = teamsRank;
    this._sortRules = this.parseSortRules(rules ?? this.sortRulesDefault);
  }

  public get teamsRank(): TeamRank[] {
    return this._teamsRank;
  }

  public get sortRules(): SortRules {
    return this._sortRules;
  }

  public parseSortRules(rules: SortRulesMap): SortRules {
    const sortRules = Object.entries(rules);
    const rankKeys = Object.keys(this.teamsRank[0]);
    if (!sortRules.every(([name, _c]) => rankKeys.includes(name))) {
      throw new Error('Some rule doesn\'t match a TeamRank property!');
    }
    return sortRules as SortRules;
  }

  public changeSortRules(rules: SortRulesMap) {
    this._sortRules = this.parseSortRules(rules);
  }

  public runRulesConditions = (a: TeamRank, b: TeamRank): number => {
    const rule = this.sortRules[this._sortIndexCount];
    if (rule) {
      const [key, condition] = rule;
      if (condition(a, b)) {
        this._sortIndexCount = 0;
        return -1;
      }
      if (a[key] === b[key]) {
        this._sortIndexCount += 1;
        return this.runRulesConditions(a, b);
      }
    }
    this._sortIndexCount = 0;
    return 0;
  };

  public sort = (): TeamRank[] => this.teamsRank.sort(this.runRulesConditions);
}

export default SortTeams;
