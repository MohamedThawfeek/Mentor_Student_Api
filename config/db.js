const mongoose = require("mongoose");

const url =
  "mongodb+srv://thawfeek96:Abc123@cluster0.4svrg.mongodb.net/Student-Mentor?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
