const connection = require('./connection');

const orm = {
    selectAll: function(tableName, cb){
        const queryString = `SELECT * FROM ??;`;
        connection.query(queryString,tableName, function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    insertOne: function(tableName, col, val, cb){
        const queryString = `INSERT INTO ?? (??) VALUES (?);`;
        connection.query(queryString, [tableName, col, val], function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    updateOne: function(tableName, col, val, condition, cb){
        const queryString = `UPDATE ?? SET ?? = ? WHERE ?;`;
        connection.query(queryString, [tableName, col, val, condition], function(err,res){
            if(err) throw err;
            cb(res);
        });
    },
    deleteOne: function(tableName, condition, cb){
        const queryString = `DELETE FROM ?? WHERE ?;`;
        connection.query(queryString,[tableName, condition], function(err, res){
            if(err) throw err;
            cb(res);
        });
    }

};

module.exports = orm;