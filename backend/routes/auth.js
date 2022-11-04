const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj = {
        a: 'fdf',
        number: 34
    }
    console.log('Hi')
    res.json(obj)
})

module.exports = router;