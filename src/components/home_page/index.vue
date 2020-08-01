<template>
  <section>
    <header>
      <div class="title">
        <a class="logo">
        <img src="./../../assets/img/logo.jpg" alt="logo circlek" class="logo__img" />
      </a>
      <input type="text" name="search" id="search" class="search"/>
      </div>
      <div class="user">
        <slot></slot>
        <button @click="logout">| Logout</button>
      </div>
      <router-link to="/home/test2">Test2</router-link>
      <router-link to="/home/test1">Test1</router-link>  
    </header>
    <hr>
    <router-view></router-view>
  </section>
</template>

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
