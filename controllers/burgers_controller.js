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
});

router.put("/api/burgers/:id", (req,res)=>{
    const condition = `id=${req.params.id}`
    console.log(parseInt(req.body.devoured) );
    burger.updateOne("devoured",req.body.devoured,condition, result=>{
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
})

module.exports = router;

