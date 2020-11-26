<template>
    <div class="word-ranking">
        <p>分析結果</p>
        <div v-for="(item,index) in ranking10" :key="index" :class="isTop3(index)">
            {{index+1}}位：{{item.word}}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WordRanking extends Vue  {
    @Prop({ type: Array, default: []}) 
    public ranking!:{word:string, score:number}[];
        
    private get ranking10(){
        return this.ranking.slice(0,10);
    } 

    private isTop3(index:number){
        if(index===0){
            return "top-one";
        }else if(index===1){
            return "top-two";
        }else if(index===2){
            return "top-three";
        }   
        return "under-top-three"
    }

    //isTop3という真偽値で上位3位を大文字にしたい
}
</script>

<style lang="sass" scoped>
.word-ranking
    margin-top: 30px
    margin-bottom: 30px
    font-size: 20px
    p
        font-weight: 700
        font-size: 30px
        text-decoration: underline
    .top-one
        font-weight: 700
        font-size: 35px
    .top-two
        font-weight: 600
        font-size: 25px
    .top-three
        font-weight: 600
        font-size: 23px
</style>