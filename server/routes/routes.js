const express = require("express");

let {registration, login} = require("./controllers/controllers.js");

let router = express.Router();


router.post("/reg", registration);
router.get("/login", login)

module.exports = router;