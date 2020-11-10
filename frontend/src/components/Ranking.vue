<template>
    <div class="ranking">
        <ol>
            <li v-for="(item,index) in ranking10" :key="index">{{item.word}}</li>
        </ol>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue,Watch } from "vue-property-decorator";

@Component
export default class Ranking extends Vue  {
    @Prop()
    public ranking!:any;
        
    get ranking10(){
        return this.ranking.slice(0,10);
    } 
}


</script>

<style scoped>
</style>