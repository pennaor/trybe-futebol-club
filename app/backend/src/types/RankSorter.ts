import TeamRank from './TeamRank';

type SortCondition = (afterElement: TeamRank, beforeElement: TeamRank) => boolean;

type SortRule = ['string', SortCondition];

type SortRules = SortRule[];

interface SortRulesMap {
  [key: string]: SortCondition;
}

interface IRankSorter {
  teamsRank: TeamRank[];
  sort(): TeamRank[];
}

export {
  SortCondition,
  SortRule,
  SortRules,
  SortRulesMap,
  IRankSorter,
};
