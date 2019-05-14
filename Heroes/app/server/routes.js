var HeroController = require('./controllers/HeroesController')
var ClassesController = require('./controllers/ClassesController')

module.exports = (app) => {
  app.get('/heroes', HeroController.get)
  app.post('/hero', HeroController.post)
  app.put('/hero', HeroController.addExperience)
  app.get('/classes', ClassesController.get)
}
