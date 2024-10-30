const mongoose = require("mongoose");

const connectdb = async function () {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("conected to mongodb");
  } catch (err) {
    console.error("mongo db connection error", err);
    process.exit(1);
  }
};

module.exports = connectdb;
