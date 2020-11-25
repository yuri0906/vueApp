<template>
    <div class="input-word">
        <input class="keyword-input" v-model="input" type="text" placeholder="キーワードを入力">
        <button class="search-button" @click="setData"><img src="../assets/glass.png" width="20px" height="20px"></button> 
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

<style lang="sass" scoped>
.input-word
    .keyword-input
        width: 500px
        height: 2.5em
        font-size: 20px
        border: 1px green solid
    .search-button
        height: 2em
        font-size: 20px
        border-radius: 50%
        color: white
        background-color: green
        border-color: green
</style>