const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/auth');
const { authPlugins } = require('mysql2');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const uploadRoutes = require('./routes/upload');

const app = express();
const PORT = 5000;

// app.use(cors());

app.use(cors({
  origin: 'http://10.0.0.32:3000',
  credentials: true
}));
app.use(express.json());

app.use('/api' , authRoutes);
app.use('/api/posts' , postRoutes);
app.use('/api/upload' , uploadRoutes);

app.listen(PORT , '0.0.0.0', () => {
  console.log(`서버 포트 ${PORT}여기서 돌아가는중`);
});

