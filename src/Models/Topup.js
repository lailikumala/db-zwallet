const db = require('../Helpers/db')


const topupModel = {
    getAllTopup: ()=> {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM topup'
            db.query(query, (err, res) => {
                if(!err) {
                    resolve(res)
                }
                console.log(err)
            })
        })
    },

    getTopup: (params) => {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM topup WHERE id=?'
            db.query(query, params.id, (err, res) => {
            if (!err) {
                resolve(res[0]);
            }
            console.log(err);
            });
        });
    },


    createTopup: (setData)=> {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO topup SET?'
            db.query(query, setData, (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },


    updateTopup: (setData, id)=> {
        return new Promise((resolve, reject) => {
            const query = `UPDATE topup SET ? WHERE id=?`
            db.query(query, [setData, id], (err, data) => {
                if(!err) {
                    resolve(data)
                } else {
                    reject(err)
                }
            });
        });
    },



    deleteTopup: (params)=> {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM topup WHERE id=?`
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


module.exports = topupModel

