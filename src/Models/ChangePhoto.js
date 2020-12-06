const db = require('../Helpers/db')
const photoModel = {
    
    photo: (params, body) => {
        const {id} = params;
        return new Promise((resolve, reject)=> {
            db.query(`SELECT photo FROM users WHERE id=${id}`, (err, res) => {
                if(!err) {
                // const data = Object.entries(body).map((item) => {
                //     return parseInt(item[1]) > 0
                //         ? `${item[0]}=${item[1]}`
                //         : `${item[0]}='${item[1]}'`;
                //     });
                    db.query(`UPDATE users SET photo= '${body.photo}' WHERE id=${id}`, (err, res)=> {
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

