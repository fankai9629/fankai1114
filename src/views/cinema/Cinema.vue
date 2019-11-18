<template>
  <div class="cinema-list">
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
        <div>影院</div>
      </div>
      <div class="right">
        <div>
          <img src="@/assets/img/sousuo.png" alt />
        </div>
      </div>
    </div>
    <div class="cinema-list-tag">
      <div class="cinema-list-tag-name">
        <label @click="changedire" :class="{active:this.hide==true}">
          {{cityguding}}
          <img src="@/assets/img/up-arrow.png" alt v-show="hide" />
          <img src="@/assets/img/down-arrow.png" alt v-show="!hide" />
        </label>
        <label @click="changedire1" :class="{active:this.hide1==true}">
          {{dingpiao}}
          <img src="@/assets/img/up-arrow.png" alt v-show="hide1" />
          <img src="@/assets/img/down-arrow.png" alt v-show="!hide1" />
        </label>
        <label @click="changedire2" :class="{active:this.hide2==true}">
          {{pathgo}}
          <img src="@/assets/img/up-arrow.png" alt v-show="hide2" />
          <img src="@/assets/img/down-arrow.png" alt v-show="!hide2" />
        </label>
      </div>
    </div>
    <div class="cinema-layer"></div>

    <div class="mint-popup area-box filter-box mint-popup-top" style="z-index: 2093;" v-show="hide">
      <div class="filter-wrap">
        <ul class="cityall">
          <li>
            <div @click="cityall" :class="{changecolor:active==-1}">{{city}}</div>
          </li>
          <li v-for="(item,index) in cities"  :key="index" @click="cityone(item,index)">
            <div :class="{changecolor:active==index}">{{item}}</div>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="mint-popup area-box filter-box mint-popup-top"
      style="z-index: 2093;"
      v-show="hide1"
    >
      <div class="filter-wrap">
        <ul class="filter-list">
          <li :class="{origh:this.color}" @click="buytic">
            <span class="filter-text">App订票</span>
          </li>
          <li  :class="{origh:!color}" @click="buytic1">
            <span class="filter-text">前台兑换</span>
          </li> 
        </ul>
      </div>
    </div>

    <div class="cinema-list-wrap">
      <ul class="cinema-list">
        <li class="cinema-list-item" v-for="(item,index) in lists" :key="index">
          <router-link
            :to="{name:'Cinemas',params:{cinemaId:item.cinemaId}}"
            class="cinema-item-wrap"
          >
            <!--左边-->
            <div class="cinema-info-lf cinema-info">
              <span class="cinema-name">{{item.name}}</span>
              <span class="cinema-address">{{item.address}}</span>
            </div>
            <!--右边-->
            <div class="cinema-info-rt cinema-info">
              <div class="cinema-box">
                <span class="price-fmt">
                  <i>￥</i>
                  <span class="interge">{{item.lowPrice/100}}</span>
                </span>
                <span class="upon">起</span>
              </div>
              <span class="cinema-gpsAddress">
                <strong>距离未知</strong>
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { getcinema } from "@/api/cinema.js";
export default {
  data() {
    return {
      lists: [],
      listssrc: [],
      disname: [],
      hide: false,
      hide1: false,
      hide2: false,
      city: "全城",
      dingpiao: "APP订票",
      pathgo: "最近去过",
      cityguding: "全城",
      cities: [],
      color:true,
      active:-1
     };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      getcinema().then(res => {
        if (res.status == 0) {
          let m = res.data.cinemas;
          this.lists = m;
          this.listssrc = m;
          console.log(this.listssrc)
          let a = [];
          m.forEach(element => {
            a.push(element.districtName);
          });
          this.cities = new Set(a);
          console.log(this.cities);
        }
      });
    },
    changedire() {
      this.hide = !this.hide;
      this.hide1 = false;
      this.hide2 = false;
    },
    changedire1() {
      this.hide1 = !this.hide1;
      this.hide = false;
      this.hide2 = false;
    },
    changedire2() {
      this.hide2 = !this.hide2;
      this.hide1 = false;
      this.hide = false;
    },
    cityall() {
      this.cityguding = this.city;
      this.lists = this.listssrc;
      this.hide = false;
      this.active=-1
    },
    cityone(data,data2) {
      this.active=data2
      this.cityguding = data;
      this.lists = this.listssrc.filter(item => item.districtName == data);
      this.hide = false;
    },
    buytic(){
      this.color=true;
      this.lists =this.listssrc
      this.hide1=false;
      this.dingpiao ='App订票'
    },
      buytic1(){  
      this.color=false;
      this.dingpiao = "前台兑换"
      this.lists =this.listssrc.filter(item=>item.eTicketFlag==1)
      this.hide1=false

    },

  }
};
</script>
<style scoped>
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
.city {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
.city a {
  display: inherit;
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
.right img {
  width: 18px;
  height: 18px;
  margin-bottom: 10px;
}
.cinema-list-tag {
  position: fixed;
  height: 50px;
  width: 100%;
  top: 44px;
  right: 0;
  text-align: center;
  background-color: #fff;
  z-index: 1000;
}
.cinema-list-tag:after {
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
.cinema-list-tag-name {
  position: relative;
}
.cinema-list-tag-name label {
  float: left;
  width: 33.3%;
  line-height: 49px;
  font-size: 14px;
  color: #191a1b;
  letter-spacing: -0.2px;
}
label img {
  vertical-align: middle;
  padding-left: 2px;
  width: 6px;
  height: 3px;
}
.cinema-layer {
  padding-top: 94px;
}
.cinema-list-wrap {
  padding-bottom: 49px;
  z-index: 100;
}
.cinema-list-wrap li {
  position: relative;
  background-color: #fff;
  padding: 15px;
}
.cinema-list-wrap li:after {
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
.cinema-item-wrap {
  width: 100%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
}
.cinema-info-lf {
  width: calc(100% - 65px);
  text-align: left;
  padding-right: 15px;
  float: left;
}
.cinema-info-rt {
  width: 70px;
  text-align: center;
  float: right;
  margin-right: -5px;
}
.cinema-info-lf span {
  display: block;
  max-width: 80%;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.cinema-box {
  font-size: 0;
}
.cinema-name {
  color: #191a1b;
  font-size: 15px;
}
.cinema-address {
  color: #797d82;
  font-size: 12px;
  margin-top: 5px;
}
.cinema-gpsAddress {
  display: block;
  font-size: 11px;
  color: #797d82;
  margin-top: 5px;
}
.cinema-gpsAddress strong {
  font-weight: 400;
  display: block;
  margin-top: 5px;
}
.price-fmt {
  font-size: 15px;
  color: #ff5f16;
  height: 0 !important;
  display: inline-table !important;
}
.price-fmt i {
  font-size: 11px;
  font-style: normal;
}
.upon {
  color: #ff5f16;
  font-size: 11px;
}
.active {
  color: #ff5f16 !important;
}
.mint-popup {
  background: #fff;
  position: fixed;
  top: 94px;
}
.filter-wrap {
  font-size: 0;
  width: 100vw;
}
.filter-wrap ul {
  list-style: none;
  padding: 10px 0 0;
  margin: 0 0 0 10px;
}
.filter-wrap .cityall li {
  font-size: 12px;
  display: inline-block;
  width: calc((100vw - 50px) / 4);
  padding-bottom: 15px;
  padding-right: 10px;
  height: 30px;
}
.filter-wrap .cityall li div {
  position: relative;
  color: #797d82;
  border-radius: 3px;
  text-align: center;
  height: 30px;
  line-height: 27px;
}
.filter-wrap .cityall div:after {
  content: " ";
  transform: scale(0.5);
  position: absolute;
  border: 1px solid rgba(210, 214, 220, 0.5);
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
}
.filter-list li {
  height: 44px;
  width: 100vw;
  padding: 0 15px;
  position: relative;
  color: #797d82;
}
.filter-list span {
  margin-left: 10px;
  font-size: 13px;
  letter-spacing: -0.2px;
  line-height: 44px;
}
.origh{
      color: #ff5f16!important;
}
.changecolor{
  border:1px solid #ff5f16
}
</style>