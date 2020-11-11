<template>
    <div class="word-ranking">
        <div v-for="(item,index) in ranking10" :key="index">{{index+1}}位：{{item.word}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WordRanking extends Vue  {
    @Prop()
    public ranking!:{word:string, score:number}[];
        
    get ranking10(){
        return this.ranking.slice(0,10);
    } 
}


</script>

<style scoped>
</style>