const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { hasName } = require('../validations/validators');

router.get("/", postController.index);
router.post("/", hasName, postController.store);

module.exports = router;