const express = require("express");
const {
  createLanguage,
  getLanguages,
  getLanguageById,
  updateLanguage,
  deleteLanguage,
} = require("../controllers/languageController");

const router = express.Router();

router.post("/", createLanguage);
router.get("/", getLanguages);
router.get("/:id", getLanguageById);
router.put("/:id", updateLanguage);
router.delete("/:id", deleteLanguage);

module.exports = router;
