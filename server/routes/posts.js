const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

router.get('/',(req,res) => {
    res.send('we are on post');
});


router.post('/', (req,res) => {
    console.log(req.body); // 이것은 콜솔로 유저들이 무엇을 넣었는지 터미널에 보여주기 위한 코드
});


 
module.exports = router;

