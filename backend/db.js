const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:270170";

// 'mongodb://localhost:270170/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected To Mongo Successfully");
  });
};

module.exports = connectToMongo;