<template>
  <div id="app">
    <div class="web-login">
      <div class="logo">
        <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png" alt />
      </div>
      <div class="login-form">
        <form>
          <div class="from-group">
            <input
              type="text"
              class="input-control"
              v-model="phone"
              maxlength="11"
              placeholder="手机号"
            />

            <div class="clear-mobile-btn" style="display:none">
              <img src="@/assets/img/xx.png" alt />
            </div>
          </div>

          <div class="errorTip" style="display:none">手机格式有误</div>
          <div class="from-group">
            <input type="password" placeholder="密码" v-model="pass" class="input-control" />
          </div>
          <div class="submit" @click="submit">
            <span :style="{opacity:changeico}">登录</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: '',
      pass: '',
      changeico: 0.3
    };
  },
  watch: {
    phone: {
      handler(newval) {
        if (this.phone && this.pass) {
          this.changeico = 1;
        }else{
          this.changeico=0.3
        }
      }
    },
    pass: {
      handler(newval) {
        if (this.phone && this.pass) {
          this.changeico = 1;
        }else{
          this.changeico=0.3
        }
      }
    }
  },
  methods: {
    submit() {
      if(this.changeico!==1){
        return
      }
      axios({
        url: "http://localhost:9091/user/login",
        method: "post",
        data: { 'phone': this.phone, 'pass': this.pass }
      }).then(res => {
        if(res.data.code==1){
        this.$toast('参数必传');
        return
        }else if(res.data.code==2){
          this.$toast('用户名或则密码错误')
          return
        }else{
          let m = JSON.parse (res.config.data).phone
          this.$store.commit('login',m)
          setTimeout(()=>{
          this.$router.go(-1)
          })
        }
      });
    }
  }
};
</script>
<style scoped>
#app {
  width: 100%;
}
.logo {
  margin: 79px auto 40px;
  text-align: center;
  height: 60px;
  line-height: 60px;
}
.sms-code {
  line-height: 30px;
  width: 90px;
  text-align: right;
  float: right;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
  color: #bdc0c5;
}
.logo img {
  height: 60px;
}
.clear-mobile-btn {
  position: absolute;
  right: 90px;
  top: 20px;
  line-height: 40px;
  font-size: 23px;
}
.errorTip {
  text-align: left;
  color: #ff5f16;
  width: 90%;
  line-height: 11px;
  margin-left: 25px;
  font-size: 11px;
  margin-top: 7px;
  /* box-sizing: border-box; */
}
.from-group {
  line-height: 55px;
  margin: 0 25px;
  position: relative;
}
.input-control {
  height: 15px;
  line-height: 15px;
  padding: 20px 0;
  width: 100%;
  font-size: 15px;
  color: #191a1b;
  border: 0;
  outline-width: 0;
}
.submit {
  line-height: 45px;
  font-size: 16px;
  margin: 70px 25px 0;
  border-radius: 3px;
  text-align: center;
  background-color: #ff5f16;
  height: 44px;
  color: #fff;
  border: none;
  margin-top: 70px;
}
.submit span {
  opacity: 0.3;
}
</style>