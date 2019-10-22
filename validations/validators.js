const {body} = require('express-validator');

exports.hasName = body("name").isLength({min:5}).withMessage("Name is required. Min Length 5 characters");