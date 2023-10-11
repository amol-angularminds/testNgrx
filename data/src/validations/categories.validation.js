const Joi = require('joi');

const mainCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  subCategory:
});

const subCategorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
});

const mainCategory = new Category({
  name: 'Electronics',
  description: 'Main category for electronic products',
  isMainCategory: true,
});

mainCategory.save();

// Creating a subcategory
const subCategory = new Category({
  name: 'Laptops',
  description: 'Subcategory for laptops',
  parent: mainCategory._id, // Reference to the main category
});

subCategory.save();
module.exports = {
  mainCategorySchema,
  subCategorySchema
};
