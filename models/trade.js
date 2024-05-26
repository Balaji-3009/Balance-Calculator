const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  utcTime: { type: Date, required: true },
  operation: { type: String, required: true, enum: ['Buy', 'Sell'] },
  baseCoin: { type: String, required: true },
  quoteCoin: { type: String, required: true },
  amount: { type: Number, required: true },
  price: { type: Number, required: true },
  market: { type: String, required: true }
});

const trade = mongoose.model('trade', tradeSchema);

module.exports = trade;
