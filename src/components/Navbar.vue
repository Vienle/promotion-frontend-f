<template>
  <section>
    <header>
      <div class="title">
        <a class="logo" @click="backtohome">
        <img src="./../assets/img/logo.jpg" alt="logo circlek" class="logo__img" />
      </a>
      <input type="text" name="search" id="search" class="search" v-on:keyup.enter="search" v-model="itemcode"/>
      </div>
      <div class="user">
        <slot></slot>
        <button @click="logout">| Logout</button>
      </div>
      <router-link to="/test">Promotion</router-link>
    </header>
    <hr>
  </section>
</template>
<script>
import Axios from 'axios';
export default {
  data(){
    return{
      itemcode : '',
      datatable: ''
    }
  },
  methods:{
    logout(){
      localStorage.removeItem("token");
      this.$router.replace('login')
    },
    backtohome(){
      this.$router.replace('dashboard')
    },
    search(){
      Axios({
        method:'GET',
        url: 'http://localhost:8088/api/get-all/search?itemcode=' + this.itemcode
      }).then(response => {
        this.datatable = response.data
        this.$emit('dataSearch',response.data);
        console.log(response.data)
      })
    }
  },
  props:{
    'dataSearch' : this.datatable
  }
}
</script>
<style lang="scss" scoped>
header {
  height: 50px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title{
    display: flex;
    align-items: center;
    .logo {
        .logo__img {
          width: 110px;
          padding-top: 4px;
          margin-left: 110px;
        }
      }
      .search {
        width: 150px;
        font-size: 20px;
        height: 30px;
        margin-left: 84px;
        outline: none;
        border: none;
        opacity: 0.7;
        border-radius: 29px;
        padding-left: 20px;
      }
  }
  .user{
    display: flex;
    align-items: center;
    margin-right: 90px;
    font-size: 20px;
    color: white;
    button{
      background: none;
      border: none;
      font-size: 20px;
      color: white;
      outline: none;
    }
  }
  
}
</style>
