<template>
  <ul class="nav-bar" v-if="address">
    <li>
      <router-link to="/film">
        <img
          :src="$route.path=='/film/nowplay'||$route.path=='/film/comming'?require('@/assets/img/film.png'):require('@/assets/img/1.png')"
        />
        <span :class="{active:$route.path=='/film/nowplay'||$route.path=='/film/comming'}">电影</span>
      </router-link>
    </li>
    <li>
      <router-link to="/cinema">
        <img
          :src="$route.path=='/cinema'?require('@/assets/img/2.png'):require('@/assets/img/download.png')"
        />
        <span :class="{active:$route.path=='/cinema'}">影院</span>
      </router-link>
    </li>
    <li>
      <a href="https://m.maizuo.com/mz-act/active/ElzMZU125260">
        <img src="@/assets/img/news.png" />
        <span :class="{active:$route.path=='/message'}">资讯</span>
      </a>
    </li>
    <li>
      <router-link to="/center">
        <img
          :src="$route.path=='/center'?require('@/assets/img/3.png'):require('@/assets/img/my.png')"
        />
        <span :class="{active:$route.path=='/center'}">我的</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      address: true
    };
  },
  watch: {
    "$route.path": {
      handler(newVal) {
        if ( newVal == "/film/nowplay" ||newVal == "/film/comming" ||newVal == "/cinema" ||newVal == "/center"){
          this.address = true;
        }else{
        this.address = false;
        }

      },
      immediate: true
    }
  },
  created() {
    this.getdate();
  },
  methods: {
    getdate() {
      //   console.log(this.$route.path)
    }
  }
};
</script>
<style scope>
/* 底部导航区域 */
.active {
  color: #ff5f16;
}
.nav-bar {
  height: 0.98rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 0.2rem;
  background-color: #fff;
}
.nav-bar:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.nav-bar li {
  flex: 1;
  text-align: center;
  height: 0.98rem;
}
.nav-bar a {
  color: #797d82;
  display: block;
  height: 0.98rem;
  line-height: 0.56rem;
  width: 100%;
  position: relative;
  padding-top: 0.08rem;
  box-sizing: border-box;
}
.nav-bar img {
  width: 0.42rem;
  height: 0.42rem;
}
.nav-bar span {
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
}
</style>