const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.get('/' , async (req,res) => {
    // 시간순으로 post 가져오기기
    try {
        const [rows] = await db.query('select * from post order by created_at desc');
        res.json(rows);
    // 에러처리리
    } catch(err) {
        console.error("게시물 불러오기 실패했슈" , err);
        res.status(500).json({message: '서버 오류때문이랑께'});
    }
})

module.exports = router;