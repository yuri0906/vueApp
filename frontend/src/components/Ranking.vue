<template>
    <div class="ranking" >
        <ol>
            <li v-for="(item,index) in limitCount" :key="index">{{item.word}}</li>
        </ol>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";

@Component
export default class Ranking extends Vue  {
    @Prop()
    public wordRanking!:any;

    get limitCount(){
        return this.wordRanking.slice(0,10);
    }
    // <ol v-if="Object.keys(wordRanking).length>0">
}


</script>

<style scoped>
</style>