// c1/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // 假设您已经创建了用户模型
const authenticateToken = require('../middleware/authenticateToken');

// 更新用户信息的路由
router.put('/update', authenticateToken, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
        res.send(user);
    } catch (error) {
        res.status(500).send('Error updating user info');
    }
});

module.exports = router;