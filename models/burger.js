const orm = require('../config/orm');

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        })
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers",col,val, function(res){
            cb(res);
        })
    },
    updateOne: function(col, val, condition, cb){
        orm.updateOne("burgers", col, val, condition, function(res){
            cb(res);
        })
    },
    deleteOne: function(condition, cb){
        orm.deleteOne("burgers", condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;

