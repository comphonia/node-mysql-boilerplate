var db = require('../../config/database');
var dbFunc = require('../../config/db-function');
const bcryptjs = require('bcryptjs');

var authenticModel = {
    authentic: authentic,
    signup: signup
}

function authentic(authenticData) {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM users WHERE username ='${authenticData.username}'`, (error, rows, fields) => {
            if (error) {
                reject(error);
            } else {
                bcryptjs.compare(authenticData.password, rows[0].password, function (err, isMatch) {
                    if (err) {
                        reject(error);
                    } else if (isMatch) {
                        resolve(rows);
                    }
                    else {
                        reject({"success":false,"message":"password does not match"});
                    }
                });

            }
        });
    });

}


function signup(user) {
    return new Promise((resolve, reject) => {
        bcryptjs.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcryptjs.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                db.query(`SELECT * FROM users WHERE username='${user.username}'`, (error, rows, fields) => {
                    if (error) {
                        dbFunc.connectionRelease;
                        reject(error);
                    } else if(rows.length>0) {
                        dbFunc.connectionRelease;
                        reject({"success":false,"message":"user already exist ! try with different user"});
                    } else {
                        db.query(`INSERT INTO users(email,username,password)VALUES('${user.email}','${user.username}','${user.password}')`, (error, rows, fields) => {
                            if (error) {
                                dbFunc.connectionRelease;
                                reject(error);
                            } else {
                                dbFunc.connectionRelease;
                                resolve(rows);
                            }
                        });
                    }
                });
            })

        });
    });
}

module.exports = authenticModel;



