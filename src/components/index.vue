<template>
  <section>
    <NavBar>hello</NavBar>
    <router-view></router-view>
  </section>
</template>
<script>
import NavBar from './Navbar.vue'
export default {
  components:{
    NavBar
  },
  mounted(){
  }
}
</script>