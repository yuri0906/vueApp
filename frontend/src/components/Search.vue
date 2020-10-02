<template>
  <div class="search">
    <h1>楽天商品検索</h1>
      <p>検索したい商品を入力してください</p>
      <input type="text" v-model="textInput">
      <input type="submit" value="検索" @click="showResult">
      <p>{{ textInput }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import Methods from '../server/methods'
import axios from "axios";

@Component
export default class Search extends Vue {
  public textInput = "";
  
  /*
  サーバーからAPI処理結果を受け取る
  */
  async showResult(){
   const response = await Methods.testPosting();
   this.textInput = response.data;
  }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>