const express = require("epress");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("<h1>Hellp from Express!</h1>");
});

module.exports = router;
