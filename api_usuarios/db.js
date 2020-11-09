var mongoose = require ("mongoose");
mongoose.connect('mongodb://localhost:27017/api_usuarios');


var userSchema = new mongoose.Schema({
    username: String,
    password: String
     }, { collection: 'usercollection' }
     );
    
 module.exports = { Mongoose: mongoose, UserSchema: userSchema }