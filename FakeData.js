const UserList = [
  {
    id: 1,
    name: "Sharvin",
    username: "sharvin",
    age: 22,
    nationality: "MALAYSIA",
    friends: [
      {
        id: 2,
        name: "Harchu",
        username: "harchu",
        age: 22,
        nationality: "MALAYSIA",
      },
      {
        id: 1,
        name: "Kaths",
        username: "kaths",
        age: 22,
        nationality: "MALAYSIA",
      },
    ],
  },
  {
    id: 2,
    name: "Harchu",
    username: "harchu",
    age: 22,
    nationality: "MALAYSIA",
  },
  {
    id: 3,
    name: "Kaths",
    username: "kaths",
    age: 22,
    nationality: "MALAYSIA",
    friends: [
      {
        id: 2,
        name: "Harchu",
        username: "harchu",
        age: 22,
        nationality: "MALAYSIA",
      },
    ],
  },
  {
    id: 4,
    name: "Nishku",
    username: "nish",
    age: 22,
    nationality: "MALAYSIA",
  },
  {
    id: 5,
    name: "Jeevi",
    username: "JV",
    age: 22,
    nationality: "MALAYSIA",
  },
];

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Interstellar",
    yearOfPublication: 2007,
    isInTheaters: true,
  },
  {
    id: 3,
    name: "Superbad",
    yearOfPublication: 2009,
    isInTheaters: true,
  },
  {
    id: 1,
    name: "PedroTech The Movie",
    yearOfPublication: 2035,
    isInTheaters: false,
  },
];

module.exports = { UserList, MovieList };
