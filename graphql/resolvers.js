const woongstar = {
  name: "Woognstar",
  age: 27,
  gender: "female",
};

const resolvers = {
  Query: {
    person: () => woongstar,
  },
};
export default resolvers;
