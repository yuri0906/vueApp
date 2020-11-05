<template>
    <div class="appPage">
        <h1>楽天商品検索＋YahooテキストAPIを使った簡易アプリ</h1>
        <InputWord @click="receiveData"/>
        <div  v-if="show">
            <Ranking :wordRanking="wordRanking"/>
            <Gragh/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";
import Methods from '../server/methods';
import Ranking from "@/components/Ranking.vue";
import InputWord from "@/components/InputWord.vue";
import Gragh from "@/components/Gragh.vue";

@Component({
    components: {
        InputWord,Ranking,Gragh
    }
})

export default class AppPage extends Vue  {
    public inputText= "";
    public show = false;
    public wordRanking!:any;


    public async receiveData(input:string){
        this.inputText = input;
        if(!this.inputText){
            alert("キーワードを入力してください");
        }else if(this.inputText.length > 64){
            alert("検索文字数が多すぎます");
        }else{
            const response = await Methods.sendParams(this.inputText);
            this.wordRanking = response.data;
            this.show = true;
        }
    }
}


</script>

<style scoped>
</style>