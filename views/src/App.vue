<template>
  <div id="app">
    <h1>今日は運動しましたか？|ω·)و</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #effdfe;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #2c3e50;
  background: url('../src/assets/bg.jpeg') no-repeat fixed bottom;
  background-size: contain;
  position: fixed;
  left: 0;
  right: 0;
  height: 100%;
  margin: 0 auto;
  max-width: 480px;
}
h1 {
  font-size: 1.5rem;
  margin: 80px 0 30px;
}
h2 {
  color: #4bd;
  font-size: 1.3rem;
}
.btn {
  background-color: #fff;
  border: solid 1px #4bd;
  color: #4bd;
  display: block;
  font-size: 1.2rem;
  margin: 0 auto 20px;
  padding: 10px 0;
  text-decoration-line: none;
  width: 50%;
}
</style>
