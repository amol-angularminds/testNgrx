const Joi = require("joi");

const registerProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    original_mrp: Joi.number().required(),
    description: Joi.string().required(),
    stockQuantity: Joi.number().required(),
    discount: Joi.number(),
    selling_mrp: Joi.number(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().required(),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.string(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      original_price: Joi.number(),
      description: Joi.string(),
      stockQuantity: Joi.number(),
      category: Joi.string(),
      discount: Joi.number(),
      selling_mrp: Joi.number()
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string(),
  }),
};

module.exports = {
  registerProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
