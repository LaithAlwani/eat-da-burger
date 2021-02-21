const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

//TODO create all routers
router.get('/', (req,res)=>{
    burger.selectAll(function(data){
        res.render('index', {burgers:data});
    });
});

module.exports = router;

