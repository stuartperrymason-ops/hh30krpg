const Quest = require('../models/Quest');
const User = require('../models/User');

exports.getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find({});
    res.json(quests);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getQuestById = async (req, res) => {
  try {
    const quest = await Quest.findById(req.params.id);
    res.json(quest);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.progressQuest = async (req, res) => {
  try {
    const { userId, choice } = req.body;
    const quest = await Quest.findById(req.params.id);
    const chosen = quest.choices.find(c => c.option === choice);
    const user = await User.findById(userId);

    if (!user || !chosen) return res.status(400).json({ error: "Invalid user or choice" });

    user.completedQuests.push(quest._id);
    user.choicesHistory.push({ questId: quest._id, choice });
    if (chosen.rewardItemIds && chosen.rewardItemIds.length) {
      user.inventory.push(...chosen.rewardItemIds);
    }
    user.activeQuest = chosen.nextQuestId || null;
    await user.save();
    res.json({ success: true, user });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};