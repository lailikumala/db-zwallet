const db = require('../Helpers/db')



const transferModel = {

    
    getAllTransfer: (params)=> {
        return new Promise((resolve, reject) => {
            db.query(`SELECT transfer.id_reciever, users.name, users.phone, transfer.amount, transfer.notes, transfer.createAt FROM users INNER JOIN transfer ON 
            users.id = transfer.id_sender WHERE users.id=? ORDER BY transfer.createAt DESC`, params.id, (err, res) => {
                if(!err) {
                    resolve(res)
                }
                reject(err)
            })
        })
    },

    getTransfer: (body, page, limit, params)=> {
        return new Promise((resolve, reject) => {
            if(!limit) limit = 4;
            else limit = parseInt(limit);

            if(!page) page = 1;
            else page = parseInt(page);
            db.query(`SELECT transfer.id_reciever, users.name, users.phone, users.balance, users.photo, transfer.reciever,
            transfer.amount, transfer.notes, transfer.createAt FROM users INNER JOIN transfer ON 
            users.id = transfer.id_sender WHERE users.id=? ORDER BY transfer.createAt DESC LIMIT ${limit} OFFSET ${(page-1) * limit} `, params.id, (err, res) => {
                if(!err) {
                    resolve(res)
                }
                reject(err)
            })
        })
    },

    createTransfer: (setData)=> {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO transfer SET?'
            db.query(query, setData, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },


    updateTransfer: (setData, id)=> {
        return new Promise((resolve, reject) => {
            const query = `UPDATE transfer SET ? WHERE id=?`
            db.query(query, [setData, id], (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },


    deleteTransfer: (params)=> {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM transfer WHERE id=?`
            db.query(query, params.id, function(err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            })
        })
    },

    
}


module.exports = transferModel

