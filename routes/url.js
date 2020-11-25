const express = require("express");
const router = express.Router();
const urlController = require('../controllers/urlController');

/****  routes *****/
router.route('/')
  .get(urlController.getIndex) // HOME ROUTE
  .post(urlController.createShortUrl); // shortener Route

router.get('/:shortUrl', urlController.redirectLongUrl); // REDIRECT ROUTE

module.exports = router;
