<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Bar, mixins } from "vue-chartjs";
import Chart from "chart.js";

@Component
export default class BarChart extends Mixins(Bar, mixins.reactiveProp){
    @Prop()
    public labels!:any;

    @Prop()
    public datas!:any;

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

    public chartOptions:Chart.ChartOptions = {};

    public mounted() {
        const chartData : Chart.ChartData = {
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

        const chartOptions:Chart.ChartOptions = {};

        this.renderChart(chartData,chartOptions);
    }
}
</script>

