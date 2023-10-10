const mongoose = require("mongoose");

const conn = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connection established ${db.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = conn;
