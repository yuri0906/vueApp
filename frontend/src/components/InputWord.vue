<template>
    <div class="inputWord">
        <input id="word" v-model="inputText" type="text" placeholder="キーワードを入力">
        <input type="submit" value="検索" @click="setData"/> 
    </div>
</template>

<script lang="ts">
import { Component,Vue,Emit, Prop } from "vue-property-decorator";

@Component
export default class InputWord extends Vue  {
    public inputText = "";

    @Emit()
    public click(input:string){
        console.log(input);
    }

    public setData(){
        this.click(this.inputText);
    }
}

</script>

<style scoped>
</style>