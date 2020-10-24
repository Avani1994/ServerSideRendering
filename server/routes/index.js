var express = require("express");
var router = express.Router();
var ComponentService = require("../services/ui");

router.get("/", ComponentService.getComponent);

module.exports = router;
