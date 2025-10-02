const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  imageUrl: String,
  stats: {
    damage: Number,
    defense: Number,
    bonus: String
  }
});
module.exports = mongoose.model('Item', itemSchema);