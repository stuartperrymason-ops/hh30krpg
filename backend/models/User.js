const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: String,
  passwordHash: String,
  legion: String,
  primarch: String,
  level: { type: Number, default: 1 },
  inventory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
  completedQuests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
  activeQuest: { type: mongoose.Schema.Types.ObjectId, ref: 'Quest' },
  choicesHistory: [{ questId: mongoose.Schema.Types.ObjectId, choice: String }]
});
module.exports = mongoose.model('User', userSchema);