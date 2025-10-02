const mongoose = require('mongoose');
const questSchema = new mongoose.Schema({
  title: String,
  arc: String,
  description: String,
  objectives: [String],
  choices: [{
    option: String,
    result: String,
    nextQuestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest' },
    rewardItemIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
  }],
  imageUrl: String,
  requiredLevel: Number,
  npcIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'NPC' }]
});
module.exports = mongoose.model('Quest', questSchema);