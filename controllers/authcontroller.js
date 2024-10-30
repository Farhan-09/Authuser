const userModel = require("../models/user-model");
const GenerateToken = require("../utils/GenerateToken");
const bcrypt = require("bcrypt");

module.exports.registeruser = async function (req, res) {
  try {
    const { name, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user) {
      return res.status(400).send("Already have an account, Please login");
    }

    // Salt is a random string added to the password before hashing.

    let salt = await bcrypt.genSalt();
    let hash = await bcrypt.hash(password, salt);

    user = await userModel.create({
      name,
      email,
      password: hash, // Save the hashed password in the database
    });

    let token = GenerateToken({ email });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxage: 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds
    });

    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.loginuser = async function (req, res) {
  try {
    const { email, password } = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(500).send("incorect email or password");
    }

    let result = bcrypt.compare(password, user.password);

    if (result) {
      let token = GenerateToken({ email });

      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        maxage: 30 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds
      });

      res.status(201).send(user);
    } else {
      res.status(201).send("Email or Password is Incorrect");
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports.logoutuser = function (req, res) {
  res.cookie("token", "", {
    httpOnly: true,
    secure: true,
  });

  res.status(200).send({ message: "Logout successful" });
};

module.exports.getuserProfile = function (req, res) {

  res.send("logged in succesfull  you are at profile ")
};
