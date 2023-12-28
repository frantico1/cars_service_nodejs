const express = require("express");
const router = express.Router();
const userController = require("../contollers/usersController")

router.get("/", userController.getUser);

router.get("/:id", userController.getUserDetails);

router.post("/", userController.addUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);


module.exports = router;