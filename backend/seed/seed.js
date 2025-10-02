const mongoose = require('mongoose');
const Quest = require('../models/Quest');
const NPC = require('../models/NPC');
const Item = require('../models/Item');

mongoose.connect('mongodb://localhost:27017/horus_heresy_rpg', { useNewUrlParser: true, useUnifiedTopology: true });

const quests = require('./quests.json');
const npcs = require('./npcs.json');
const items = require('./items.json');

Promise.all([
  Item.insertMany(items),
  NPC.insertMany(npcs),
]).then(() => {
  return Quest.insertMany(quests);
}).then(() => {
  console.log('Seeded all data!');
  mongoose.disconnect();
});