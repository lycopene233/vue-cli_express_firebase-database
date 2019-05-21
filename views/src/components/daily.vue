<template>
  <div>
    <datepicker v-model="date" :format="datePickerFormatter" class="date-picker"></datepicker>
    <div v-if="this.status === 'loading'" class="btn">loading...</div>
    <div v-if="this.status === 'isNotFinished'" class="btn blue-btn" @click="postDailyData(true)">Yes!</div>
    <div v-if="this.status === 'isFinished'" class="btn" @click="postDailyData(false)">cancel yes</div>
    <router-link to="/report" class="btn">report</router-link>
  </div>
</template>

<script>
import moment from 'moment'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Daily',
  components: {
    Datepicker
  },
  data () {
    return {
      date: new Date(),
      status: 'loading'
    }
  },
  watch: {
    date: function () {
      this.getDailyData(this.createDateString(this.date))
    }
  },
  methods: {
    postDailyData: function (isFinished) {
      var params = {
        'date': this.createDateString(this.date),
        'method': isFinished ? 'add' : 'remove'
      }
      this.$axios.post('/api/update', params).then(res => {
        console.log(res.data)
        this.status = isFinished ? 'isFinished' : 'isNotFinished'
      }).catch(err => {
        console.log(err)
      })
    },
    getDailyData: function (yyyymmdd) {
      this.status = 'loading'
      this.$axios.get(`/api/daily/${yyyymmdd}`).then(res => {
        this.status = (res.data === null) ? 'isNotFinished' : 'isFinished'
      }).catch(err => {
        console.log(err)
      })
    },
    datePickerFormatter (date) {
      return moment(date).format('YYYY 年 M 月 D 日')
    },
    createDateString (date) {
      return moment(date).format('YYYYMMDD')
    }
  },
  mounted: function () {
    this.getDailyData(this.createDateString(this.date))
  }
}
</script>

<style>
.date-picker input {
  color: #2c3e50;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.05rem;
  padding: 20px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-picker {
  margin: 50px 0;
  text-align: center;
}
.blue-btn {
  background-color: #4bd;
  color: #fff;
}
</style>
