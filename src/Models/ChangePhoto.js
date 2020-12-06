const db = require('../Helpers/db')
const photoModel = {
    
    photo: (params, body) => {
        const {id} = params;
        const {photo} = body
        return new Promise((resolve, reject)=> {
            db.query(`SELECT photo FROM users WHERE id=${id}`, (err, res) => {
                if(!err) {
                    db.query(`UPDATE users SET photo = '${photo}' WHERE id=${id}`, (err, res)=> {
                        if(!err) {
                            resolve(res)
                        } else {
                            reject(err)
                        }
                    })
                } else {
                    reject(err)
                }
            })
        })
    },


      
    
}


module.exports = photoModel

