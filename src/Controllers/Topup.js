const topupModel = require("../Models/Topup");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllTopup: (req, res) => {
    topupModel
      .getAllTopup()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getTopup: (req, res) => {
    topupModel
      .getTopup(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createTopup:  (req, res) => {
    topupModel
      .createTopup(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => console.log(err));
  },

  updateTopup:  (req, res) => {
    topupModel
      .updateTopup(req.body, req.params.id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  deleteTopup:  (req, res) => {
    topupModel
      .deleteTopup(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },


};
