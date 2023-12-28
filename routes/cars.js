const express = require("express");
const router = express.Router();
const carsController = require("../contollers/carsController")

router.get("/", carsController.getCars);

router.get("/:id", carsController.getCarsDetails);

router.post("/", carsController.addCars);

router.put("/:id", carsController.updateCars);

router.delete("/:id", carsController.deleteCars);


module.exports = router;