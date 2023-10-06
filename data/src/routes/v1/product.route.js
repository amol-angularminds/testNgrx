const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product.validation");
const productController = require("../../controllers/product.controller");
const router = express.Router();

router.post(
  "/addNewProduct",
  validate(productValidation.registerProduct),
  productController.addProduct
);

router.delete(
  "/removeProduct",
  validate(productValidation.deleteProduct),
  productController.deleteProduct
);

router.patch(
  "/updateProduct",
  validate(productValidation.updateProduct),
  productController.updateProduct
);

module.exports = router;
