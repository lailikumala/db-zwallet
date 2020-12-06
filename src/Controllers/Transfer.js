const transferModel = require("../Models/Transfer");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllTransfer: (req, res) => {
    transferModel
      .getAllTransfer()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getPagination: (req, res) => {
    let {page, limit} = req.query
    transferModel
      .getPagination(req.body, page, limit)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getReciever: (req, res) => {
    const {id_reciever} = req.query
    transferModel
    .getReciever(req.body, id_reciever)
    .then((data) => formResponse(data, res, 200))
      .catch((err) => {
        res.send({
          success: false,
          message: 'failed serach reciever'
        })
      });
  },
  getTransfer: (req, res) => {
    transferModel
      .getTransfer()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getTransferId: (req, res) => {
    transferModel
      .getTransferId(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getTransferHistory: (req, res) => {
    transferModel
      .getTransferHistory(req.params.id_reciever)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createTransfer:  (req, res) => {
    transferModel
      .createTransfer(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => {
        res.send({
          success: false,
          message: 'failed registration'
        })
      });
  },

  updateTransfer:  (req, res) => {
    transferModel
      .updateTransfer(req.body, req.params.id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteTransfer:  (req, res) => {
    transferModel
      .deleteTransfer(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getHistoryUser: async function(req, res) {
    try {
        
        let { order } = req.query
        const result = await transferModel.getHistoryUser(req.params, order)
        response(res, 200, result)
    } catch (error) {
        res.status(500).send({
            message: error.message
        })
    }
},


};
