const Joi = require("joi");

const registerProduct = {
  body: Joi.object().keys({
    p_name: Joi.string().required(),
    category: Joi.string().required(),
    original_price: Joi.number().required(),
    p_desc: Joi.string().required(),
    p_quantity: Joi.number().required().min(100),
    discount_price: Joi.number(),
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
    // productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    // productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      p_name: Joi.string(),
      original_price: Joi.number(),
      p_desc: Joi.string(),
      p_quantity: Joi.number(),
      category: Joi.string(),
      discount_price: Joi.number(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    // productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  registerProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
