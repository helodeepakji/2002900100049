const express = require('express');
const router = express.Router();

router.get('/api',(req,res)=>{
    res.json({"masage" : "hello"});
});

module.exports = router;