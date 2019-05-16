const express = require("express");
const router = express.Router();

//@route  GET api/posts/test
//@desc   Test posts route
//@access Public
router.get("/", (req, res) => res.json({ msg: "posts Works" }));

module.exports = router;
