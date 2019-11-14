<template>
  <div class="swiper-container banner-wrap">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in lists" :key="index">
        <img :src="item.imgUrl" alt />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getbanner } from "@/api/film.js";
export default {
  data() {
      return{
    lists: [],
    flag:0,
      }
  },
  created() {
    this.getDate();
  },
  methods: {
    init() {
      var mySwiper = new Swiper(".banner-wrap", {
        autoplay: true, //可选选项，自动滑动
        loop:true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
      this.flag = 1;
    },
    getDate() {
      getbanner().then(res => {
        // console.log(res);
        this.lists = res.data;
      });
    }
  },
  updated() {
      if(!this.flag){
          this.init()
      }
  },
};
</script>
<style scope>
.banner-wrap {
  height: 4.2rem;
  background-color: #ccc;
}

.banner-wrap img {
  width: 100%;
}
/* @import url("~@/assets/css/reset1.css"); */
</style>