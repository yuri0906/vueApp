<template>
    <div class="graph">
        <BarChart :chart-data="chartData" :chart-options="chartOptions"/>
    </div>
</template>

<script lang="ts">
import { Component,Prop,Vue, Watch } from "vue-property-decorator";
import BarChart from "@/components/BarChart.vue";
import Chart from "chart.js";

@Component({
    components: {
        BarChart
    },
})

export default class Graph extends Vue  {
    @Prop()
    public ranking!:any;

    public chartData : Chart.ChartData = {
        labels: this.labels,
        datasets: [
            {
                label: "score",
                type: "bar",
                data: this.datas,
                borderColor: "#AAFFAA"
            }
        ]
    };

    public chartOptions: Chart.ChartOptions = {}

    get labels(){
        const label = []
        for(let i=0;i<10;i++){
            label.push(this.ranking[i].word);
        }
        console.log("labelOK");
        return label;
    }

    get datas(){
        const data = [];
        for(let i=0;i<10;i++){
            data.push(this.ranking[i].score);
        }
        console.log("dataOK");
        return data;
    }

    @Watch('ranking')
    onChartDataChanged() {
        
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