<template>
  <div class="main">
    <div class="header">
      <div class="left">
        <img @click="$router.go(-1)" src="@/assets/img/cha.png" alt/>
      </div>
      <div class="title">当前城市-{{$store.state.cityName}}</div>
    </div>
    <div style="height:50px"></div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="输入城市名或则拼音"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div class="recommend-city">
      <div class="gprs-city">
        <div class="city-index-title">GPS定位你所在的城市</div>
        <ul>
          <li @click="nowcity">
            <div>{{nowcityName}}</div>
          </li>
        </ul>
      </div>
      <div class="hot-city">
        <div class="city-index-title">热门城市</div>
        <ul>
          <li v-for="item in ishot" :key="item.cityId" @click="hotcity([item.name,item.cityId])">
            <div :title="item.cityId">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </div>
    <van-index-bar>
      <!-- template是一个空标签，当指令要控制多个元素时可以借助于此标签  -->
      <template v-for="(item,key) in words">
        <van-index-anchor :index="item" :key="key" />
        <van-cell
          :title="city.name"
          v-for="city in lists2[item]"
          :key="city.cityId"
          @click="choice([city.name,city.cityId])"
        />
      </template>
    </van-index-bar>
    <!-- <mz-location @gps="getCityName($event)"></mz-location> -->
  </div>
</template>
<script>
// import MzLocation from "@/components/Location";
import { getCityLists } from "@/api/city.js";
import location from "@/utils/location";
export default {
  components: {
    // MzLocation
  },
  data() {
    return {
      cityName: "",
      lists: [],
      lists2: {},
      words: [],
      ishot: [],
      value: null,
      nowcityId: "",
      nowcityName: "",
      val:''
    };
  },
  created() {
    this.init();
    location.initMap("ggg", res => {
      res = res.substring(0, res.length - 1);
      this.nowcityName = res;
      // this.$store.commit("setCityName", res);
    });
  },
  watch: {
    lists: {
      handler() {
        if (this.lists.length == 0) {
          return;
        }
        let result = {};
        this.lists.forEach(item => {
          let key = item.pinyin.charAt(0).toUpperCase();
          if (!result[key]) {
            result[key] = [];
            this.words.push(key);
          }
          result[key].push(item);
        });
        this.lists2 = result;
        this.words.sort();
      },
      deep: true
    }
  },
  methods: {
    init() {
      getCityLists().then(res => {
        console.log(res, "----------");
        this.lists = res.data.cities;
        this.ishot = res.data.cities.filter(item => item.isHot == 1);
        this.nowcityId = res.data.cities.filter(
          item => item.name == this.$store.state.cityName + "市"
        );
      });
    },
    getCityName(name) {
      this.cityName = name;
      this.getCityIdByName(name);
    },
    choice(data) {
      this.$store.commit("setCityName", data[0]);
      this.$store.commit("setCityId", data[1]);
      this.$router.go(-1);
    },
    nowcity() {
      this.$store.commit("setCityName", this.nowcityName);
      this.$store.commit("setCityId", this.nowcityId);
      this.$router.go(-1);
    },
    hotcity(data) {
      this.$store.commit("setCityName", data[0]);
      this.$store.commit("setCityId", data[1]);
      this.$router.go(-1);
    },
    onCancel(e) {

    },

    onSearch(e) {

  }
  }
}
</script>
<style scoped>
.main {
  background-color: #f4f4f4;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  z-index: 300;
  font-size: 0;
  background-color: #fff;
}
.left {
  width: 14%;
  height: 44px;
  float: left;
}
.left img {
  margin-left: 10px;
  margin-top: 15px;
  width: 16px;
  height: 16px;
}
.title {
  height: 44px;
  line-height: 44px;
  width: 72%;
  text-align: center;
  font-size: 17px;
  color: #191a1b;
  float: left;
  text-align: center;
}
.recommend-city {
  background-color: #fff;
  padding-left: 15px;
  padding-top: 15px;
}
.city-index-title {
  font-size: 13px;
  color: #797d82;
  margin-bottom: 10px;
}
.recommend-city ul {
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-content: center;
  flex-wrap: wrap;
}
.recommend-city li {
  width: calc((100vw - 33px) / 3);
  text-align: center;
  padding-bottom: 15px;
  box-sizing: border-box;
  float: left;
}
.recommend-city li div {
  height: 30px;
  background-color: #f4f4f4;
  line-height: 30px;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 7.5px;
  font-size: 14px;
  color: #191a1b;
}
</style>