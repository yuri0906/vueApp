<template>
    <div class="inputword">
        <input type="text" placeholder="キーワード検索" v-model="textInput"/>
        <input type="submit" value="検索" @click="sendParams"/>
    </div>
</template>

<script lang="ts">
import { Component,Vue } from "vue-property-decorator";
import Methods from '../server/methods';
@Component
export default class InputWord extends Vue  {

}

</script>

<style scoped>

</style>