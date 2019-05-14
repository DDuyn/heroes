import Api from '@/services/Api'

export default {
  getClasses () {
    return Api().get('classes')
  }
}
