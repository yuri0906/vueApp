<template>
    <div class="input-word">
        <input id="word" v-model="input" type="text" placeholder="キーワードを入力">
        <input type="submit" value="検索" @click="setData"> 
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component
export default class InputWord extends Vue  {
    public input = "";

    @Emit('click')
    public setData(){
        return this.input;
    }
}
</script>

<style scoped>
</style>