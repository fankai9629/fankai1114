<template>
  <div>
    <div class="city-fixed">
      <router-link to="/city">
        <span>{{$store.state.cityName}}</span>
      </router-link>
      <img src="@/assets/img/down-arrow.png" alt width="10px" />
    </div>
    <van-sticky v-show="gone">
      <div class="header">
        <div class="left">
          <div class="city">
            <router-link to="/city">
              <span>{{$store.state.cityName}}</span>
            </router-link>
            <img src="@/assets/img/down-arrow.png" alt />
          </div>
        </div>
        <div class="title">
          <div>电影</div>
        </div>
        <div class="right">
          <div></div>
        </div>
      </div>
    </van-sticky>

    <el-banner></el-banner>
    <van-sticky @scroll="changedown" :offset-top="44">
      <div class="tab-bar-wrap">
        <ul class="tab-bar-nav">
          <li @click="change">
            <router-link to="/film/nowplay" :class="{active:$route.path=='/film/nowplay'}">正在热映</router-link>
          </li>
          <li @click="change">
            <router-link
              to="/film/comming"
              class="act"
              :class="{active:$route.path=='/film/comming'}"
            >即将上映</router-link>
          </li>
        </ul>
        <div class="tab-bar-line-wrap" :style="{transform:'translate3d('+translate+', 0px, 0px)'}">
          <span class="tab-bar-line"></span>
        </div>
      </div>
    </van-sticky>
    <router-view></router-view>
    <div id="ggg"></div>
  </div>
</template>
<script>
import ElBanner from "@/views/Elbanner";
import location from "@/utils/location";
export default {
  components: {
    ElBanner
  },
  data() {
    return {
      translate: "0",
      gone: false
    };
  },
  created() {
    this.change();
    location.initMap("ggg", (res)=>{
      res = res.substring(0, res.length - 1);
      // console.log(res);
      if(!this.$store.state.cityName||this.$store.state.cityName==''){
      this.$store.commit('setCityName',res)
      }
    });
  },
  watch: {
    $route: {
      handler(newVal) {
        // console.log(newVal.meta,'-----------------')
        this.translate = newVal.meta.translateX;
      }
    },
    immediate: true
  },
  methods: {
    change() {
      if (this.$route.path == "/film/comming") {
        this.translate = "100%";
      } else {
        this.translate = "0";
      }
    },
    changedown(info) {
      this.gone = info.isFixed;
    },
  }
};
</script>
<style scoped>
@import url("~@/assets/css/swiper.min.css");
.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}
.banner-wrap img {
  width: 100%;
}
.tab-bar-wrap {
  height: 0.88rem;
  width: 100%;
  font-size: 0.28rem;
  position: relative;
  z-index: 199;
}
.tab-bar-wrap:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.tab-bar {
  position: fixed;
  top: 0.98rem;
}
.tab-bar-nav {
  display: flex;
  flex-direction: row;
  background-color: #fff;
}
.tab-bar-nav li {
  flex: 1;
  text-align: center;
}
.tab-bar-nav a {
  display: block;
  line-height: 0.88rem;
  color: #191a1b;
}
.tab-bar-nav a.active {
  color: #ff5f16;
}
.tab-bar-line-wrap {
  position: absolute;
  bottom: 0;
  width: 50%;
  z-index: 200;
  left: 0;
  transition: transform 0.2s;
  transform: translate3d(100%, 0px, 0px);
}
.tab-bar-line {
  border-bottom: 2px solid #ff5f16;
  border-radius: 20px;
  display: block;
  margin: auto;
  width: 1.12rem;
}
.city-fixed {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.2);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0 5px;
}
.city-fixed a {
  color: #fff;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  overflow: hidden;
  z-index: 1000;
  background-color: #fff;
  display: flex;
}
.header:after {
  transform: scaleY(0.5);
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
}
.header > div {
  float: left;
  height: 44px;
}
.left {
  display: -webkit-box;
  min-width: 15%;
  margin-left: 15px;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.left a {
  display: inherit;
}
.city {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.city:after {
  transform: scaleY(0.5);
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
}
.city span {
  display: inline-block;
  font-size: 13px;
  max-width: 58px;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-right: 5px;
  color: #191a1b;
}
.city img {
  width: 6px;
  height: 3px;
}
.title {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  -webkit-box-flex: 1;
}
.title div {
  color: #191a1b;
}

.right {
  width: 15%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 15px;
}
.right div {
  width: 100%;
  text-align: right;
}
/* @import url('~@/assets/css/reset.css'); */
</style>
    