const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//TODO create all routers
router.get('/', (req,res)=>{
    burger.selectAll(function(data){
        res.render('index', {burgers:data});
    });
});

router.post('/api/burgers', function(req,res){
    // burger.insertOne("burger_name",req.body.burger_name)
    console.log(req.body);
    burger.insertOne("burger_name", req.body.burger_name, result=>{
        res.json({ id: result.insertId }) //what does this do???
    })
})

module.exports = router;

