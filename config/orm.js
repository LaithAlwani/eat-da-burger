const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb){
        const queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    insertOne: function(tableName, col, val, cb){
        const queryString = `INSERT INTO ${tableName} (${col}) 
        Values (${val});`;
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(tableName, val, condition, cb){
        const queryString = `UPDATE ${tableName} SET ${val} WHERE ${condition};`;
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;