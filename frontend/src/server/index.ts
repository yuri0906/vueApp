/*
API通信を行う為、axiosの設定をインスタンス化する
*/

import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:3000/`
  })
}