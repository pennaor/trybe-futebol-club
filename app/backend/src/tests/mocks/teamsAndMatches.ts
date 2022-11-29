const homeMatches = [
  {
    id: 1,
    teamName: 'Tabajara Futebol Clube',
    homeMatches: [
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
    ],
  },
  {
    id: 2,
    teamName: 'Maniacos Do Futebol',
    homeMatches: [
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
    ],
  },
  {
    id: 3,
    teamName: 'Fogo Real',
    homeMatches: [
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
    ],
  },
  {
    id: 4,
    teamName: 'Belo Time',
    homeMatches: [
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
    ],
  },
  {
    id: 5,
    teamName: 'São Janeiro',
    homeMatches: [
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
    ],
  },
  {
    id: 6,
    teamName: 'Rio paulo',
    homeMatches: [
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
    ],
  },
];

const awayMatches = [
  {
    id: 1,
    teamName: 'Tabajara Futebol Clube',
    awayMatches: [
      {
        id: 9,
        homeTeam: 4,
        homeTeamGoals: 0,
        awayTeam: 1,
        awayTeamGoals: 0,
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
    ],
  },
  {
    id: 2,
    teamName: 'Maniacos Do Futebol',
    awayMatches: [
      {
        id: 1,
        homeTeam: 1,
        homeTeamGoals: 5,
        awayTeam: 2,
        awayTeamGoals: 1,
        inProgress: false,
      },
      {
        id: 4,
        homeTeam: 2,
        homeTeamGoals: 1,
        awayTeam: 2,
        awayTeamGoals: 1,
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
    ],
  },
  {
    id: 3,
    teamName: 'Fogo Real',
    awayMatches: [
      {
        id: 4,
        homeTeam: 2,
        homeTeamGoals: 1,
        awayTeam: 3,
        awayTeamGoals: 1,
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
    ],
  },
  {
    id: 4,
    teamName: 'Belo Time',
    awayMatches: [
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
        id: 14,
        homeTeam: 6,
        homeTeamGoals: 1,
        awayTeam: 4,
        awayTeamGoals: 1,
        inProgress: false,
      },
    ],
  },
  {
    id: 5,
    teamName: 'São Janeiro',
    awayMatches: [
      {
        id: 7,
        homeTeam: 3,
        homeTeamGoals: 3,
        awayTeam: 5,
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
    ],
  },
  {
    id: 6,
    teamName: 'Rio Paulo',
    awayMatches: [
      {
        id: 8,
        homeTeam: 3,
        homeTeamGoals: 2,
        awayTeam: 6,
        awayTeamGoals: 1,
        inProgress: false,
      },
    ],
  },
];

const allMatches = [
  {
    id: 1,
    teamName: 'Tabajara Futebol Clube',
    homeMatches: [
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
    ],
    awayMatches: [
      {
        id: 9,
        homeTeam: 4,
        homeTeamGoals: 0,
        awayTeam: 1,
        awayTeamGoals: 0,
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
    ],
  },
  {
    id: 2,
    teamName: 'Maniacos Do Futebol',
    homeMatches: [
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
    ],
    awayMatches: [
      {
        id: 1,
        homeTeam: 1,
        homeTeamGoals: 5,
        awayTeam: 2,
        awayTeamGoals: 1,
        inProgress: false,
      },
      {
        id: 4,
        homeTeam: 2,
        homeTeamGoals: 1,
        awayTeam: 2,
        awayTeamGoals: 1,
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
    ],
  },
  {
    id: 3,
    teamName: 'Fogo Real',
    homeMatches: [
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
    ],
    awayMatches: [
      {
        id: 4,
        homeTeam: 2,
        homeTeamGoals: 1,
        awayTeam: 3,
        awayTeamGoals: 1,
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
    ],
  },
  {
    id: 4,
    teamName: 'Belo Time',
    homeMatches: [
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
    ],
    awayMatches: [
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
        id: 14,
        homeTeam: 6,
        homeTeamGoals: 1,
        awayTeam: 4,
        awayTeamGoals: 1,
        inProgress: false,
      },
    ],
  },
  {
    id: 5,
    teamName: 'São Janeiro',
    homeMatches: [
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
    ],
    awayMatches: [
      {
        id: 7,
        homeTeam: 3,
        homeTeamGoals: 3,
        awayTeam: 5,
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
    ],
  },
  {
    id: 6,
    teamName: 'Rio paulo',
    homeMatches: [
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
    ],
    awayMatches: [
      {
        id: 8,
        homeTeam: 3,
        homeTeamGoals: 2,
        awayTeam: 6,
        awayTeamGoals: 1,
        inProgress: false,
      },
    ],
  },
];

export default {
  homeMatches,
  awayMatches,
  allMatches,
};
