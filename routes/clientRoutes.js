const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

router.post("/", clientController.createClient);
router.get("/", clientController.getClients);
router.get("/:id", clientController.getClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
const auth = require("../middleware/authMiddleware");

router.get("/", auth, clientController.getClients);
router.post("/", auth, clientController.createClient);
module.exports = router;