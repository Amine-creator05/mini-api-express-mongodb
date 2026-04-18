const mongoose = require("mongoose");

const commandeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
  produits: [{
    produit: { type: mongoose.Schema.Types.ObjectId, ref: 'Produit' },
    quantite: Number
  }],
  montant_total: Number
});

module.exports = mongoose.model("Commande", commandeSchema);