const express = require("express");

const UserConstroller= require("../controllers/user");

const router = express.Router();

router.post("/signup", UserConstroller.createUser);

router.post("/login", UserConstroller.userLogin);

module.exports = router;
