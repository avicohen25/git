const express = require("express");
const router = express.Router();


router.use((req, res, next) => {
  console.log('in the middleware');
  next();
});


module.exports = router;