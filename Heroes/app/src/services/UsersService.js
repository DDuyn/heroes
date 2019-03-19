import Api from '@/services/Api'

export default {
  fetchHUsers () {
    return Api().get('users')
  }
}
