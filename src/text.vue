<template>
  <div class="swiper-container actor-wrap">
    <div class="swiper-wrapper">
      <!-- <div class="swiper-slide" v-for="(item,index) in info.actors" :key="index"> -->
      <!-- <img :src="item.avatarAddress" alt /> -->
      <!-- <span>{{item.name}}</span> -->
      <!-- <span>{{item.role}}</span> -->
      <!-- </div> -->
      <div class="swiper-slide" ref="box">1%2</div>
      <div class="swiper-slide">32@</div>
      <div class="swiper-slide">23#4</div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  //   props: ["info"],
  data() {
    return {
      flag: false
    };
  },
  created() {
      this.init();
    if (!this.flag) {
      this.flag = true;
    } else {
    }
  },
  methods: {
    init() {
        console.log(this.$refs.box,'----')
        var mySwiper = new Swiper(".actor-wrap", {
        autoplay: true, //可选选项，自动滑动
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>