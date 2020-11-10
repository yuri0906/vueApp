<template>
    <div class="graph">
        <BarChart :labels="labels" :datas="datas" :chart-data="chartData"/>
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
    public ranking!:any;

    get labels(){
        const label = []
        for(let i=0;i<10;i++){
            label.push(this.ranking[i].word);
        }
        return label;
    }

    get datas(){
        const data = [];
        for(let i=0;i<10;i++){
            data.push(this.ranking[i].score);
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