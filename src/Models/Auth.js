const db = require('../Helpers/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authModel = {
    signup: (body)=> {
        return new Promise((resolve, reject) => {
            //to hash a pssword
            bcrypt.genSalt(10, function (err, salt) {
                const { password } = body
                bcrypt.hash(password, salt, function (err, hashedPassword) {
                const newBody = {...body, password: hashedPassword }
                    if(err) {
                        reject(err)
                    }
                    const query = 'INSERT INTO users SET ?'
                    db.query(query, newBody, (err, data) => {
                        if(!err) {
                            resolve(newBody)
                        } else {
                            reject(err)
                        }
                    });
                });
            });
        });
    },

    login: (body)=> {
        return new Promise((resolve, reject) => {
            const { email, password } = body;
            const query = "SELECT * FROM users WHERE email=?"
            db.query(query, email, (err, data) => {
                let dataUser = data[0]
                if(!data.length) {
                    reject('email is wrong')
                } else {
                    if(!err) { 
                        const token = jwt.sign({
                            
                            id: dataUser.id,
                            role: dataUser.role,
                            name: dataUser.name,
                            pin: dataUser.pin,
                            email: dataUser.email
                        
                        }, process.env.SECRET_KEY)
                        bcrypt.compare(password, dataUser.password, function(err, result) {
                            if(err) {
                                reject('password is wrong')
                            } else {
                                if(!result) {
                                    reject('password is wrong')
                                } else {
                                    const sql = 'SELECT * FROM users WHERE password=?'
                                    db.query(sql, dataUser.password, (err, data) => {
                                        if (!err) {
                                            resolve({id: dataUser.id, name: dataUser.name,  role: dataUser.role, token});
                                          } else {
                                            reject();
                                          }
                                    });
                                }
                            }
                        });
                    } else {
                        reject(err);
                    }
                }
            });
        });
    },

    createPin: (pin, email) => {
        return new Promise((resolve, reject) => {
          db.query(`UPDATE users SET pin='${pin}' WHERE email=?`, email, (err, result) => {
              if (!err) {
                resolve(result);
              } else {
                return reject(err);
              }
            }
          );
        });
      },


    forgot: (password, email) => {
        return new Promise((resolve, reject)=> {
            bcrypt.hash(password, 10, (err, hashedPassword)=> {
                if(err) {
                    const errMessage = "failed"
                    return reject(errMessage)
                }
                db.query(`UPDATE users SET password='${hashedPassword}' WHERE email=?`, email, (err, result)=> {
                    if(!err) {
                        resolve(result)
                    } else {
                        return reject(err)
                    }
                })
            })
        })
    }
}


module.exports = authModel;

