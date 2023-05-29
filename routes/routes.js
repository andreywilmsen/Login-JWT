const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

router.post("/register", controller.register);

router.post("/login", controller.login);

router.put("/edit", controller.auth, controller.edit);

module.exports = router;
