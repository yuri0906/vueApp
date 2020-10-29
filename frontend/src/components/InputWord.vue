<template>
    <div class="inputword">
        <input type="text" placeholder="キーワードを入力" v-model="textInput"/>
        <input type="submit" value="検索" @click="sendParams"/>
    </div>
</template>

<script lang="ts">
import { Component,Vue,Emit, Prop } from "vue-property-decorator";
import Methods from '../server/methods';

@Component
export default class InputWord extends Vue  {
    @Prop()
    textInput!:string;

    sendParams(){
        this.$emit("my-click",this.textInput);
    }
}

</script>

<style scoped>
</style>