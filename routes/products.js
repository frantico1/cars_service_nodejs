const express = require("express");
const router = express.Router();
const productController = require("../contollers/productControllers")

router.get("/", productController.getProduct);

router.get("/:id", productController.getProductsDetails);

router.post("/", productController.addProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);


module.exports = router;