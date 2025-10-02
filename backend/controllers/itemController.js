const Item = require('../models/Item');
exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.json(items);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};