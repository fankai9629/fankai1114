<template>
  <div>
    <el-sticky :info="info"></el-sticky>
    <div class="film-header" v-show="hide">
      <img @click="show" class="goBack" src="@/assets/img/cha.png" alt />
      <div
        data-v-1ed7d58f
        class="img"
        style="background-image: url(&quot;https://pic.maizuo.com/usr/movie/0ed2a620968c169558d4591052afa38f.jpg&quot;);"
      ></div>
    </div>
    <div class="cinema-wrap">
      <div class="cinema-info">
        <div class="tags" @click="hidde">
          <div class="tag" v-for="(item,index) in info.services" :key="index">{{item.name}}</div>
          <i style="font-style:normal">></i>
        </div>
        <div class="address">
          <img width="14px" height="21px" src="@/assets/img/address.png" alt />
          <div class="address-des">{{info.address}}</div>
          <a href>
            <img width="17px" height="18px" src="@/assets/img/phone.png" alt />
          </a>
        </div>
      </div>
    </div>

    <div class="schedule-wrap">
      <!-- 電影模塊 -->
      <el-movie :lists="lists" v-if="lists" v-on:changeimg="changeimg" ref="mychild"></el-movie>
      <!--上映时间-->
      <router-view :time="time" :timeall="timeall" v-on:changeday="changeday"  v-if="time" v-show='!hide'></router-view>

      <!--影院吃吃喝喝介绍-->
      <div class="service-info" v-show="hide">
        <div class="services">
          <div class="detail clearfix" v-for="(item,index) in info.services" :key="index">
            <div class="left">{{item.name}}</div>
            <div class="right">{{item.description}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cinemadetail from "./Cinemadetail";
import ElSticky from "./Cinemassticky";
import ElMovie from "./Cinemamovie";
import Swiper from "swiper";
import { getcinemades,getmoviesall,getcinemafilms, getcinematime,getmovietimeother} from "@/api/cinema";
export default {
  data() {
    return {
      lists: [], //影院的電影票
      info: "", //影院
      hide: false,
      m: true,
      timeall: ' ',
      filmId: "",
      time: "",
      ggg: false,
      index:0,
      showDate:'',
      wanduzi:false
    };
  },
  components: {
    ElSticky,
    ElMovie
  },

  created() {
    this.getData(); //影院票列表
    this.getData1(); //影院列表
  },
  watch:{
    filmId:{
      handler(newVal){
        // console.log(newVal)
        this.$router.push({name:'Cinemadetail',params:{filmid:this.filmId,timeId:this.showDate}})
        if(this.wanduzi==false){
        this.finall();
        }
      }
    },immediate:true
  },
  methods: {
    changeimg(data){
      this.timeall =data  //cid filmid showdate index
      this.index = data[3]
      console.log(data)
      // 獲取電影時間

      getmoviesall(data).then(res=>{
        this.time = res.data.schedules   
      })
    },
    changeday(data){
        // console.log(data)
        var _data = data
        getmovietimeother(data).then(res=>{
          this.time = res.data.schedules 
          console.log(res)
        this.$router.push({name:'Cinemadetail',params:{filmid:_data[1],timeId:_data[2][_data[3]]}})

        })
    },
    getData() {
      getcinemades(this.$route.params.cinemaId)
        .then(res => {
          this.lists = res.data.films;
          console.log(res, "--電影列表--");
          this.filmId=res.data.films[0].filmId
          this.showDate=res.data.films[0].showDate[0]
          console.log(this.filmId)
        })
    },

    getData1() {
      getcinemafilms(this.$route.params.cinemaId).then(res => {
        // console.log(res.data.films[0].filmId);
        console.log(res.data.cinema, "--影院详情--");
        this.info = res.data.cinema; //
        // console.log(this.info);
      });
    },
    getDatatime() {
      let b = {};
      b.filmId = this.lists[this.index].filmId;
      b.cId = this.filmId;
      getcinematime(b).then(res => {
        this.time = res.data.schedules;
        // console.log(res, "--上线时间列表--");
      });
    },
    go(){},
    hidde() {
      this.hide = true;
    },
    show() {
      this.hide = false;
    },
    finall(){
      this.wanduzi=true
      setTimeout(()=>{
      this.$refs.mychild.changeimg()
      })
    }
  }
};
</script>
<style scoped>
.tags {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 15px;
  color: #ffb232;
  overflow: hidden;
  position: relative;
  padding: 5px 0 15px;
}
.tags:after {
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
.tag {
  position: relative;
  padding: 0 6px;
  margin: 0 2.5px;
  font-size: 10px;
}
.tag:after {
  content: " ";
  transform: scale(0.5);
  position: absolute;
  border: 1px solid #ffb232;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 1px;
}
.address {
  height: 50px;
  position: relative;
  display: flex;
  padding-left: 17px;
  -webkit-box-align: center;
  align-items: center;
}
.address-des {
  font-size: 14px;
  height: 20px;
  padding: 0 12px;
  -webkit-box-flex: 1;
  flex: 1;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.address-des:after {
  content: " ";
  position: absolute;
  right: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-right: 1px solid #ededed;
  color: #ededed;
  transform-origin: 100% 0;
  transform: scaleX(0.5);
}

.address a {
  height: 18px;
  padding: 0 25px;
}
.address a img {
  display: inherit;
}
.service-info {
  position: fixed;
  top: 88px;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #fff;
  overflow: auto;
  z-index: 301;
}
.services {
  padding: 0 30px;
}
.detail {
  margin-top: 20px;
  color: #797d82;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.left {
  position: relative;
  float: left;
  height: 100%;
  text-align: center;
  padding: 0 6px;
  margin: 0 2.5px;
  font-size: 10px;
  color: #ffb232;
}
.left:after {
  transform: scale(0.5);
  position: absolute;
  border: 1px solid #ffb232;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
  border-radius: 1px;
  content: " ";
}
.right {
  font-size: 12px;
  padding: 0 0 0 70px;
  line-height: 15px;
}
.film-header {
  font-size: 0;
  position: fixed;
  top: 0;
  height: 44px;
  line-height: 44px;
  padding-left: 15px;
  z-index: 303;
  background: #fff;
}
.goBack {
  vertical-align: middle;
  width: 15px;
  height: 17px;
}

.triangle {
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  top: 5px;
}

.schedule-wrap {
  position: relative;
}

</style>