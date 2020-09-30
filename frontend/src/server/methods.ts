import Api from './index'

export default {
  testPosting () {
    const item = { text: 'Success!' }
    return Api().post('/', item)
  }
  //GET or POST処理追加
}