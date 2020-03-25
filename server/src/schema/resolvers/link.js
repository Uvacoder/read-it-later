import { AuthenticationError, UserInputError } from 'apollo-server-express';
import { Link } from '~/models/Link';
import { Category } from '~/models/Category';

const link = {
  Mutation: {
    createLink: async (_, { _id, text, link, category }) => {
      // GET ID
      const currentCategory = await Category.find({ category });
      const categoryGetId = currentCategory.map((el) => el._id.toString());
      const cat = await Category.findById(categoryGetId);

      const newLink = new Link({
        _id,
        text,
        link,
        category,
      });

      if (currentCategory.length > 0) {
        cat.links.unshift(newLink);

        await cat.save();
        return cat;
      } else {
        throw new UserInputError('Category not found');
      }
    },
    archiveLink: async (_, { _id, category }) => {
      const currentCategory = await Category.findOne({ category });

      if (currentCategory) {
        const { links } = currentCategory;
        const linkIndex = links.findIndex((link) => link._id == _id);

        if (linkIndex !== -1) {
          links.splice(linkIndex, 1);

          await currentCategory.save();
          return currentCategory;
        } else {
          throw new AuthenticationError(`Doesn't exist!`);
        }
      } else {
        throw new UserInputError('Link not found');
      }
    },
  },
};

export default link;
