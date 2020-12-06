const photoModel = require("../Models/ChangePhoto");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  photo: (req, res) => {
    const setData = req.body
    if(req.file) {
      setData.photo = req.file.filename
      photoModel
      .photo(req.params, { photo: req.file.filename})
      .then((data) => formResponse(data, res, 201))
       .catch((err) => res.send({
         status: 401,
         message: err
     }));
    }
      
  },
    
};
