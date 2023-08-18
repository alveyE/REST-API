const jwt = require("jsonwebtoken");

module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      token = token.slice(7);
      jwt.verify(token, process.env.LOGIN_KEY, (err, decoded) => {
        if (err) {
          res.json({
            success: 0,
            message: "Invalid token",
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({
        success: 0,
        message: "Unauthorized User",
      });
    }
  },
};
