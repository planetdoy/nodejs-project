const express = require('express');
const logger = require('morgan');
const app = express();
const users = [{id: 1, name:'Alice'},
                {id: 2,name:'Beck'},
                {id: 3,name:'Chris'}
] //todo

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/users', (req, res) => {

    req.query.limit = req.query.limit || 10; // 값이 존재하지 않으면 10으로 대체
    const limit = parseInt(req.query.limit, 10); // 10진수 문자열로 변환

    if(Number.isNaN(limit)){
        res.status(400).end();
    }else{    
        res.json(users.slice(0,limit));
    }

});

app.get('/users/:id',(req,res) => {

    // id 값을 얻어낸다.
    const id = req.body.id
    // user 배열 조회
    
    // 응답 : res.
});
module.exports = app