var express = require('express');
var app = express();
var router = express.Router();

router.route('/foo').get(function (req, res) {
    res.json({
        "response": "Hello"
      });
  });

  router.route('/bar').get(function (req, res) {
    res.json({
        "response": "World"
      });
  });

  module.exports = router;