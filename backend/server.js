require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./utils/db');
const app = express();
dbConnect();
app.use(cors());
app.use(express.json());
app.use('/api/quests', require('./routes/quests'));
app.use('/api/users', require('./routes/users'));
app.use('/api/npcs', require('./routes/npcs'));
app.use('/api/items', require('./routes/items'));
app.use('/api/images', require('./routes/images'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});