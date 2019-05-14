var Class = require('../models/Class')

module.exports = {
  async get (req, res) {
    Class.find({}, function (error, classes) {
      if (error) console.error(error)
      res.send({
        classes: classes
      })
    }).sort({_id: -1})
  }
}
