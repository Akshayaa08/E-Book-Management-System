const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  plan: String, // "Basic" or "Premium"
  startDate: { type: Date, default: Date.now },
  expiryDate: Date,
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
