const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.prodcuts
  res.render('shop', {prods: products})
  // console.log('shop.js',adminData.products)
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
