const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/auth');
const { authPlugins } = require('mysql2');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const uploadRoutes = require('./routes/upload');
const mypageRoutes = require('./routes/mypage');
const userRoutes = require('./routes/user');
const deleteRoutes = require('./routes/postManage');

const app = express();
const PORT = 5000;

// app.use(cors());

// 10.0.0.32에서 cors 허용
// 나중에 이건 자세히 봐야할듯
app.use(cors({
  origin: `${process.env.REACT_APP_FRONT_URL}`,
  credentials: true
}));
app.use(express.json());

// 라우터 연결
app.use('/api' , authRoutes);
app.use('/api/posts' , postRoutes);
app.use('/api/upload' , uploadRoutes);
app.use('/user' , mypageRoutes);
app.use('/user/delete' , userRoutes);
app.use('/manage', deleteRoutes);

app.listen(PORT , '0.0.0.0', () => {
  // console.log(`서버 포트 ${PORT}여기서 돌아가는중`);
});

