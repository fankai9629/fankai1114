<template>
  <div class="main">
    <div class="center-view">
      <div class="avatar">
        <img class="avator-icon" src="@/assets/img/touxiang.png" alt v-show="change" />
        <img class="avator-icon" src="@/assets/img/login.jpg" alt v-show="!change" />
        <router-link v-show="change" :to="{name:'Sign',path:'/sign'}"><div class="nick-name">{{loginname}}</div></router-link>
        <div v-show="!change" ><div class="nick-name">{{$store.state.username}}</div></div>
      </div>
      <ul class="my-order-tab">
        <li>
          <img src="@/assets/img/dingdan.png" alt />
          <span class="mint-badge"></span>
          <div class="common-p">电影订单</div>
        </li>
        <li>
          <img src="@/assets/img/setting.png" alt />
          <div class="common-p">商品订单</div>
        </li>
      </ul>

      <div class="margin-set my-card">
        <img class="bigimg" src="@/assets/img/maizuo.png" alt />
        <span class="label">卖座券</span>
        <img class="arrow" src="@/assets/img/xiangyou.png" alt />
      </div>
      <div class="margin-set my-card">
        <img class="bigimg" src="@/assets/img/hongbao.png" alt />
        <span class="label">组合红包</span>
        <img class="arrow" src="@/assets/img/xiangyou.png" alt />
      </div>
      <div class="margin-set my-blance">
        <img class="bigimg" src="@/assets/img/yue.png" alt />
        <span class="label">余额</span>
        <img class="arrow" src="@/assets/img/xiangyou.png" alt />
      </div>
      <div class="margin-set sys-set">
        <img class="bigimg" src="@/assets/img/setting.png" alt />
        <span class="label">设置</span>
        <img class="arrow" src="@/assets/img/xiangyou.png" alt />
      </div>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      change:true,
      loginname:'立即登录'
    }
  },
  created(){
    this.init()
  },

  methods:{
    init(){
      if(sessionStorage.getItem('username')){
        // console.log(2223)
        this.change=false
      }
    }
  }
}
</script>
<style scoped>
.main {
  height: 100%;
  background: #f4f4f4;
}
.center-view {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  font-size: 15px;
  background: #f4f4f4;
  margin-bottom: 59px;
}
.avatar {
  text-align: center;
  margin-top: -44px;
  height: 200px;
  padding-left: 22px;
  padding-top: 64px;
  background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
  background-size: cover;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: #fff;
}
.avator-icon {
  width: 63px;
  height: 63px;
  border-radius: 35px;
  margin-right: 20px;
  border: 2px solid #fff;
}
.nick-name {
  font-size: 16px;
  color:#fff
}
.my-order-tab {
  width: 100%;
  margin: 0 auto;
  display: flex;
  text-align: center;
  font-size: 13px;
  padding: 0;
  height: 79px;
  background: #fff;
  margin-bottom: 10px;
  align-items: center;
}
.my-order-tab li {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  list-style: none;
}
.my-order-tab img {
  width: 26px;
  height: 26px;
}
.mint-badge {
  padding: 0;
  font-size: 10px;
  height: 16px;
  line-height: 18px;
  min-width: 16px;
  background: #ff5f16;
  position: absolute;
  left: 52%;
  text-align: center;
  top: 0;
  color: #fff;
}
.common-p {
  color: #797d82;
}
.margin-set {
  background: #fff;
  padding: 0 15px;
  height: 49px;
  position: relative;
  display: flex;
  align-items: center;
}
.bigimg {
  width: 20px;
  height: 20px;
}
.label {
  margin-left: 15px;
  color: #191a1b;
  -webkit-box-flex: 1;
  flex: 1;
}
.arrow {
  text-align: right;
  width: 6px;
  height: 10px;
}
.bg{
  background: #f4f4f4;
  height: 120px;
}
</style>