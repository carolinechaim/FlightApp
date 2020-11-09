var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Userlist page. */
router.get('/userlist', function(req, res) {
  var db = require("../db");
  var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
  Users.find({}).lean().exec(
     function (e, docs) {
        res.json(docs);
        res.end();
  });
});



router.post("/users/",function(req, res, next){

  var db = require('../db');
  var User = db.Mongoose.model("usercollection", db.UserSchema, "usercollection");
  var newuser = new User ({ username: req.body.username, password: req.body.password});
  newuser.save(function(err){
    if(err){
      res.status(500).json({error:err.message });
      res.end()
      return
    }
    res.json(newuser);
    res.end();
  });
});

router.get('/user/:username', function(req, res, next){
  var db = require("../db");
  var User = db.Mongoose.model("usercollection", db.UserSchema,"usercollection");
  User.find({username: req.params.username}).lean()
  .exec(function(e,docs){
    res.json(docs);
    res.end();
  });
});





module.exports = router;
