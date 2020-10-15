<template>
  <div class="search">
    <h1>楽天商品検索</h1>
      <p>検索したい商品を入力してください</p>
      <input type="text" v-model="textInput"/>
      <input type="submit" value="検索" @click="receiveData"/>
      <div id="ranking" v-if="show">
        <ol>
          <li v-for="n of 20" :key="n">{{wordRanking[n].word}}</li>
        </ol>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Methods from '../server/methods';

@Component
export default class Search extends Vue {
  public textInput = ""; //入力値
  public wordRanking = ""; //出力値
  public show = false; 
  
  /*
  サーバーへリクエスト送信、レスポンス（API処理結果）を受け取る
  */
  async receiveData(){
    const response = await Methods.sendParams(this.textInput);
    this.wordRanking = response.data;
    this.show = true;
  }
}
</script>

<style scoped>
#ranking{
  width: 80%;
  margin: 0 auto;
  max-width: 400px;
}
ol{
  counter-reset:counter;
  width:20em;
}
ol li{
  display:inline;
  margin:0 auto;
}
ol li:before{
  content: counter(counter) ". ";
  counter-increment: counter;
}
ol li:after{
  content:"\A";
  white-space:pre;
}
</style>