import client from '../client';
export default {
  Query: {
    movies: () => client.movie.findMany(),
    movie: () => ({ title: 'Hello', year: 2021 }),
  },
};
