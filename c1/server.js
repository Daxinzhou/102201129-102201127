// c1/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();

// 允许跨域请求
app.use(cors());

// 连接数据库
mongoose.connect('mongodb://localhost:27017/zhoudaxin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// 解析 JSON 和 urlencoded 请求体
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 使用路由
app.use('/api/user', userRoutes);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});