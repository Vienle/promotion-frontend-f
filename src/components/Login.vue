<template>
  <section class="container">
    <form action="#" class="form" @submit.prevent="submit">
      <div class="form-group">
          <input 
            type="text" 
            id="staffcode"
            name="staffcode"
            class="form-control"
            required
            autofocus
            placeholder="StaffCode"
            v-model="staffcode"
            >
        </div>
        <div class="form-group">
          <input 
            type="password" 
            id="password"
            name="password"
            required
            autofocus
            class="form-control"
            placeholder="Password"
            v-model="password"
            >
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-login">Login</button>
        </div>
    </form>
  </section>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      user:{
        staffcode : "",
        password: ""
      },
      error : null,
    }
  },
  methods : {
      submit(){
        axios({
          method: 'post',
          url: 'http://localhost:8088/api/login',
          data:{
            'staffcode' : this.staffcode,
            'password' : this.password
          }
        })
        .then((response) => {
          if(response.status == 200){
            localStorage.setItem("token",response.data.acessToken);
            this.$router.replace({name: "dashboard"})
          }
        },(error) => {
          console.log(error)
        })
        
      }
    }
}
</script>
<style lang="scss" scoped>
  .container{
    margin: auto;
    .form{
      width: 300px;
      margin: auto;
      .form-group{
        width: 100%;
        margin: 20px auto;
        text-align: center;
        .form-control{
          width: 100%;
          margin-top:10px ;
          font-size: 24px;
          padding: 10px;
        }
      }
      .btn{
        outline: none;
        font-size: 20px;
        padding: 10px;
        width: 50%;
        border-radius: 25px;
        border: 1px solid #79d279;
        &:hover{
          background-color: #25d99a;
        }
      }
      
    }
  }
</style>