const express = require('express');
const router = express.Router();
const db = require('../config/db')

router.post('/' , async(req,res) => {
    // id, 제목, 내용, 보일 글
    const {id, title, content, post_text} = req.body;
    
    // 유효성체크
    if(!id || !title || !content || !post_text) {
        return res.status(400).send("모든 항목의 값을 입력해주세요");
    }

    // 글 개시 insert
    const sql = `
        insert into post (id, title, content, post_text) values (?,?,?,?)
    `;

    try {
        await db.query(sql, [id, title, content, post_text]);
        res.status(200).send("업로드 성공");
    } catch(err) {
        console.error(err);
        res.status(500).send("서버오류")
    }
})

module.exports = router;