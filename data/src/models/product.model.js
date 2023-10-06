const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    p_name: {
      type: String,
      required: true,
      trim: true,
    },
    original_mrp: {
      type: Number,
      required: true,
    },
    p_desc: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    p_quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      lowercase: true,
    },
    selling_mrp: {
      type: Number,
      required: true,
    },
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