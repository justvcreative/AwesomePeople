// HTTP(S) routing/controllers

const router = require('express').Router();
module.exports = router;

router.get('/', (req,res) => {
  res.render('index');
});