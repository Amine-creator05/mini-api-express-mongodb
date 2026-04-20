const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  permissions: {
    clients: {
      create: Boolean,
      read: Boolean,
      update: Boolean,
      delete: Boolean
    },
    produits: {
      create: Boolean,
      read: Boolean,
      update: Boolean,
      delete: Boolean
    },
    commandes: {
      create: Boolean,
      read: Boolean,
      update: Boolean,
      delete: Boolean
    }
  }
});

module.exports = mongoose.model("Role", roleSchema);