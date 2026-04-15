const express = require("express");
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get("/", (req, res) => {
  res.send('<h1> hello from express!!!! </h1>');
});

router.get("/static-file", (req, res) => {
  //res.sendFile(path.join(__dirname, '../', 'views', 'staticFile.html'));
  //res.sendFile(path.join(__dirname, '..', 'views', 'staticFile.html'));
  res.sendFile(path.join(rootDir, 'views', 'staticFile.html')); //best way
});


module.exports = router;
