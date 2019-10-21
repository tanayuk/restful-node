const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get('/', postController.index);

module.exports = router;