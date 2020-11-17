/*
server/index.tsで作成したインスタンスを利用して
サーバー側(backendディレクトリ)へのGET、POSTメソッドを作成する
*/

import Api from './index'

export default {
  sendParams : (keyword:string) =>{
    const item = {text: keyword};
    return Api().post('/', item);
  }
}
