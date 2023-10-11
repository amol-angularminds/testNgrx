const Joi = require("joi");

const registerProduct = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string().required(),
    stockQuantity: Joi.number(),
    pricing: Joi.object().keys({
      price: Joi.number(),
      discount: Joi.number(),
      MRP: Joi.number(),
    }),
    shipping_details: Joi.object().keys({
      weight: Joi.number(),
      width: Joi.number(),
      height: Joi.number(),
      depth: Joi.number(),
    }),
    manufacture_details: Joi.object().keys({
      model_number: Joi.string(),
      release_date: Joi.date()
    }),
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
    category: Joi.string(),
    description: Joi.string(),
    stockQuantity: Joi.number(),
    pricing: Joi.object().keys({
      price: Joi.number(),
      discount: Joi.number(),
      MRP: Joi.number(),
    }),
    shipping_details: Joi.object().keys({
      weight: Joi.number(),
      width: Joi.number(),
      height: Joi.number(),
      depth: Joi.number(),
    }),
    manufacture_details: Joi.object().keys({
      model_number: Joi.string(),
      release_date: Joi.date()
    }),
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
