<template>
  <div class="home">
    <Title/>
    <Search/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue"; 
import Title from "@/components/Title.vue";
//import InputWord from "@/components/InputWord.vue";
//import Ranking from "@/components/Ranking.vue";
//import Gragh from "@/components/Gragh.vue";

@Component({
  components: {
    Search,Title
  }
})
export default class Home extends Vue {}

</script>
