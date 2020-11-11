<template>
    <div class="app-page">
        <h1>楽天商品検索＋YahooテキストAPIを使った簡易アプリ</h1>
        <InputWord @click="receiveData"/>
        <div v-if="show">
            <WordRanking :ranking="ranking"/>
            <BarGraph :ranking="ranking"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Methods from '../server/methods';
import WordRanking from "@/components/WordRanking.vue";
import InputWord from "@/components/InputWord.vue";
import BarGraph from "@/components/BarGraph.vue";

@Component({
    components: {
        InputWord,WordRanking,BarGraph
    }
})

export default class AppPage extends Vue  {
    private input= "";
    private show = false;
    public ranking = [];

    public async receiveData(input:string){
        //this.input = input;
        if(!input){
            alert("キーワードを入力してください");
        }else if(input.length > 64){
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(input);
            this.ranking = response.data;
            if(Object.keys(this.ranking).length===0){
                alert("商品が見つかりませんでした");
            }else{
                this.show = true;
            }
        }
    }
}
</script>

<style scoped>
</style>