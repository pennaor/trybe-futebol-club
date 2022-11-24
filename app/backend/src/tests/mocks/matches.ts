const finished = [
  {
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 5,
    awayTeam: 2,
    awayTeamGoals: 5,
    inProgress: false,
  },
  {
    id: 2,
    homeTeam: 3,
    homeTeamGoals: 5,
    awayTeam: 4,
    awayTeamGoals: 6,
    inProgress: false,
  }
];

const inProgress = [
  {
    id: 3,
    homeTeam: 1,
    homeTeamGoals: 6,
    awayTeam: 3,
    awayTeamGoals: 5,
    inProgress: true,
  },
  {
    id: 4,
    homeTeam: 2,
    homeTeamGoals: 5,
    awayTeam: 4,
    awayTeamGoals: 5,
    inProgress: true,
  },
];

const newMatch = {
  id: 5,
  homeTeam: 3,
  homeTeamGoals: 3,
  awayTeam: 4,
  awayTeamGoals: 4,
  inProgress: true,
};

const matches = {
  inProgress,
  finished,
  all: [...inProgress, ...finished],
  new: newMatch,
};

export default matches;
