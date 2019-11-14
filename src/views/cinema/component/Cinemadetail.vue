<template>
  <div>
    <div class="date-list">
      <div class="tabs-bar-wrapper dateWrap">
        <div class="tabs-bar">
          <ul class="tab-nav">
            <li v-for="(item,index) in timeall[2]" @click="gochangeday([$route.params.cinemaId,$route.params.filmid,timeall[2],index])" :key="index" >
              <span>{{item|getday}}</span>
            </li>
            <div class="tab-ink-bar-wrapper" :style="{transform:'translate3d('+this.observe+', 0px, 0px)'}">
              <span class="tab-ink-bar"></span>
            </div>
          </ul>
        </div>
      </div>
    </div>

    <div class="schedule-list">
      <div>
        <div class="schedule-item" v-for="(item,index) in time" :key="index">
          <div class="left">
            <div class="start-at">{{item.showAt|getDateTime}}</div>
            <div class="end-at">{{item.endAt|getDateTime}}散场</div>
          </div>
          <div class="middle">
            <div class="language">{{item.filmLanguage}}</div>
            <div class="hall">{{item.hallName}}</div>
          </div>
          <div class="right">
            <div class="buy-ticket">购票</div>
            <div class="lowest-price">
              <span class="price-icon">￥</span>
              {{item.salePrice/100}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  data(){
    return{
      observe:'0%',
      date:' ',
      change:'121212'
    }
  },
  props: ["time", "timeall", "index"],
  mounted() {
    this.init();
  },
  updated(){
    this.get()
  },

  methods: {
    init() {
      console.log(this.time);
    },
    gochangeday(data) {
      this.observe =data[3]*100+'%'
      console.log(this.observe)
      if(data[3]!=this.date){
        this.date = data[3]
      this.$emit("changeday", data);
      }else{
        return
      }
    },
    ggg() {
      console.log(this.timeall);
    },
    changecolor(data){
    },
    get(){
      this.observe=0
    }
  }
};
</script>
<style scoped>
.schedule-list {
  min-height: calc(100vh - 44px);
}
.schedule-item {
  height: 74px;
  padding: 15px;
  position: relative;
  background: #fff;
}
.left {
  float: left;
  width: 100px;
}
.start-at {
  font-size: 15px;
  color: #191a1b;
}
.end-at {
  font-size: 13px;
  color: #797d82;
  margin-top: 2px;
}
.middle {
  float: left;
  width: calc(100% - 240px);
}
.language {
  font-size: 15px;
  color: #191a1b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hall {
  font-size: 13px;
  color: #797d82;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right {
  float: right;
  padding: 10px 0;
  line-height: 25px;
  color: #ff5f16;
}
.buy-ticket {
  float: right;
  height: 25px;
  width: 50px;
  border-radius: 2px;
  position: relative;
  text-align: center;
  font-size: 12px;
}
.buy-ticket:after {
  content: " ";
  transform: scale(0.5);
  position: absolute;
  border: 1px solid #ff5f16;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
}
.lowest-price {
  float: right;
  padding-right: 20px;
  font-size: 15px;
}
.price-icon {
  font-size: 10px;
}

.date-list {
  width: 100%;
}
.tabs-bar-wrapper {
  position: relative;
  z-index: 10;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.tabs-bar {
  height: 49px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
}
.tab-nav {
  display: -webkit-flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
}
.tab-nav li {
  flex-shrink: 0;
  color: #191a1b;
  text-align: center;
  height: 16px;
  line-height: 16px;
  font-size: 14px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  padding: 0 15px;
}
.tab-nav li span {
}
.tab-ink-bar-wrapper {
  padding: 0px 15px;
  position: absolute;
  margin: auto;
  top: 30px;
  left: 0;
}
.tab-ink-bar-wrapper span {
  width: 89px;
  border-bottom: 2px solid #ff5f16;
  border-radius: 20px;
  display: block;
  margin: auto;
}
</style>