const finished = [
  {
    id: 1,
    homeTeam: 1,
    homeTeamGoals: 5,
    awayTeam: 2,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 2,
    homeTeam: 1,
    homeTeamGoals: 3,
    awayTeam: 3,
    awayTeamGoals: 2,
    inProgress: false,
  },
  {
    id: 3,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 4,
    awayTeamGoals: 2,
    inProgress: false,
  },
  {
    id: 4,
    homeTeam: 2,
    homeTeamGoals: 1,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 5,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 4,
    awayTeamGoals: 4,
    inProgress: false,
  },
  {
    id: 6,
    homeTeam: 3,
    homeTeamGoals: 3,
    awayTeam: 4,
    awayTeamGoals: 0,
    inProgress: false,
  },
  {
    id: 7,
    homeTeam: 3,
    homeTeamGoals: 3,
    awayTeam: 5,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 8,
    homeTeam: 3,
    homeTeamGoals: 2,
    awayTeam: 6,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 9,
    homeTeam: 4,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 0,
    inProgress: false,
  },
  {
    id: 10,
    homeTeam: 4,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 4,
    inProgress: false,
  },
  {
    id: 11,
    homeTeam: 4,
    homeTeamGoals: 2,
    awayTeam: 3,
    awayTeamGoals: 0,
    inProgress: false,
  },
  {
    id: 12,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 3,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 13,
    homeTeam: 5,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 14,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 4,
    awayTeamGoals: 1,
    inProgress: false,
  },
  {
    id: 15,
    homeTeam: 6,
    homeTeamGoals: 1,
    awayTeam: 5,
    awayTeamGoals: 2,
    inProgress: false,
  },
];

const inProgress = [
  {
    id: 16,
    homeTeam: 1,
    homeTeamGoals: 6,
    awayTeam: 3,
    awayTeamGoals: 5,
    inProgress: true,
  },
  {
    id: 17,
    homeTeam: 2,
    homeTeamGoals: 5,
    awayTeam: 4,
    awayTeamGoals: 5,
    inProgress: true,
  },
];

const newMatch = {
  id: 99,
  homeTeam: 3,
  homeTeamGoals: 3,
  awayTeam: 4,
  awayTeamGoals: 4,
  inProgress: true,
};

export default {
  inProgress,
  finished,
  all: [...inProgress, ...finished],
  new: newMatch,
};
