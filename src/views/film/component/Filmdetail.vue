<template>
  <div class="film" v-if="info">
    <el-sticky :info="info"></el-sticky>
    <div class="lazy1-img">
      <div class="bgimg">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAACvlBMVEVHcEwAAADv7+/u7u7MzMzv7+9/f3/v7+/v7+/v7+/v7+/v7+/U1NTa2trv7+/v7+/v7+/v7+/v7+/u7u7v7+/n5+fp6env7++qqqrv7+/v7+/v7+/v7+/v7++/v7/v7+/u7u7q6urq6urv7+/w8PDv7+/s7Ozu7u7s7Ozu7u7v7+/f39/v7+/v7+/u7u7v7+/u7u7v7+/t7e3w8PDr6+vv7+/v7+/u7u7v7+/v7+/v7+/v7+/u7u7u7u7s7Ozu7u7u7u7v7+/v7+/v7+/u7u7v7+/n5+fw8PDu7u7v7+/v7+/v7+/u7u7s7Ozo6Ojt7e3v7+/u7u7p6env7+/u7u7p6enw8PDv7+/v7+/v7+/v7+/t7e3u7u7v7+/s7Ozt7e3v7+/v7+/v7+/v7+/u7u7u7u7w8PDv7+/u7u7t7e3v7+/u7u7v7+/v7+/v7+/v7+/t7e3u7u7v7+/u7u7u7u7u7u7l5eXv7+/u7u7v7+/v7+/u7u7v7+/v7+/v7+/v7+/v7+/v7+/r6+vs7Ozv7+/u7u7t7e3v7+/u7u7l5eXr6+vu7u7v7+/v7+/u7u7w8PDu7u7u7u7i4uLw8PDv7+/r6+vv7+/u7u7v7+/v7+/v7+/v7+/v7+/t7e3u7u7q6uru7u7v7+/r6+vm5ubv7+/s7Ozt7e3v7+/v7+/u7u7s7Ozv7+/u7u7v7+/v7+/i4uLv7+/u7u7w8PDv7+/v7+/u7u7r6+vv7+/v7+/u7u7t7e3u7u7w8PDu7u7u7u7u7u7u7u7v7+/v7+/s7Ozt7e3u7u7v7+/v7+/v7+/u7u7v7+/u7u7v7+/v7+/u7u7w8PDu7u7v7+/v7+/v7+/u7u7u7u7u7u7v7+/v7+/u7u7v7+/v7+/v7+/u7u7u7u7t7e3v7+/k5OTt7e3u7u7w8PDv7+/s7Ozv7+/w8PDw8PCF0VUoAAAA6XRSTlMAAfYPBf0CdVD8+LkGB/7Y8jD7aekLDHADIUDqlHYEwnsZJuNm6DafHD5jCNz6PZa950cRNbLJftu17dnfvBuKL6RxYV63Fu5P8+AQvw4XHYIfJPTvI3fGl0HxO4y0Kkn54tWzLm9VoVtY9R6BlaDhOV3wTl9LFLqLU2KbpjKoxaUgDSnEP1aSjgoaz9Hkvt18jwkzkyjBq9NRhsC4Z24lrdInFak4SrF0eka2rIDrEqKezNDaLTTKkEwreCJ9mt55yNRFWWujg7CuhH/Hp6+IbHNg91zNjeXmPJFSMWpaLGUTOm2Z1zfLuwS2LUQAAAWTSURBVBgZ7cEDk2RnFAbgd2a6+3aPd2xba9u2bZtxNtyNbdu2bdv2+y+SSqo2M3PP1z1b6a97b+U8D5RSSimllFJKKaWUUkoppZRSSimllFLKvum/9SoaMRUeN2zUacVZZOKkbb0C8K60D6t5yNg+8Kpxfdnerj3wpqTz2FGoCV4UqGdnExfDg66jW78z4TlfzqbgI3hN0jmUXBaAxyyhaNFceEvbCsqehKekldOgBp6yhyYOvCTpV5qMhpdk06gXPCR3FU0GNcBDNtJoKTykoAeNJsBDTkimyVgfPOQqmjw/Fx5yZgYNZhfhCJPgm1x51qnLzqr80ZeAzn6gyTwcOZKq9q698M13Ws6tzcnMLK79/PwXb/9q1O5Tk3BIXQ4Nrm7GkWFf4523D0imYEXL0rdfHoe/5B2bQ4PEHTgSzBxz4iSGtb3v63cet4pG2xB/k9fdM4j/UXI3xNv19w7mfzcwAfF1wnNzGA07EVfL6jcxKoobEEeV749nlIxF/CSMaWHUPIu4mXsLoyiIePmumlGUfDHi45QSRtWcmYiLm8oZXbVTEQ8LhzDKeuYhDj7JZLT1zEPsZWcx6gZVIuZKsxh9mx5FrGXThvTbEGM1IVqRj9i6MpF23ICYqruPlmzvjRgalkFb0pcjdnyrac96xE4Fu8L/xdAFzoHGbn9pW5d/8I/qELtifCFiZWEiI0o87YLTeyegvd5tzpSJjGwLYmTyjYwkY8uIBEieqriRkRQXIjaWMIJzmpJglLuxnBHUIyZuTWRYA2ryEFbZKy8xrKzbEAO+8xhO6xP7EFHvtyYynLNzYd9OhpNxF7rkp08ZzlpYN/UKhvHGMHTRvvUMo3oabMtnGGekossC/UM0q4BlSS008js4LN+GaHTuNNjVRKPQHThMr7bSqAJWNfejUX8ctrU0GjAVNvVKp8lxAYg272hsfGwaZFfRaANsOokm5bkQ3HxdeTHJUPV761Ih8PWlyVEFsGf6eBrkXArBhkd4yPw2CDafT4PENbCnhiZNcEs9g+1lNkEwIYsG/WHPWBoMLIBbCTsKjYFgPQ36+WDLM7som/gN3GrYWWYfuBXmULZiBGwZQ4NL4NZQS5ehZXC7gAb5sOU1yubMgtsMuvmXw+3m7ZTdDUtOGUzZArjlZVAwEoJ7Kes5DnasCVGU3Aduda0UTMqD26xFFKUXwY7RlE0pgNuxlHz8PQSXU1YKOw5Slg1BKSX+IgiOoexEWJEwlKLMKggciiZAMK0nRQ+lwYbcIRTND0DgUBSEZClFOZWwoXARRUsgcSgKQpJPkX8EbGgLUXQAEoeiICRFIYomwIavKUqugsShKAjJsEEU/Qwbsikacj8kDkVBSHyrKJoBGyooml8GiUNREKKBFG2FDZ9RtBoih6IgRPUUjYQNCyjaBpFDURCioyk6HjZ0p+gSiByKghANpygFNnSnqAQih6IgRMMpGgobulNUApFDURCi4RSlwIbuFJVA5FB0JUTDKXoXNmylaCtEpRTthehoik6CDVsouhCifEpab4VoBkW/wIadFF0L0XJKdjVAtJGiUbChajYFyRdDdPJ4CvaXQTRrEwX+OtgQ6EHBfh9ECQMpmAdZwd0UPN4MK45Jp9sGGOz106W2AQa70+m2B3aUXU6XlDQYBG6gyx0wKbiHLj3SYMnmwexk5fUwmjmAnfRNhdH0DHaysgrWdGthB0MWI4w+k9jBZeMQxprB7GDlDlh08mq2c/WlCOumKfyX/8HJCKvwGrbTYxms8o3ul8W/+R/OvggRXPTBFfxH65TdiCR19O8h/s1/9rXNsM23uPSBlJTjX1jYjC7Ivav/LUddUz+qLoAuSG2cNzIlZeTTp6dBKaWUUkoppZRSSimllFJKKaWUUkoppZRSSimllPqf+ROwmbOWbPrCtQAAAABJRU5ErkJggg=="
          alt
        />
      </div>
      <div class="banner">
        <img :src="info.poster" />
      </div>
    </div>
    <div class="film-detail">
      <div>
        <span class="name">{{info.name}}</span>
        <span class="type">{{info.filmType.name}}</span>
      </div>
      <div>
        <span>{{info.category|changeline}}</span>
      </div>
      <div>
        <span>{{info.premiereAt|getnewDate}}</span>
      </div>
      <div>
        <span>{{info.nation}}&ensp;|&ensp;{{info.runtime}}分钟</span>
      </div>
      <div
        ref="box"
        class="film-synopsis"
        :style="{height:height}"
        :class="flag?'min':''"
      >{{info.synopsis}}</div>
      <div class="toggle">
        <img
          src="@/assets/img/down-arrow.png"
          @click="change"
          :style="{transform:'rotate('+trans+'deg'+')'}"
          alt
        />
      </div>
    </div>
    <!--演员-->
    <div class="actor">
      <div class="actor-title-bar">
        <span class="actor-title-text">演员职员</span>
      </div>
      <em-swiper :info="info"></em-swiper>
    </div>

    <!--剧照-->
    <div class="photo">
      <div class="photos-title-bar">
        <span class="photos-title-text">剧照</span>
        <span class="photos-to-all" @click="changehide1" v-if="Length">全部({{info.photos.length}})></span>
      </div>
      <em-juzhao :info="info" v-if="Length" v-on:changego="changego1"></em-juzhao>
      <div v-if="!Length" class="moviejuzhao">暂无电影剧照</div>
    </div>
    <div class="goschedule">选座购票</div>

    <!-- 换页剧照-->
    <div class="film-header1" v-show="hide">
      <img
        @click="changehide"
        class="goBack1"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
        alt
      />
      <div class="juzhao-title" v-if="Length">剧照({{info.photos.length}})</div>
    </div>
    <!--剧照所有照片-->
    <div class="all-photos" v-show="hide">
      <div class="juzhao-img">
        <div v-for="(item,index) in info.photos" :key="index" class="juzhao-img-de">
          <a class="smallimg" @click="changehidde(index)">
            <img :src="item" alt />
          </a>
        </div>
      </div>
    </div>

    <!--轮播-->
    <div class="big-zoom-img" v-if="hidde">
      <!--轮播头-->
      <div class="header-photo">
        <img class="goback2" src="@/assets/img/X.png" @click="goback3" />
        <div class="header-photo-title" v-if="Length">{{index+1}}/{{info.photos.length}}</div>
      </div>
      <div class="swiper-container header-img">
        <div class="swiper-wrapper header-img-box">
          <div class="swiper-slide" v-for="(item,index) in info.photos" :key="index">
            <img :src="item" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getFilmDetail } from "@/api/film";
