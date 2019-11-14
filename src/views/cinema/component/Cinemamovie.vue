<template>
  <div>
    <!--电影轮播背景-->
    <div class="film-bg">
      <img :src="lists[index].poster" alt />
    </div>
    <!--电影轮播-->
    <div class="film-list" v-if="lists">
      <div class="swiper-container cinema-img">
        <div class="swiper-wrapper cinema-img-box">
          <div class="swiper-slide cinema-img-list" v-for="item in lists" :key="item.filmId">
            <div class="film-item">
              <router-link
                :to="{name:'Cinemadetail',params:{filmid:item.filmId,timeId:lists[index].showDate[0]}}"
              >
                <img v-if="item.poster" @click="changeimg" :src="item.poster" alt />
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="triangle">
        <img src="@/assets/img/up.png" width="20px" height="10px" alt />
      </div>
    </div>
    <!-- 电影介绍-->
    <div class="film-info" :to="{name:'filmDetail',params:{id:lists[index].filmId}}">
      <router-link :to="{name:'filmDetail',params:{id:lists[index].filmId}}">
        <div class="film-head">
          <span class="film-name">{{lists[index].name}}</span>
          <span class="film-score">{{lists[index].grade}}</span>
          <span class="film-score-ulit">分</span>
        </div>
        <div
          class="film-desc"
        >{{lists[index].category}} | {{lists[index].runtime}}分钟 |{{lists[index].actors|getName}}</div>
        <img class="dayu" src="@/assets/img/dayu.png" alt />
      </router-link>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      index: 0,
      false: false
    };
  },
  props: ["lists"],
  index: "",
  updated() {
    if (this.false == false) {
      this.init();
    }
  },
  methods: {
    init() {
      this.false == true;
      // console.log(this.lists[0],this.lists)
      var _this = this;
      var swiper = new Swiper(".cinema-img", {
        spaceBetween: 8,
        centeredSlides: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: 3.9,
        on: {
          slideChangeTransitionStart: function() {
            _this.index = this.activeIndex; //切换结束时，告诉我现在是第几个slide
            console.log(this.activeIndex);
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
      this.ggg = true;
    },
    changeimg() {
      let arr = [];
      console.log(2323232232)
      console.log(this.$route.params.cinemaId)
      arr[0] = this.$route.params.cinemaId;
      arr[1] = this.lists[this.index].filmId;
      arr[2] = this.lists[this.index].showDate;
      arr[3] = this.index;
      console.log(arr,'=======')
      this.$emit("changeimg", arr);
      console.log(123)
    },
    changeimg1(data){
      console.log(data)
      this.$emit("changeimg", data);
    }
  }
};
</script>
<style scoped>
.film-list {
  height: 160px;
  padding: 15px 0;
  position: relative;
}
.cinema-img {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.cinema-img-list {
  min-width: 90px !important;
}
.cinema-img-list img {
  width: 100%;
}
.film-item {
  width: 81.75px;
}
.cinema-img {
  width: 100%;
  height: 100%;
}
.cinema-img-list {
  text-align: center;
  font-size: 18px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  padding-top: 30px;
}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
  padding-bottom: 20px;
}
.film-bg {
  position: absolute;
  top: 0;
  height: 160px;
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
}
.film-bg img {
  height: 100%;
  width: 100%;
  filter: blur(30px);
}
.film-info {
  width: 100%;
  background: #fff;
  height: 80px;
  padding: 15px 0;
  position: relative;
}
.film-info:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.film-head {
  margin-bottom: 10px;
  text-align: center;
  line-height: 18px;
  font-size: 0;
}
.film-name {
  font-size: 15px;
  color: #191a1b;
  padding-right: 5px;
}
.film-score {
  font-size: 16px;
  font-style: italic;
  color: #ffb232;
}
.film-score-ulit {
  font-size: 10px;
  color: #ffb232;
}
.film-desc {
  text-align: center;
  height: 18px;
  color: #797d82;
  font-size: 13px;
  padding: 0 12%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dayu {
  width: 4px;
  height: 8px;
  position: absolute;
  right: 15px;
  top: 0;
  margin-top: 36px;
}
</style>