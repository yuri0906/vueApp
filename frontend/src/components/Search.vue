<template>
  <div class="search">
    <h1>楽天商品検索</h1>
      <p>検索したい商品を入力してください</p>
      <input type="text" v-model="textInput"/>
      <input type="submit" value="検索" @click="showResult"/>
      <p>{{ result }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Methods from '../server/methods';

@Component
export default class Search extends Vue {
  public textInput = ""; //入力値
  public result = ""; //出力値
  
  /*
  サーバーへリクエスト送信、レスポンス（API処理結果）を受け取る
  */
  async showResult(){
    const response = await Methods.sendParams(this.textInput);
    this.result = response.data;
    //ランキング表示
  }
}
</script>

<style scoped>

</style>