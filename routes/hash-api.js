var express = require('express'),
    bcrypt = require('bcrypt');
var router = express.Router();

/* GET hash api listing. */
router.get('/', function(req, res, next) {
  var secret = req.params.secret || req.query.secret;
  if(!secret) return next(new Error("No secret was specified"));
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('B4c0/\/', salt, function(err, hash) {
        if(err) return next(err);
        // Return the salt/hash
        res.status(200).json({salt:salt, hash:hash});
    });
  });
});

module.exports = router;
