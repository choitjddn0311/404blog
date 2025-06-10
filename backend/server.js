const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const routes = require('./routes/index');

dotenv.config();

const app = express();

app.use(cors()); // CORS 활성화
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('비정상적인 접근입니다.');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});