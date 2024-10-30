const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");

module.exports.protect = async  (req , res , next )  => {
  try {
    if (req.cookies.token) {
      const data = jwt.verify(req.cookies.token, process.env.JWT_SECRETKEY);

      req.user = await userModel
        .findOne({ email: data.email })
        .select("-password");
      next();
    }
  } catch (err) {

    res.status(401).send(err.message);
  }

  if (!req.cookies.token) {
    res.status(401).send("Not Authorised , not have permission to access" );
  }
};

