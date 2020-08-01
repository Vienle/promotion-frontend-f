<template>
  <section class="container">
    <!-- <Navbar @dataSearch='updatetable'>{{user}}</Navbar> -->
    <div class="content-table">
      <div class="content-title">
        <h1 class="title">PROMOTION</h1>
        <export-excel class="export" :data="promotion" :fields="excel_fildes" name="promotion.xls">
          <img src="./../assets/img/export.png" />
        </export-excel>
      </div>
      <table class="table-main">
        <thead class="table__head">
          <tr class="table-header">
            <td class="cl-t1">promo</td>
            <td class="cl-t1">type</td>
            <td class="cl-t1">code</td>
            <td class="cl-t2">effdate</td>
            <td class="cl-t2">expdate</td>
            <td class="cl-t0">unit</td>
            <td class="cl-t1">disctp</td>
            <td class="cl-t2">discval</td>
            <td class="cl-t1">points</td>
            <td class="cl-t0">qtysale</td>
            <td class="cl-t0">qtysold</td>
            <td class="cl-t1">qtycus</td>
            <td class="cl-t3">othinfo</td>
            <td class="cl-t1">stid</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in promotion" v-bind:key="key"
            :class="item.pm_type.trim() === 'O' ? 'border-row' : ''">
              <td class="cl-t1">{{ item.pm_promo }}</td>
              <td class="cl-t1">{{ item.pm_type }}</td>
              <td class="cl-t1">{{ item.pm_code }}</td>
              <td class="cl-t2">{{ item.pm_effdate | formatDateTime }}</td>
              <td class="cl-t2">{{ item.pm_expdate | formatDateTime }}</td>
              <td class="cl-t1">{{ item.pm_unit }}</td>
              <td class="cl-t1">{{ item.pm_disctp }}</td>
              <td class="cl-t2">{{ item.pm_discval }}</td>
              <td class="cl-t1">{{ item.pm_points }}</td>
              <td class="cl-t1">{{ item.pm_qtysale }}</td>
              <td class="cl-t1">{{ item.pm_qtysold }}</td>
              <td class="cl-t1">{{ item.pm_qtycus }}</td>
              <td class="cl-t3">{{ item.pm_othinfo }}</td>
              <td style="width: 100px; display: block; overflow: hidden;">
                {{ item.pm_stid }}
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script>
// import Navbar from './Navbar.vue';
import Axios from 'axios';
export default {
  data(){
    return{
      accesstoken : '',
      promotion: '',
      user: '',
      excel_fildes:{
        pm_promo: 'pm_promo',
        pm_type: 'pm_type',
        pm_code: 'pm_code',
        pm_effdate: 'pm_effdate',
        pm_expdate: 'pm_expdate',
        pm_unit: 'pm_unit',
        pm_disctp: 'pm_disctp',
        pm_discval: 'pm_discval',
        pm_points: 'pm_points',
        pm_qtysale: 'pm_qtysale',
        pm_qtysold: 'pm_qtysold',
        pm_qtycus: 'pm_qtycus',
        pm_othinfo: 'pm_othinfo',
        pm_stid: 'pm_stid',
      }
    }
  },
  components:{
    // Navbar
  },
  filters:{
    formatDateTime: function(value){
      if(value){
        return value.split(' ')[0];
      }
    }
  },
  // props:['dataSearch'],
  mounted(){
    this.promotion = this.dataSearch;
    this.accesstoken = localStorage.getItem("token");
    if(this.accesstoken == null || this.accesstoken == ''){
      this.$router.replace("login");
    }

    const authAxios = Axios.create({
      headers:{
        Authorization: `Bearer ${this.accesstoken}`,
      }
    });
    authAxios({
      method: 'GET',
      url: 'http://localhost:8088/api/get-all',
    })
    .then(response => {
      if(response.status == 200){
        this.promotion = response.data.promotion;
        this.user = response.data.user;
      }else if(response.status == 403 || response.status == 400){
        this.$router.replace("login");
      }
    })
  },
  methods:{
    updatetable(mes){
      this.promotion = mes
    }
  },
  
}
</script>
<style lang="scss" scoped>
  .container{
    .content-table{
      .content-title{
        display: flex;
        .title{
          text-align: left;
        }
        .export{
          margin-left: 10px;
          &:hover{
            transform: scale(1.5);
          }
        }
      }
      .table-main{
        width: 100%;
        max-height: 90%;
        .table__head{
          background-color: #0e4575;
          color: white;
          font-size: 23px;
          .table-header{
            height: 50px;
          }
        }
        .cl-t0{
          width: 20px;
        }
        .cl-t1{
          width: 100px;
        }
        .cl-t2{
          width: 150px;
        }
        .cl-t3{
          width: 250px;
        }
      }
      .border-row{
        background-color: #7d680a;
        color: white;
      }
    }
  }
</style>