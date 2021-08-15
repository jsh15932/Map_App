const router = require("express").Router();
const Pin = require("../models/Pin");

router.post("/", (req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = newPin.save();
        res.status(200).json(savedPin);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router