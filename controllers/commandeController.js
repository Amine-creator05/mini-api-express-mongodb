const Commande = require("../models/Commande");
const Produit = require("../models/Produit");

// CREATE
exports.createCommande = async (req, res) => {
  try {
    const { client, produits } = req.body;
    let total = 0;
    for (let item of produits) {
      const prod = await Produit.findById(item.produit);
      if (!prod) return res.status(404).json({ message: `Produit ${item.produit} not found` });
      total += prod.prix * item.quantite;
    }
    const commande = new Commande({ client, produits, montant_total: total });
    await commande.save();
    res.status(201).json(commande);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ ALL
exports.getCommandes = async (req, res) => {
  try {
    const commandes = await Commande.find().populate('client').populate('produits.produit');
    res.json(commandes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ ONE
exports.getCommande = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id).populate('client').populate('produits.produit');
    if (!commande) return res.status(404).json({ message: "Commande not found" });
    res.json(commande);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateCommande = async (req, res) => {
  try {
    const { client, produits } = req.body;
    let total = 0;
    if (produits) {
      for (let item of produits) {
        const prod = await Produit.findById(item.produit);
        if (!prod) return res.status(404).json({ message: `Produit ${item.produit} not found` });
        total += prod.prix * item.quantite;
      }
      req.body.montant_total = total;
    }
    const commande = await Commande.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('client').populate('produits.produit');
    if (!commande) return res.status(404).json({ message: "Commande not found" });
    res.json(commande);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteCommande = async (req, res) => {
  try {
    const commande = await Commande.findByIdAndDelete(req.params.id);
    if (!commande) return res.status(404).json({ message: "Commande not found" });
    res.json({ message: "Commande deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};