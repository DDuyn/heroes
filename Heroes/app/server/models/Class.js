var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ClassSchema = new Schema({
  Name: String,
  Description: String
})

var Class = mongoose.model('Classes', ClassSchema)
module.exports = Class
