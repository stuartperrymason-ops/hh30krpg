const User = require('../models/User');
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('inventory')
      .populate('activeQuest');
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, email, passwordHash, legion, primarch } = req.body;
    const user = new User({ username, email, passwordHash, legion, primarch });
    await user.save();
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};