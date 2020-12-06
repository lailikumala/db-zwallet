const db = require('../Helpers/db')
const phoneModel = {
    
    phone: (params, body) => {
        const {id} = params;
        return new Promise((resolve, reject)=> {
            db.query(`SELECT pin FROM users WHERE id=${id}`, (err, res) => {
                console.log(res.pin)
                if(!err) {
                    if(res.length) {
                        const data = Object.entries(body).map((item) => {
                            return parseInt(item[1]) > 0
                              ? `${item[0]}=${item[1]}`
                              : `${item[0]}='${item[1]}'`;
                          });
                          db.query(`UPDATE users SET ${data} WHERE id=${id}`, (err, res)=> {
                              if(!err) {
                                  resolve(res)
                              } else {
                                reject(err)
                              }
                          })
                    } else {
                        reject(err)
                    }
                } else {
                    reject(err)
                }
            })
        })
    }
      
    
}


module.exports = phoneModel

