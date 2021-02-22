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
        const queryString = `INSERT INTO ${tableName} (${col}) VALUES ("${val}");`;
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(tableName, col, val, condition, cb){
        const queryString = `UPDATE ${tableName} SET ${col} = ${val} WHERE ${condition};`;
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res);
        });
    },
    deleteOne: function(tableName, condition, cb){
        const queryString = `DELETE FROM ${tableName} WHERE ${condition};`;
        connection.query(queryString, function(err, res){
            if(err) throw err;
            cb(res);
        });
    }

};

module.exports = orm;