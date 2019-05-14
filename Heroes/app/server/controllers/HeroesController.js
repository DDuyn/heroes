var Heroe = require('../models/Hero')

module.exports = {
  async get (req, res) {
    Heroe.find({}, function (error, heroes) {
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
      Class: req.body.class,
      Level: 1,
      TotalExperience: 0,
      ExperienceNeeded: 100,
      IsDead: false
    })

    newHero.save(function (error) {
      if (error) console.log(error)
      res.send({
        success: true,
        message: 'Heroe saved successfully'
      })
    })
  },

  async addExperience (req, res) {
    var filter = { Name: req.body.hero.Name }
    var query = {
      $set: {
        TotalExperience: req.body.hero.TotalExperience,
        GainedExperience: req.body.hero.GainedExperience,
        ExperienceNeeded: req.body.hero.ExperienceNeeded,
        Level: req.body.hero.Level
      }
    }
    var options = {new: true}

    Heroe.findOneAndUpdate(filter, query, options, function (error, hero) {
      if (error) console.error(error)
      res.send({hero})
    })
  }
}
