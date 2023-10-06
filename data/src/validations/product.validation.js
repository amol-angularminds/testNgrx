const Joi = require("joi");

const registerProduct = {
  body: Joi.object().keys({
    p_name: Joi.string().required(),
    category: Joi.string().required(),
    original_mrp: Joi.number().required(),
    p_desc: Joi.string().required(),
    p_quantity: Joi.number().required(),
    discount: Joi.number(),
    selling_mrp: Joi.number(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    p_name: Joi.string(),
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
    productId: Joi.required().required(),
  }),
  body: Joi.object()
    .keys({
      p_name: Joi.string(),
      original_price: Joi.number(),
      p_desc: Joi.string(),
      p_quantity: Joi.number(),
      category: Joi.string(),
      discount_mrp: Joi.number(),
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
