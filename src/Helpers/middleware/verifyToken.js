const jwt = require("jsonwebtoken");

module.exports = {
  authentication: (req, res, next) => {
    const bearearToken = req.header("auth-token");

    if (!bearearToken)
    res.status(404).send({
      success: false,
      message: "NOT FOUND",
    });
    else {
      
      jwt.verify(bearearToken, process.env.SECRET_KEY, (err, decoded) => {
        if(err) {
          res.status(401).send({
            success: false,
            error: "ERROR FORBIDDEN"
          });
        } else {
          req.decoded = decoded;
          console.log(decoded)
          next();
        }
      })
  }
},

authorization: (req, res, next) => {
  const role = req.decoded.role;
    const id = req.decoded.id
    if(role === "admin") next();
    else if(id == req.params.id) next();
    else {
      res.status(403).send({
        success: false,
        message: 'error forbidden'
      });
    }
  }
}



