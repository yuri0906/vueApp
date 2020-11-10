<template>
    <div class="ranking">
        <ol>
            <li v-for="(item,index) in limitCount" :key="index">{{item.word}}</li>
        </ol>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue,Watch } from "vue-property-decorator";

@Component
export default class Ranking extends Vue  {
    @Prop()
    public ranking!:any;

    @Prop()
    public input!:string;

    get limitCount(){
        return this.ranking.slice(0,10);
    } 
}


</script>

<style scoped>
</style>