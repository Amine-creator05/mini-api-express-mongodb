const mongoose = require("mongoose");

const produitSchema = new mongoose.Schema({
  nom: String,
  categorie: String,
  prix: Number,
  quantite_stock: Number
});

module.exports = mongoose.model("Produit", produitSchema);