const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category', // Reference to the "categories" collection
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    pricing: {
      price: {
        type: Number,
        required: true,
      },
      discount: {
        type: Number,
      },
      MRP: {
        type: Number,
        required: true,
      }
    },
    shipping_details: {
      weight: {
        type: String
      },
      width: {
        type: String
      },
      height: {
        type: String
      },
      depth: {
        type: String
      }
    },
    manufacture_details: {
      model_number: {
        type: String
      },
      release_date: {
        type: Date
      },
    },
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User', // Reference to the "users" collection
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);




/**
 * @typedef Product
 */
const Products = mongoose.model("Products", productSchema);

module.exports = Products;