const mongoose = require('mongoose');
const npcSchema = new mongoose.Schema({
  name: String,
  legion: String,
  primarch: String,
  description: String,
  imageUrl: String,
  stats: {
    hp: Number,
    attack: Number,
    defense: Number,
    skills: [String]
  }
});
module.exports = mongoose.model('NPC', npcSchema);