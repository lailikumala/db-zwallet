const authModel = require("../Models/Auth");
const formResponse = require("../Helpers/FormResponse");

module.exports = {

  signup:  (req, res) => {
    req.body.photo = req.file ? req.file.filename : '';
    authModel
      .signup(req.body)
      .then((data) => formResponse(data, res, 201))
      .catch((err) => {
        res.send({
          success: false,
          message: 'failed registration'
        })
      });
  },


  login: (req, res) => {
    authModel
    .login(req.body)
    .then((data) => {
      res.status(200).send({
        success: true,
        message: 'login successfully',
        token: data
      });
    })
    .catch((err) => {
      res.send({
        success: false,
        message: err
      })
    });
  },

  createPin: (req, res) => {
    const { pin, email } = req.body;
    if(email) {
      authModel
      .createPin(pin, email)
      .then((data) => formResponse(data, res, 201))
        .catch((err) => res.send({
          status: 401,
          message: 'not found'
      }));
      } else {
        res.send({
          status: 401,
          message: 'not found'
          });
        }
  },

  forgot: (req, res) => {
    const { password, email } = req.body;
    if(email) {
      authModel
      .forgot(password, email)
      .then((data) => formResponse(data, res, 201))
        .catch((err) => res.send({
          status: 401,
          message: 'not found'
      }));
      } else {
        res.send({
          status: 401,
          message: 'not found'
          });
        }
   
  },
  
}