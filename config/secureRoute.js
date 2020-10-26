const jwt = require('jsonwebtoken');

module.exports = function checkToken(req, res, next) {
    var token = req.headers['token'];
    if(token) {
      jwt.verify(token, 'my_secret_key',(err,decode)=>{
        if(err) {
          res.json({"status":401,
            "message":"INVALID TOKEN",
            "error":err.message
         });
       } else {
          next();
        }
      })
    } else {
      res.json({"status":401,
      "message":"NO TOKEN PROVIDED",
      "error":"token must be provided in the header to access endpoint"
   });
    }
  }


  