<template>
    <div class="gragh" >

    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";

@Component
export default class Gragh extends Vue  {
    @Prop()
    public wordRanking!:any;
}


</script>

<style scoped>
</style>