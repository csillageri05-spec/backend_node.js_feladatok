const express = require("express");
const router = express.Router();

const TermekController = require("../controllers/TermekControler");
router.get("/", TermekController.getAllTermek );
router.get("/:id", TermekController.getTermekById);
router.post("/", TermekController.createTermek);
router.put("/:id", TermekController.updateTermek);
router.delete("/:id", TermekController.deleteTermek);
module.exports = router;