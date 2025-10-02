const NPC = require('../models/NPC');
exports.getAllNPCs = async (req, res) => {
  try {
    const npcs = await NPC.find({});
    res.json(npcs);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.getNPCById = async (req, res) => {
  try {
    const npc = await NPC.findById(req.params.id);
    res.json(npc);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};