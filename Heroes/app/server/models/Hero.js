var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HeroSchema = new Schema({
  Name: String,
  Owner: String,
  Class: String,
  Level: Number,
  TotalExperience: Number,
  ExperienceNeeded: Number,
  IsDead: Boolean
})

var Hero = mongoose.model('Heroes', HeroSchema)
module.exports = Hero
