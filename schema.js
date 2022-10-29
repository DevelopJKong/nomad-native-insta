import client from './client';

export const resolvers = {
  Query: {
    movies: () => client.movie.findMany(),
    movie: () => ({ title: 'Hello', year: 2021 }),
  },
  Mutation: {
    createMovie: (_, { title, year, genre }) => {
      return client.movie.create({
        data: {
          title,
          year,
          genre,
        },
      });
    },
    deleteMovie: (_, args) => {
      console.log(args);
      return true;
    },
  },
};
