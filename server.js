import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    id: Int
    title: String
    year: Int
  }

  type Query {
    movies: [Movie]
    movie: Movie
  }
  type Mutation {
    createMovie(title: String, year: Int): Boolean
    deleteMovie(title: String!): Boolean
  }
`;

const resolvers = {
  Query: {
    movies: () => [],
    movie: () => ({ title: 'Hello', year: 2021 }),
  },
  Mutation: {
    createMovie: (_, args) => {
      console.log(args);
      return true;
    },
    deleteMovie: (_, args) => {
      console.log(args);
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(5000).then(() => console.log('http://localhost:5000'));
