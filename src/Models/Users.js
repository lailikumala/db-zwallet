const db = require('../Helpers/db')
const bcrypt = require('bcrypt')

const userModel = {
    getUserName: (body, name) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT name, phone, photo FROM users WHERE name LIKE '%${name}%' ORDER BY name ASC`
            db.query(query, body, (err, res)=> {
                if(!err) {
                    resolve(res[0])
                } else {
                    reject(err)
                }
            })
        })
    },

    getAllUsers: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users', (err, res) => {
                if(!err) {
                    resolve(res)
                }
                reject(err)
            })
        })
    },

    getUserPagination: (body, page, limit)=> {
        return new Promise((resolve, reject) => {
            if(!limit) limit = 4;
            else limit = parseInt(limit);

            if(!page) page = 1;
            else page = parseInt(page);
            const query = `SELECT * FROM users LIMIT ${limit} OFFSET ${(page-1) * limit}`
            db.query(query, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },

    getUserSearch: (body, name, page, limit) => {
        return new Promise((resolve, reject) => {
            if(!limit) limit = 4;
            else limit = parseInt(limit);

            if(!page) page = 1;
            else page = parseInt(page);
            const query = `SELECT id, name, phone, photo FROM users WHERE name LIKE '${name}%' ORDER BY name ASC LIMIT ${limit} OFFSET ${(page-1) * limit}`
            db.query(query, body, (err, res)=> {
                if(!err) {
                    resolve(res)
                } else {
                    reject(err.message)
                }
            })
        })
    },

    getUser: (params) => {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM users WHERE id=?", params.id, (err, res) => {
            if (!err) {
                resolve(res[0]);
            }
            console.log(err);
            });
        });
    },


    createUser: (body)=> {
        return new Promise((resolve, reject) => {
            //to hash a pssword
            bcrypt.genSalt(10, function(err, salt) {
                const {password} = body
                bcrypt.hash(password, salt, function(err, hashedPassword) {
                const newBody = {...body, password: hashedPassword}
                    if(err) {
                        reject(err)
                    } else {
                    const query = 'INSERT INTO users SET?'
                    db.query(query, newBody, (err, data) => {
                        if(!err) {
                            resolve(newBody)
                        } else {
                            reject(err)
                        }
                    });
                    }
                });
            });
        });
    },

    deleteUser: (setData)=> {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM users WHERE id=?`, setData, function(err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            })
        })
    },

    updateUser: (params, body) => {
        const { id, email } = params;
        return new Promise((resolve, reject) => {
            console.log(body.password.length)
          if (body.password.length > 0 || body.pin.length > 0) {
            bcrypt.genSalt(10, function (err, salt) {
              const { password } = body;
              bcrypt.hash(password, salt, function (err, hashedPassword) {
                const newBody = { ...body, password: hashedPassword };
                if (err) {
                  reject(err);
                }
                let query = `UPDATE users SET ? WHERE id=?`;
                db.query(query, [newBody, id, email], (err, res) => {
                  if (!err) {
                    resolve(newBody);
                  } else {
                    reject("Failed");
                  }
                });
              });
            });
          } else {
            let query = `UPDATE users SET ? WHERE id=?`;
            db.query(query, [body, id, email], (err, res) => {
              if (!err) {
                resolve(body);
              } else {
                reject("Failed to Update User");
              }
            });
          }
        });
      },

      
    
}


module.exports = userModel

