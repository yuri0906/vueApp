<template>
  <div class="home">
    <Title/>
    <InputWord @my-click="receivedata"/>
    <Ranking/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
//import Search from "@/components/Search.vue"; 
import Title from "@/components/Title.vue";
import InputWord from "@/components/InputWord.vue";
import Ranking from "@/components/Ranking.vue";
//import Gragh from "@/components/Gragh.vue";

@Component({
  components: {
    Title,InputWord,Ranking
  }
})
export default class Home extends Vue {
  public textInput!:string;

  receivedata(input:string){
    this.textInput = input;
  }



}

</script>
