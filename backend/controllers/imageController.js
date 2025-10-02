const mongoose = require('mongoose');
const Image = mongoose.model('Image', new mongoose.Schema({
  legion: String,
  urls: [String]
}));

exports.getImagesByLegion = async (req, res) => {
  try {
    const legion = req.params.legion;
    const images = await Image.findOne({ legion });
    res.json(images ? images.urls : []);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};