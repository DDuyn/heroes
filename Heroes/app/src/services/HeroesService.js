import Api from '@/services/Api'

export default {
  fetchHeroes () {
    return Api().get('heroes')
  },
  addHero (hero) {
    return Api().post('hero', hero)
  },
  updateHero (hero) {
    return Api().put('hero', hero)
  }
}
