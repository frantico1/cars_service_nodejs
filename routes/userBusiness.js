const express = require("express");
const router = express.Router();
const userBusiness = require("../contollers/userBusiness")

router.get("/", userBusiness.getUser);

router.get("/:id", userBusiness.getUserDetails);

router.post("/", userBusiness.addUser);

router.put("/:id", userBusiness.updateUser);

router.delete("/:id", userBusiness.deleteUser);


module.exports = router;