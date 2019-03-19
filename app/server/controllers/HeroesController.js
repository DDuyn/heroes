var Heroe = require('../models/Hero')

module.exports = {
  async get (req, res) {
    Heroe.find({}, 'Name', function (error, heroes) {
      if (error) console.error(error)
      res.send({
        heroes: heroes
      })
    }).sort({_id: -1})
  },

  async post (req, res) {
    var newHero = new Heroe({
      Name: req.body.name,
      Owner: req.body.owner,
      Class: 'Basic',
      Level: 1,
      TotalExperience: 0,
      ExperienceNeeded: 100,
      GainedExperience: 0,
      IsDead: false
    })

    newHero.save(function (error) {
      if (error) console.log(error)
      res.send({
        success: true,
        message: 'Heroe saved successfully'
      })
    })
  }
}
