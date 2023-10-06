const mongoose = require('mongoose');

// Define the ShoppingCart schema
const shoppingCartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the "users" collection
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the "products" collection
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1, // Default quantity is 1
      },
    },
  ],
});

// Create the ShoppingCart model
const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;
