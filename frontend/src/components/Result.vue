<template>
  <div class="result">
    {{ result }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Result extends Vue {
  public result = "";

  public async showResult(){
    const url = "XXXXXXXX"
    
    await axios.get(url)
      .then((response) => {
        this.result = response.data.Items[0].Item["itemName"];
      })
      .catch((e) => {
        this.result = e;
      });
  }
}
</script>

<style scoped>
</style>