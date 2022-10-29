import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(5000).then(() => console.log('http://localhost:5000'));
