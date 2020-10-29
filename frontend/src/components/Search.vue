<template>
  <div class="search">
      <input type="text" v-model="textInput"/>
      <input type="submit" value="検索" @click="receiveData"/>
      
      <div id="ranking" v-if="show">
        <p>{{textOutput}}</p>
        <ol v-if="Object.keys(wordRanking).length>0">
          <li v-for="n of 5" :key="n">{{wordRanking[n].word}}</li>
        </ol>
      </div>
  </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import Methods from '../server/methods';

@Component
export default class Search extends Vue {
  public textInput!:string; //入力値
  public textOutput!:string; //出力メッセージ
  public wordRanking!:any; //出力値（ランキング）
  public show = false; 
  
  /*
  サーバーへリクエスト送信、レスポンス（API処理結果）を受け取る
  */
  async receiveData(){
    if(!this.textInput){
      alert("キーワードを入力してください");
    }else if(this.textInput.length > 64){
      alert("検索文字数が多すぎます");
    }else{
        const response = await Methods.sendParams(this.textInput);
        this.wordRanking = response.data;
        if(Object.keys(this.wordRanking).length===0){
          this.textOutput = "キーワードにヒットする商品が見つかりませんでした";
        }else{
          this.textOutput = "重要語句ランキング";
        }
        this.show = true;
    }
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