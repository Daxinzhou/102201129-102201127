const mongoose = require('mongoose');

// 连接字符串
const uri = 'mongodb://localhost:27017/yourDatabaseName';

// 连接数据库
mongoose.connect(uri);

// 监听连接事件
const db = mongoose.connection;

db.on('error', console.error.bind(console, '连接错误:'));

db.once('open', async function() {
    console.log('成功连接到数据库');

    // 示例模型
    const UserSchema = new mongoose.Schema({
        name: String,
        email: String
    });

    const User = mongoose.model('User', UserSchema);

    // 示例操作
    try {
        const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
        await newUser.save();
        console.log(`用户 ${newUser.name} 已保存`);
    } catch (err) {
        console.error(err);
    }
});