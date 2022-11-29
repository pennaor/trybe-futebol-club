interface IMatchGoals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface IMatch extends IMatchGoals {
  homeTeam: number;
  awayTeam: number;
}

export { IMatch, IMatchGoals };
