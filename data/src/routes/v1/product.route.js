const express = require("express");
const validate = require("../../middlewares/validate");
const productValidation = require("../../validations/product.validation");
const productController = require("../../controllers/product.controller");
const router = express.Router();

router.post(
  "/registerProduct",
  validate(productValidation.registerProduct),
  productController.addProduct
);
// router.post('/login', validate(productValidation.login), productController.login);
// router.post('/logout', validate(productValidation.logout), productController.logout);
// router.post('/refresh-tokens', validate(productValidation.refreshTokens), productController.refreshTokens);
// router.post('/forgot-password', validate(productValidation.forgotPassword), productController.forgotPassword);
// router.post('/reset-password', validate(productValidation.resetPassword), productController.resetPassword);
// router.post('/send-verification-email', auth(), productController.sendVerificationEmail);

module.exports = router;
