const  jwt =  require("jsonwebtoken");

const generatetoken = (data) =>
{
      return   jwt.sign(data ,  process.env.JWT_SECRETKEY)

}
module.exports = generatetoken;

