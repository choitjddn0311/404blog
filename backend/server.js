const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/auth');
const { authPlugins } = require('mysql2');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());

app.use('/api' , authRoutes);

app.listen(PORT , () => {
  console.log(`서버 포트 ${PORT}여기서 돌아가는중`);
});