import { changeline } from "@/api/film";
import ElSticky from "./Filmdetailsticky";
import Swiper from "swiper";
import EmSwiper from "./Emswiper";
import EmJuzhao from "./EmJuzhao";
export default {
  components: {
    ElSticky,
    EmSwiper,
    EmJuzhao
  },
  data() {
    return {
      hide: false,
      info: "",
      Length: "",
      trans: "0",
      height: "",
      flag: false,
      add: false,
      index: 0,
      hidde: false
    };
  },
  created() {
    this.getDetail();
  },
  mounted() {},
  updated() {
    this.init();
    if (this.add == false) {
      this.flag = !this.flag;
      this.height = this.$refs.box.offsetHeight + "px";
      this.add = true;
    }
    // console.log(this.$refs.box)
  },

  methods: {
    changego1(data) {
      console.log(data, "----");
      this.index = data;
      this.hidde = true;
      console.log(this.index);
    },
    init() {
      var _this = this;
      var mySwiper1 = new Swiper(".header-img",{
        preventInteractionOnTransition : true,
        initialSlide:_this.index,
        on: {
          slideChangeTransitionEnd(){
            _this.index = this.activeIndex; //切换结束时，告诉我现在是第几个slide
          // console.log(_this.index)
         }
        }
      });
    },
    getDetail() {
      getFilmDetail(this.$route.params.id).then(result => { 
        let temp = result.data.film;
        this.info = temp;
        this.Length = temp.photos ? temp.photos.length : false;
      });
    },
    change() {
      this.flag = !this.flag;
      if (this.trans == "180") {
        this.trans = "0";
      } else {
        this.trans = "180";
      }
    },
    changehide() {
      this.hide = false;
    },
    changehide1() {
      this.hide = true;
    },
    addindex(data) {
      this.index = data;
      this.init(data);
    },
    changehidde(data) {
      this.hidde = true;
      this.index = data;
    },
    goback3() {
      this.hidde = false;
    }
  }
};
</script>
<style scoped>

