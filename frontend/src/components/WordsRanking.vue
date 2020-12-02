<template>
    <div class="words-ranking">
        <p>分析結果</p>
        <div v-for="(item,index) in top10" :key="index" :class="isTop3(ranking(index))">
            {{ranking(index)}}位:{{item.word}}
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WordsRanking extends Vue  {
    @Prop({ type: Array, default: ()=>[]}) 
    public wordsRankingData!:{word:string, score:number}[];

    private get top10(){
        return this.wordsRankingData.slice(0,10);
    } 

    //同率が存在した場合のケア（ただし連続２つまでしか対応できない）
    private ranking(index:number){
        if(index>0 && this.top10[index].score === this.top10[index-1].score){
            return index;
        }
        return index+1;
    }

    private isTop3(ranking:number){
        if(ranking===1){
            return "words-ranking__item--first";
        }else if(ranking===2){
            return "words-ranking__item--second";
        }else if(ranking===3){
            return "words-ranking__item--third";
        }   
    }
}
</script>

<style lang="sass" scoped>
.words-ranking
    margin-top: 30px
    margin-bottom: 30px
    font-size: 20px
    p
        font-weight: 700
        font-size: 30px
        text-decoration: underline
    .words-ranking__item--first
        font-weight: 700
        font-size: 35px
    .words-ranking__item--second
        font-weight: 600
        font-size: 25px
    .words-ranking__item--third
        font-weight: 600
        font-size: 23px
</style>