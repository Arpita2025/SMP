const router = require('express').Router();
const Bid = require('../models/bidModel');
const authMiddleware = require('../middleware/authMiddleware');

//place a new bid
router.post('/place-new-bid',authMiddleware,async(req,res) => {
  try{
    const newBid = new Bid(req.body);
    await newBid.save();
    res.send({ success: true, message: "Bid placed Successfully" });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
});



//get all bids
router.post("/get-all-bids", authMiddleware, async (req, res) => {
  try {
    const { product, seller } = req.body;
    // console.log("Product:", product);
    // console.log("Seller:", seller);

    let filters = {};
    if (product) {
      filters.product = product;
    }
    if (seller) {
      filters.seller = seller;
    }
    // console.log("Filters:", filters);

    const bids = await Bid.find(filters)
      .populate("product")
      .populate("buyer")
      .populate("seller");
    // console.log("Bids:", bids);

    res.send({ success: true, data: bids });
  } catch (error) {
    // console.log("Error:", error.message);
    res.send({ success: false, message: error.message });
  }
});

module.exports = router;