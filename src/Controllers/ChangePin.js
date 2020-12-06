const pinModel = require("../Models/ChangePin");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  pin: (req, res) => {
       pinModel
       .pin(req.params, req.body)
       .then((data) => formResponse(data, res, 201))
        .catch((err) => res.send({
          status: 401,
          message: 'not found'
      }));
     
    },
  
};
