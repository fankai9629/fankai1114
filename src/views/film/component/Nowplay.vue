<template >
  <div class="film-list-content">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多电影了" @load="onLoad">
      <ul class="film-list-group">
        <!-- 一个列表项start -->
        <li class="film-list-item" v-for="(item) in list" :key="item.filmId">
          <router-link :to="{name:'filmDetail',params:{id:item.filmId}}">
            <div class="film-list-item-pic padding">
              <img :src="item.poster"/>
            </div>
            <div class="film-list-item-desc">
              <h3 class="item-desc-name">
                <span class="name">{{item.name}}</span>
                <span class="is-3d">{{item.item.name}}</span>
              </h3>
              <p class="item-desc-grade info-col">
                <span>{{item.grade?'观众评分':' '}}</span>
                <span class="grade">{{item.grade?' '+item.grade:' '}}</span>
              </p>
              <p class="item-desc-actors info-col">
                <label>主演：</label>
                <span>{{item.actors | getArrayValByKey}}</span>
              </p>
              <p class="item-desc-times info-col">
                <label>{{item.nation}}</label> |
                <span>{{item.runtime}}分钟</span>
              </p>
            </div>
            <div class="film-list-item-action padding">
              <span href class="buy">购票</span>
            </div>
          </router-link>
        </li>
      </ul>
    </van-list>
  </div>
</template>
<script>
import axios from "axios";
import { getFilmList } from "@/api/film.js";
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageInfo: {
        pageNum: 1
      },
      total: 0
    };
  },
  methods: {
    getData() {
      getFilmList({ pageNum: this.pageInfo.pageNum }).then(result => {
        if (result.status == 0) {
          this.list = this.list.concat(result.data.films);
          this.total = result.data.total;
          this.loading = false;
          this.pageInfo.pageNum++;
          // console.log(this.list.length,this.total)
          // console.log(this.finished,this.loading)
          // console.log(this.pageInfo.pageNum)
          if (this.list.length === this.total) {
            this.finished = true;
          }
        }
      });
    },
    onLoad() {
      this.getData();
    }
  }
};
</script>
<style scoped>
.film-list-content{
  padding-bottom: 0.98rem;
  background:#f4f4f4

}
.van-list__finished-text{
  background-color: #ededed
}
.ull {
  list-style: none;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 0;
  margin-top: 0;
}
.ull li {
  padding: 15px 15px 15px 0;
  height: 94px;
  position: relative;
}
.ull a {
  display: flex;
  -webkit-box-pack: start;
  align-items: center;
}
.lazy-img {
  width: 66px;
  height: 94px;
  background: rgb(249, 249, 249);
  float: left;
  display: block;
}
.lazy-img img {
  width: 100%;
  border-radius: 2px;
}
.nowPlayingFilm-info {
  width: calc(100% - 116px);
  padding: 0 10px;
  float: left;
}
.nowPlayingFilm-info div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: left;
}
.nowPlayingFilm-info div span {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
.nowPlayingFilm-buy {
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: relative;
}
span {
  text-decoration: none;
}

.film-list-content {
  /* margin-top:1.86rem; */
  background: #fff;
}
.film-list-group {
  padding: 0 0.3rem;
}
.film-list-item {
  height: 1.88rem;
  padding: 0.3rem 0;
  position: relative;
}
.film-list-item:after {
  content: " ";
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 100%;
  -ms-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.film-list-item > a {
  display: flex;
  width: 100%;
  align-items: center;
}
.film-list-item-pic {
  width: 1.32rem;
  height: 1.88rem;
  flex: none;
  overflow: hidden;
}
.padding {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.film-list-item-pic > img {
  width: 100%;
}
.film-list-item-desc {
  flex: 1;
  padding: 0 0.2rem;
  max-width: calc(100% - 2.32rem);
  box-sizing: border-box;
}
.item-desc-name {
  font-size: 0.32rem;
}
.item-desc-name .name {
  color: #191a1b;
  margin-right: 0.1rem;
  font-size: 16px;
}
.item-desc-name .is-3d {
  font-size: 0.18rem;
  color: #fff;
  background-color: #d2d6dc;
  height: 0.28rem;
  line-height: 0.28rem;
  padding: 0 2px;
  border-radius: 2px;
}
.film-list-item-desc .info-col {
  font-size: 0.26rem;
  color: #797d82;
  margin-top: 0.12rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.item-desc-grade .grade {
  color: #ffb232;
  font-size: 0.28rem;
  height: 21px;
}
.film-list-item-action {
  width: 1rem;
  flex: none;
  height: 1.1rem;
  font-size: 0;
}
.film-list-item-action .buy {
  display: block;
  box-sizing: border-box;
  line-height: 0.5rem;
  height: 0.5rem;
  width: 1rem;
  color: #ff5f16;
  font-size: 0.26rem;
  text-align: center;
  position: relative;
  border: 1px solid #ff5f16;
  border-radius: 2px;
}
span{
    font-size: 13px;
  }
</style>
