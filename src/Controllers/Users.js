const userModel = require("../Models/Users");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  getUserName: (req, res) => {
    const {name} = req.query
    userModel
    .getUserName(req.body, name)
    .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getAllUsers: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  
  getUserPagination: (req, res) => {
    let {page, limit} = req.query
    userModel
      .getUserPagination(req.body, page, limit)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  getUserSearch: (req, res) => {
    const {name, page, limit} = req.query
    userModel
    .getUserSearch(req.body, name, page, limit)
    .then((data) => formResponse(data, res, 200))
      .catch((err) => {
        res.send({
          success: false,
          message: 'failed serach name and short'
        })
      });
  },

  getUser: (req, res) => {
    userModel
      .getUser(req.params)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createUser:  (req, res) => {
    req.body.photo = req.file ? req.file.filename : '';
    console.log(req)
    userModel
      .createUser(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => console.log(err));
  },

  deleteUser:  (req, res) => {
    userModel
      .deleteUser(req.params.id)
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },
  updateUser: (req, res) => {
    
    userModel
      .updateUser(req.params, req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => res.send({
        status: 401,
        message: err
    }));
  },

  
};
