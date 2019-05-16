const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("MongoDB Conected...");
  } catch (err) {
    console.error(err.message);
    //Exist Process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
