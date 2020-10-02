/*
server/index.tsで作成したインスタンスを利用して
サーバー側(backendディレクトリ)へのGET、POSTメソッドを作成する
*/

import Api from './index'

export default {
  sendParams (name:string) {
    const item = {text: name}
    return Api().post('/', item);
  }

  //必要に応じて随時GET or POST処理追加
  
}