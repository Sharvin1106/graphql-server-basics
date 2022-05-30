const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    //User Resolvers
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const id = args.id;
      return UserList.find((user) => user.id === +id);
    },

    //Movie Resolvers
    movies: () => MovieList,
    movie: (_, args) => {
      const name = args.name;
      return MovieList.find((movie) => movie.name === name);
    },
  },
};

module.exports = { resolvers };
