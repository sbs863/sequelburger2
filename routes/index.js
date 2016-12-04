var express = require('express');
var Model = require('../models');
var router = express.Router();

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  Model.burgers.findAll({}).then(function (burgers) {
    res.render('index', {
      burgers: burgers
    });
  });
});

router.post('/burgers/create', function (req, res) {
  Model.burgers.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function (burgers) {
    res.redirect('/burgers');
  });
});

router.put('/burgers/update/:id', function (req, res) {
  Model.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function (result) {
      res.redirect('/burgers');
    });
  
});


module.exports = router;