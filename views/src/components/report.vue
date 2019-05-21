<template>
  <div>
    <p class="report" v-html="reportText"></p>
    <router-link to="/" class="btn">homepage</router-link>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      reportData: null // {latestSevenDaysCount, previousSevenDaysCount, latestThirtyDaysCount, previousThirtyDaysCount}
    }
  },
  computed: {
    reportText: function () {
      var report = this.reportData
      if (!report) return 'loading...'

      var compareText = function (diff) {
        if (diff > 0) return `より ${Math.abs(diff)} 回多くなっています`
        else if (diff < 0) return `より ${Math.abs(diff)} 回少なくなっています`
        else return `と回数変わらないです`
      }

      return `<h2>あなたの運動レポート</h2>
              最近の 7 日間で ${report.latestSevenDaysCount} 回運動しました！<br>
              先週${compareText(report.latestSevenDaysCount - report.previousSevenDaysCount)}。<br>
              最近の 30 日間で ${report.latestThirtyDaysCount} 回運動しました！<br>
              先月${compareText(report.latestThirtyDaysCount - report.previousThirtyDaysCount)}。<br>`
    }
  },
  methods: {
    getReportData: function () {
      this.$axios.get('/api/report').then(res => {
        this.reportData = res.data
      }).catch(err => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getReportData()
  }
}
</script>

<style scoped>
.report {
  background-color: #fff;
  line-height: 1.8;
  margin: 20px;
  padding: 15px 0 40px;
}
</style>
