import Api from './index'

export default {
  testPosting () {
    const item = { text: '連携OK' }
    return Api().post('/', item)
  }
  //GET or POST処理追加
}