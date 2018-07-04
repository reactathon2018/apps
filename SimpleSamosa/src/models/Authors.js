import { PostModel } from './models';
const resolvers = {
  Authors: {
    posts(author, args, context) {
      return PostModel.findByAuthor(author.id, context);
    },
  },
// ...
};