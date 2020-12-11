const pool = require('./connection');

const orm = {
    selectAll: (tableName) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if(err) return reject(err);

                con.query('SELECT * FROM ??', [tableName], (err, results) => {
                    if(err) return reject(err);
                    return resolve(results);
                });
            });
        });
    },
    insertOne: (tableName, obj) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if(err) return reject(err);

                con.query('INSERT INTO ?? SET ?', [tableName, obj], (err, results) => {
                    if(err) return reject(err);
                    return resolve(results);
                });
            });
        });
    },
    updateOne: (tableName, id, fieldName, fieldValue) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, con) => {
                if(err) return reject(err);

                con.query('UPDATE ?? SET ?? = ? WHERE id = ?', [tableName, fieldName, fieldValue, id], (err, results) => {
                    if(err) return reject(err);
                    return resolve(results);
                });
            });
        });
    }
};

module.exports = orm;