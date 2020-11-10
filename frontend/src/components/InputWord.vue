<template>
    <div class="inputWord">
        <input id="word" v-model="input" type="text" placeholder="キーワードを入力">
        <input type="submit" value="検索" @click="setData"/> 
    </div>
</template>

<script lang="ts">
import { Component,Vue,Emit, Prop } from "vue-property-decorator";

@Component
export default class InputWord extends Vue  {
    public input = "";

    @Emit()
    public click(input:string){
        console.log(input);
    }

    public setData(){
        this.click(this.input);
    }
}

</script>

<style scoped>
</style>