<template>
  <div class="home">
    <Search/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Search from "@/components/Search.vue"; 
import Result from "@/components/Result.vue"; 

/*
* Result未実装
*/
@Component({
  components: {
    Search,Result
  }
})
export default class Home extends Vue {}
</script>
