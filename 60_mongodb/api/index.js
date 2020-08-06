const { Router } = require("express");
const router = Router();

router.use("/music", require("./music")); // ./music/index.js
router.use("/movie", require("./movie")); // ./movie/index.js
router.use("/user", require("./user")); // ./user/index.js

module.exports = router;
