<template>
  <div id="app">
    <!-- <login></login> -->
    <!-- <datacontent></datacontent> -->
    <!-- <router-view name="header"></router-view> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import login from './components/Login.vue'
//import datacontent from './components/DataTable.vue'

export default {
  name: 'App',
  components: {
    // login
    //datacontent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
