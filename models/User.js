const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  }
  
});

module.exports = mongoose.model("User", userSchema);  


