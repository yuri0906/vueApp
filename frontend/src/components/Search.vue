<template>
  <div class="search">
    <h1>楽天商品検索</h1>
      <p>検索したい商品を入力してください</p>
      <input type="text" v-model="textInput"/>
      <input type="submit" value="検索" @click="showResult"/>
      <ul id="example-1">
        <li v-for="i in wordRanking" :key="i.word">
          {{i.word}} {{i.score}}
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Methods from '../server/methods';

@Component
export default class Search extends Vue {
  public textInput = ""; //入力値
  public wordRanking = ""; //出力値
  
  /*
  サーバーへリクエスト送信、レスポンス（API処理結果）を受け取る
  */
  async showResult(){
    const response = await Methods.sendParams(this.textInput);
    this.wordRanking = response.data;
  }
}
</script>

<style scoped>

</style>