<template>
    <div class="ranking" >
        <ol v-if="Object.keys(wordRanking).length>0">
            <li v-for="n of 5" :key="n">{{wordRanking[n].word}}</li>
        </ol>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";

@Component
export default class Ranking extends Vue  {
    @Prop()
    public wordRanking!:any;
}


</script>

<style scoped>
</style>