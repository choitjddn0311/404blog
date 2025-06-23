const express = require('express');
const router = express.Router();
const db = require('../config/db');

// 전체 게시물 가져오기
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM post ORDER BY created_at DESC');
        res.json(rows);
    } catch (err) {
        console.error("게시물 불러오기 실패했슈", err);
        res.status(500).json({ message: '서버 오류때문이랑께' });
    }
});

// 제목으로 게시물 하나 가져오기
router.get('/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM post WHERE title = ?', [title]);

        if (rows.length === 0) {
            return res.status(404).json({ message: '그런 제목의 게시물 없당께요~' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error("제목으로 게시물 불러오기 실패했슈", err);
        res.status(500).json({ message: '서버 에러요~ 다음에 다시 해보랑께' });
    }
});

module.exports = router;
