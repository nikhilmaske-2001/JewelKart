const Product = require("../models/Product");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Cart = require("../models/Cart");


const router = require("express").Router();

// Create Cart
router.post("/", verifyToken, async(req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedProduct = await newCart.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update Cart
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedCart);
    } catch (error) {
        res.status(500).json(error);
    }
})

// Delete Cart
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) =>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted");
    } catch (error) {
        res.status(500).json(err);
    }
});

// Get user Cart
router.get("/find/:userid", verifyTokenAndAuthorization, async(req, res) => {
    try {
       const cart = await Cart.findOne({userId: req.params.id});

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Get all
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router;