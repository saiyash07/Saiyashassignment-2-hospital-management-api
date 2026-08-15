const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/saiyash_hospital_api";
mongoose.connect(mongoUri);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("database connected successfully!!!!");
});

db.on("disconnected", () => {
  console.log("database disconnected!!!!");
});

db.on("error", (error) => {
  console.log("database connection error!!!!", error);
});

module.exports = db;
