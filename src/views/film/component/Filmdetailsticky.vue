<template>
  <van-sticky @scroll="change">
  <div class="film-header" :class="{'show-film':fx}">
    <img
      @click="$router.go(-1)"
      class="goBack"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC"
      alt
    />
    <div class="title">{{info.name}}</div>
  </div>
  </van-sticky>
</template>
<script>
export default {
  props: ["info"],
  data() {
    return {
      fx: true
    };
  },
  methods: {
    change(info) {
    //   console.log(info);
      this.fx=info.isFixed
    }
  }
};
</script>
<style scoped>
.film-header {
  position: fixed;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  transition: all 0.3s ease;
  width: 100vw;
  height: 44px;
  z-index: 1;
}
.show-film {
  transition: all 0.3s ease;
  background-color: #fff;
  color: #191a1b;
}
.goBack {
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
}
.goBack img {
  width: 30px;
}
.title {
  font-size: 17px;
  line-height: 44px;
  width: 100vw;
  text-align: center;
}
</style>