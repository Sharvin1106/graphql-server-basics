const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      const id = args.id;
      return UserList.find((user) => user.id === +id);
    },
  },
};

module.exports = { resolvers };
