const mongoose = require('mongoose');
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/horus_heresy_rpg", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (e) {
    console.error("MongoDB connection error: ", e);
    process.exit(1);
  }
};
module.exports = dbConnect;