<template>
    <div class="appPage">
        <h1>楽天商品検索＋YahooテキストAPIを使った簡易アプリ</h1>
        <InputWord @click="receiveData"/>
        <div v-if="show">
            <Ranking :ranking="ranking" :input="input"/>
            <Graph :ranking="ranking" :input="input"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";
import Methods from '../server/methods';
import Ranking from "@/components/Ranking.vue";
import InputWord from "@/components/InputWord.vue";
import Graph from "@/components/Graph.vue";

@Component({
    components: {
        InputWord,Ranking,Graph
    }
})

export default class AppPage extends Vue  {
    public input= "";
    public show = false;
    public ranking!:any;


    public async receiveData(input:string){
        this.input = input;
        if(!this.input){
            alert("キーワードを入力してください");
        }else if(this.input.length > 64){
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(this.input);
            this.ranking = response.data;
            if(Object.keys(this.ranking).length==0){
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