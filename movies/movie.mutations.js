import client from '../client';
export default {
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
