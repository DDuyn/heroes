var HeroController = require('./controllers/HeroesController')

module.exports = (app) => {
  app.get('/heroes', HeroController.get)
  app.post('/hero', HeroController.post)
}
