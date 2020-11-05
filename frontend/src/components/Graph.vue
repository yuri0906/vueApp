<template>
    <div class="graph">
        <BarChart :labels="labels" :datas="datas" />
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue } from "vue-property-decorator";
import BarChart from "@/components/BarChart.vue";
import Ranking from "./Ranking.vue";

@Component({
    components: {
        BarChart
    },
})

export default class Graph extends Vue  {
    @Prop()
    public wordRanking!:any;

    get labels(){
        const label = []
        for(let i=0;i<10;i++){
            label.push(this.wordRanking[i].word);
        }
        return label;
    }

    get datas(){
        const data = [];
        for(let i=0;i<10;i++){
            data.push(this.wordRanking[i].score);
        }
        return data;
    }
}
</script>

<style scoped>
.graph {
    width: 600px;
    margin-left: auto;
    margin-right: auto;
}

</style>