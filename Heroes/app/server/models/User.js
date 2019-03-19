var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
  Name: String,
  Password: String,
  Email: String
})

var User = mongoose.model('Users', UserSchema)
module.exports = User
