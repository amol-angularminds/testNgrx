const Joi = require('joi');

const orderSchema = Joi.object({
  userId: Joi.objectId().required(), // Assuming you have a custom Joi extension for ObjectId validation
  orderDate: Joi.date(),
  status: Joi.string().valid('Processing', 'Shipped', 'Delivered').default('Processing'),
  items: Joi.array().items(
    Joi.object({
      productId: Joi.objectId().required(), // Assuming you have a custom Joi extension for ObjectId validation
      quantity: Joi.number().required(),
      price: Joi.number().required(),
    })
  ),
  totalPrice: Joi.number().required(),
});

module.exports = orderSchema;
