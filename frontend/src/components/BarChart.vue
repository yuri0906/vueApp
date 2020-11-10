<script lang="ts">
import { Component, Prop, Mixins } from "vue-property-decorator";
import { Bar, mixins } from "vue-chartjs";
import Chart from "chart.js";

@Component
export default class BarChart extends Mixins(Bar, mixins.reactiveProp){
    @Prop() 
    public chartData!:Chart.ChartData;

    @Prop() 
    public chartOptions!:Chart.ChartOptions;

    public mounted() {
        this.renderChart(this.chartData,this.chartOptions);
    }
}
</script>

