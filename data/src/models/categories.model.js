const mongoose = require('mongoose');

// Define the Category schema
const mainCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
  subCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory', // Reference to the "SubCategory" collection
    },
  ]
});


const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: String,
});

// Create the Category model
const mainCategory = mongoose.model('MainCategory', mainCategorySchema);
const subCategory = mongoose.model('SubCategory', subCategorySchema);

module.exports = {
  mainCategory,
  subCategory
};
