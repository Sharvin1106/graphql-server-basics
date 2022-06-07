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
  User: {
    favoriteMovies: () =>
      MovieList.filter(
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      ),
  },
  Mutation: {
    createUser: (_, args) => {
      const user = args.input;
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
      return user;
    },
    updateUser: (_, args) => {
      const { id, newUsername } = args.input;
      console.log(id);
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === +id) {
          user.username = newUsername;
          userUpdated = user;
          console.log("hello");
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
