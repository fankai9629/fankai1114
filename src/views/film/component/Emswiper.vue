<template>
  <div class="swiper-container actor-wrap">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in info.actors" :key="index">
        <div class="box"> <img :src="item.avatarAddress" alt /></div>
        <span class="name">{{item.name}}</span>
        <span class="role" ref="box" >{{item.role}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  props: ["info"],
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.info)
      var mySwiper = new Swiper(".actor-wrap", {
        spaceBetween: 10,
        slidesPerView: 4,
        resistanceRatio : 0,
        slidesOffsetAfter :10

      });
    }
  }
};
</script>
<style scoped>
.actor-wrap{
  height:140px;
  padding-left: 10px;
}
span {
  display: block;
  text-align: center;
}
.swiper-slider{
  width: 55px;
}
.box{
    width: 85px;
    height: 85px;
  overflow:hidden;
  position: relative;
}
img {
  width: 85px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
.name {
  padding-top: 8px;
  font-size: 12px;
  color: #191a1b;
  width: 85px;
  height: 18px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.role {
  line-height: 28px;
  font-size: 10px;
  color: #797d82;
  line-height: 1.1;
  padding-top: 2px
}
</style>