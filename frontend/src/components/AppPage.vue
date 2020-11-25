<template>
    <div class="app-page">
        <h1>VueApp</h1>
        <InputWord @click="receiveData"/>
        <Loading :loading="loading"/>
        <div class="result" v-if="show">
            <WordRanking :ranking="ranking"/>
            <BarGraph :ranking="ranking"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Methods from '../server/methods';
import WordRanking from '@/components/WordRanking.vue';
import InputWord from '@/components/InputWord.vue';
import BarGraph from '@/components/BarGraph.vue';
import Loading from '@/components/Loading.vue'

@Component({
    components: {
        InputWord, WordRanking, BarGraph, Loading,
    }
})

export default class AppPage extends Vue  {
    private show = false;
    public loading = false;
    public ranking = [];

    private async receiveData(input:string){
        this.loading = true;
        if(!input){ //入力が空欄の場合
            alert("キーワードを入力してください");
        }else if(input.length > 64){ //文字数が長すぎる場合
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(input);
            this.ranking = response.data;
            if(Object.keys(this.ranking).length===0){ //検索結果が0だった場合
                alert("商品が見つかりませんでした");
            }else{
                this.loading = false;
                this.show = true;
            }
        }
    }
}
</script>

<style scoped>
</style>