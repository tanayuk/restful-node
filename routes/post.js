const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/multer");
const postController = require("../controllers/postController");
const { hasDescription } = require('../validations/validators');

router.get("/", postController.index);
router.post("/", uploadImage('posts').single("image"), hasDescription, postController.store);

module.exports = router;