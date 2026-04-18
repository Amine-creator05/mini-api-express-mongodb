const express = require("express");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json());

app.use("/clients", require("./routes/clientRoutes"));
app.use("/produits", require("./routes/produitRoutes"));
app.use("/commandes", require("./routes/commandeRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use("/auth", require("./routes/authRoutes"));