<template>
    <div class="app-page">
        <h1>商品検索+テキスト解析のVueApp</h1>
        <InputWord @click="receiveData"/>
        <LoadingDisplay :loading="loading"/>
        <div class="result" v-if="show">
            <WordRanking :ranking="ranking"/>
            <BarGraph :ranking="ranking"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Methods from '../server/methods';

import InputWord from '@/components/InputWord.vue';
import LoadingDisplay from '@/components/LoadingDisplay.vue'
import WordRanking from '@/components/WordRanking.vue';
import BarGraph from '@/components/BarGraph.vue';

@Component({
    components: {
        InputWord, WordRanking, BarGraph, LoadingDisplay,
    }
})

export default class AppPage extends Vue  {
    private show = false;
    public loading = false;
    public ranking = [];

    private async receiveData(input:string){
        this.loading = true;
        this.show = false; //２回目以降前回の検索結果を隠す

        if(!input){ //入力が空欄の場合
            alert("キーワードを入力してください");
        }else if(input.length > 64){ //64文字以上の場合
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(input);
            this.ranking = response.data;
            if(Object.keys(this.ranking).length===0){ //検索結果が0だった場合
                alert("商品が見つかりませんでした");
            }else{
                this.show = true;
            }
        }
        this.loading = false;
    }
}
</script>

<style lang="sass" scoped>
.app-page
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
</style>