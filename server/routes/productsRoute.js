const router = require("express").Router();
// const Product = require("../model/productModel");
// const authMiddleware = require("../middleware/authMiddleware");
const Product = require("../models/productModel");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/add-product", authMiddleware, async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: "Product added successfully",
    });
  } catch (error) {
    res.send({  //send
      success: false,
      message: error.message,
    });
  }
});
router.get("/get-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send({
      success: true,
      products,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
module.exports=router;