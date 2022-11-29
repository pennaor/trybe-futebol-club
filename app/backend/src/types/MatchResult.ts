import Goals from './Goals';

type MatchResult = {
  points: 0 | 1 | 3;
  victories: 0 | 1;
  draws: 0 | 1;
  losses: 0 | 1;
  goals: Goals;
};

export { Goals, MatchResult };
