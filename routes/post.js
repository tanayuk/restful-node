const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/multer");
const postController = require("../controllers/postController");
const { hasDescription } = require('../validations/validators');

router.get("/", postController.index);
router.get("/:id", postController.show);
router.post("/", uploadImage('posts').single("image"), hasDescription, postController.store);
router.patch("/:id", hasDescription, postController.update);
router.delete("/:id", postController.delete);

module.exports = router;