.min {
  height: 0.76rem !important;
}
.name {
  color: #191a1b;
  font-size: 18px;
  height: 24px;
  line-height: 24px;
  margin-right: 7px;
}
.lazy1-img {
  width: 100%;
  background: rgb(249, 249, 249);
  position: relative;
  height: 56vw;
  overflow: hidden;
}
.bgimg {
  height: 56vw;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.banner img {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.type {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
  display: inline-block;
}
.banner {
  opacity: 1;
  display: block;
  position: absolute;
  overflow: hidden;
  top: 0;
  width: 100%;
  height: 56vw;
  overflow: hidden;
  top: 0;
  height: 56vw;
}
.film-detail {
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  text-align: left;
}
.film-detail div {
  font-size: 13px;
  color: #797d82;
  margin-top: 4px;
  line-height: 1.5;
}
.film-synopsis {
  transition: height 0.5s;
  overflow: hidden;
  line-height: 1.5;
  margin-top: 12px;
}
.toggle {
  text-align: center;
  display: block;
  height: auto;
  width: 20px;
  margin: auto;
  line-height: normal;
}
.toggle img {
  width: 8px;
  margin: auto;
}
.actor {
  margin-top: 10px;
  background-color: #fff;
}
.actor-title-bar {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
}
.photo {
  margin-top: 10px;
  margin-bottom: 60px;
  background-color: #fff;
}
.photos-title-bar {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  line-height: 1.5;
}
.photos-title-text {
  font-size: 16px;
  text-align: left;
  color: #191a1b;
  padding: 0;
  display: inline-block;
  height: 22.5px;
  line-height: 22px;
}
.photos-to-all {
  float: right;
  font-size: 13px;
  color: #797d82;
  height: 22.5px;
  line-height: 22px;
}
.goschedule {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 49px;
  width: 100%;
  text-align: center;
  background-color: #ff5f16;
  color: #fff;
  font-size: 16px;
  line-height: 49px;
  z-index: 5;
}
.film-header1 {
  width: 100vw;
  height: 44px;
  z-index: 15;
  background-color: #fff;
  color: #191a1b;
  position: fixed;
  top: 0;
  z-index: 99;
}
.goBack1 {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
}
.juzhao-title {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
}
.all-photos {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: #fff;
  z-index: 100;
}
.juzhao-img {
  flex-wrap: wrap;
  display: -webkit-flex;
  justify-content: flex-start;
  -webkit-box-pack: start;
  align-content: center;
}
.juzhao-img-de {
  width: calc((100vw - 3px) / 3);
  height: calc((100vw - 3px) / 3);
  margin-right: 1px;
  display: inline-block;
  margin-bottom: 1.5px;
}
.smallimg {
  width: 124px;
  height: 124px;
  display: inline-block;
}
.smallimg img {
  width: 100%;
  height: 100%;
}
.header-photo {
  position: fixed;
  background-color: #000;
  color: transparent;
  transition: all 0.3s ease;
  width: 100vw;
  height: 44px;
  z-index: 101;
  top: 0;
}
.header-photo img {
  width: 20px;
  height: 20px;
}
.goback2 {
  height: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 22px;
  height: 22px;
  color: #fff;
}
.big-zoom-img {
  width: 100%;
  height: 100%;
  z-index: 3001;
  position: fixed;
  background-color: #000;
  top: 0;
}
.header-photo-title {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
  color: #fff;
}
.header-img {
  z-index: 100;
  overflow: hidden;
  position: relative;
  height: 100%;
}

.header-img-box {
  /* overflow: hidden; */
  position: relative;
  height: 100%;
}
.header-img-box div {
  width: 100%;
  height: 100%;
  align-items: center;
  display: -webkit-inline-flex !important;
}
.header-img-box img {
  width: 100%;
}
.moviejuzhao {
  height: 115px;
  line-height: 58px;
  font-size: 14px;
  color: #bdc0c5;
  margin: auto;
  text-align: center;
}
</style>