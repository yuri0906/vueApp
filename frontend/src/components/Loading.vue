<template>
<div class="loading" v-if="loading">
    <vue-loading type="spin" color="#333" :size="{ width: '50px', height: '50px'}"></vue-loading>
</div>
</template>

<script lang="ts">
import { VueLoading } from 'vue-loading-template';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
    components: {
        VueLoading
    },
})

export default class Loading extends Vue  {
    @Prop({ type: Boolean, default: false})
    public loading!:boolean;

}
</script>