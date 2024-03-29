import { Line, Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  mixins: [Line, Bar, reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null
    },
    chartOptions: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.chartOptions)
  }
}
