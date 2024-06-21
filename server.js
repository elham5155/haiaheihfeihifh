// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// اتصال به MongoDB
mongoose.connect('mongodb://localhost:27017/miningApp', { useNewUrlParser: true, useUnifiedTopology: true });

// مدل کاربر
const userSchema = new mongoose.Schema({
    userId: String,
    coins: Number,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

// Endpoint برای شروع ماینینگ
app.post('/start-mining', async (req, res) => {
    const userId = req.body.userId || generateRandomId();
    let user = await User.findOne({ userId });

    if (!user) {
        user = new User({ userId, coins: 0 });
        await user.save();
    }

    res.json({ userId, coins: user.coins });
});

// تابع تولید شناسه تصادفی
function generateRandomId() {
    return 'user_' + Math.random().toString(36).substr(2, 9);
}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
