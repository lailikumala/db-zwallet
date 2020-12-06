const phoneModel = require("../Models/ChangePhone");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  phone: (req, res) => {
       phoneModel
       .phone(req.params, req.body)
       .then((data) => formResponse(data, res, 201))
        .catch((err) => res.send({
          status: 401,
          message: 'not found'
      }));
     
    },
  
};
