const express = require("express");

let {
  registration,
  login,
  stateAPI,
  cityAPI,
} = require("../controllers/controllers.js");

let router = express.Router();

router.post("/reg", registration);
router.post("/login", login);
router.get("/stateAPI", stateAPI);
router.get("/cityAPI", cityAPI);

module.exports = router;
