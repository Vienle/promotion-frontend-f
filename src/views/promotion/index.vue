<template>
  <section>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </section>
</template>
<script>
import NavBar from './../../components/Navbar.vue'
export default {
  components:{
    NavBar
  }
}
</script>