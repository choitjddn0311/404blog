const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/signup' , async (req,res) => {
    const {id, name, pw} = req.body;

    try {
        const [row] = await db.query('select * from user where id = ?' , [id]);
        if(row.length > 0) {
            return res.status(400).json({success: false, message: '사용할 수 없는 아이디입니다.'});
        }

        await db.query('insert into user (id,name,pw) value(?,?,?)' , [id,name,pw]);
        res.json({success: true, message: '회원가입되었습니다!'});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: '서버오류'});
    }
});

router.post('/login' , async(req,res) => {
    const {id,pw} = req.body;

    try {
        const [rows] = await db.query('select * from user where id = ?' , [id]);
        if(rows.length === 0) {
            return res.status(401).json({success: false, message: '존재하지않는 아이디입니다.'});
        }

        if(rows[0].pw !== pw) {
            return res.status(401).json({success: false, message: '비밀번호가 틀렸습니다.'});
        }

        res.json({success: true, message: '로그인되었습니다'});
    } catch (err) {
        console.error(err);
        res.status(500).json({success: false, message: '서버오류'});
    }
});

router.post('/check-id', async (req, res) => {
  const { id } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM user WHERE id = ?', [id]);
    if (rows.length > 0) {
      return res.json({ available: false }); // 이미 존재
    }
    res.json({ available: true }); // 사용 가능
  } catch (err) {
    console.error(err);
    res.status(500).json({ available: false, message: '서버 오류' });
  }
});


module.exports = router;

