const express = require('express');
const router = express.Router();
// Import burger model
const burger = require('../models/burger');

//creat all routes and add logic
//gets all burgers from database
router.get('/', (req,res)=>{
    burger.selectAll(function(data){
        res.render('index', {burgers:data});
    });
});

//adding a burger to database
router.post('/api/burgers', function(req,res){
    burger.insertOne("burger_name", req.body.burger_name, result=>{
        res.json({ id: result.insertId })
    })
});

//updates a burger devoured status 
router.put("/api/burgers/:id", (req,res)=>{
    const condition = {id: req.params.id};
    burger.updateOne("devoured",req.body.devoured,condition, result=>{
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

//delets a burger from the data base
router.delete('/api/delete/:id',(req,res)=>{
    const condition = {id: req.params.id};
    burger.deleteOne(condition, result=>{
        if(result.affectedRows == 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    });
});

module.exports = router;

