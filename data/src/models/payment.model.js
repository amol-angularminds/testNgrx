const mongoose = require('mongoose');

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Reference to the "orders" collection
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'PayPal', 'Stripe', 'Cash on Delivery'], // Add more options as needed
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionId: String,
  // You can include additional fields related to payments, such as billing information, payment status, etc.
});

// Create the Payment model
const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
