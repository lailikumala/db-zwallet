const db = require('../Helpers/db')



const transferModel = {
    getAllTransfer: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM transfer', (err, res) => {
                if(!err) {
                    resolve(res)
                }
                console.log(err)
            })
        })
    },
    getPagination: (body, page, limit)=> {
        return new Promise((resolve, reject) => {
            if(!limit) limit = 4;
            else limit = parseInt(limit);

            if(!page) page = 1;
            else page = parseInt(page);
            const query = `SELECT * FROM transfer LIMIT ${limit} OFFSET ${(page-1) * limit}`
            db.query(query, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },
    getReciever: (body, id_reciever) => {
        return new Promise((resolve, reject) => {
            const query = `SELECT id_reciever, reciever, notes, balanceLeft FROM transfer WHERE id_reciever LIKE '%${id_reciever}%'`
            db.query(query, body, (err, res)=> {
                if(!err) {
                    resolve(res)
                } else {
                    reject(err.message)
                }
            })
        })
    },

    

    //join
    getTransfer: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT id_reciever, notes, balanceLeft, name, phone FROM transfer INNER JOIN users ON transfer.id=users.id', (err, res) => {
                if(!err) {
                    resolve(res)
                }
                console.log(err)
            })
        })
    },

    getTransferId: (params) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM transfer WHERE id=?'
            db.query(query, params.id, (err, res) => {
            if (!err) {
                resolve(res[0]);
            }
            console.log(err);
            });
        });
    },

    getTransferHistory: (params) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM transfer WHERE id_reciever=?'
            db.query(query, params.id_reciever, (err, res) => {
            if (!err) {
                resolve(res[0]);
            }
            console.log(err);
            });
        });
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
            const query = `UPDATE transaction SET ? WHERE id=?`
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
            const query = `DELETE FROM transaction WHERE id=?`
            db.query(query, params.id, function(err, data) {
                if(err) {
                    reject(err);
                } else {
                    resolve(data)
                }
            })
        })
    },

    
    getHistoryUser: (params, order, offset)=> {
        const {id_reciever} =params;
        return new Promise((resolve, reject) => {
            db.query(`SELECT receiver, balanceLeft, notes, createAt FROM transfer WHERE  id_receiver=${id_reciever} ORDER BY ${order}(createAt))) DESC`, id_reciever,(err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    
}


module.exports = transferModel

