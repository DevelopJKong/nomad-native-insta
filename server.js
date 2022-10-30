import { ApolloServer } from 'apollo-server';
import schema from './schema';
const server = new ApolloServer({
  schema,
});

server.listen(5000).then(() => console.log('http://localhost:5000'));
