const transferModel = require("../Models/Transfer");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  
  getAllTransfer: (req, res) => {
    transferModel
      .getAllTransfer(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  getTransfer: (req, res) => {
   
    let {page, limit} = req.query
    transferModel
      .getTransfer(req.body, page, limit, req.params)
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
 

};
