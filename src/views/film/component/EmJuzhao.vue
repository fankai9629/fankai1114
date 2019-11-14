<template>
  <div class="swiper-container photo-wrap">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in info.photos" :key="index">
        <a ><img @click="ggg(index)" :src="item" alt /></a>
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
      var mySwiper = new Swiper(".photo-wrap", {
        spaceBetween: 10,
        slidesPerView: 2.4,
        resistanceRatio: 0,
        slidesOffsetAfter :20
      });
    },
    ggg(data){
      this.$emit('changego',data)
      console.log(data)
    }
  }
};
</script>
<style scoped>

img {
  width: 150px;
  height: 100px;
}
.swiper-wrapper{
    padding: 0 10px
}
</style>