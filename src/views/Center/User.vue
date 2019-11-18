<template>
  <div>
    <div id="main">
      <div class="header">
        <div class="header-left">
          <img src="@/assets/img/back.png" alt />
        </div>
        <div class="header-title">我的资料</div>
      </div>
      <div class="main"></div>
    </div>
  </div>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  height: 44px;
  font-size: 0%;
  width: 100%;
}
.header:after {
  content: "";
  width: 100%;
  border-bottom: 1px solid #ededed;
  display: block;
}
.header-left {
  float: left;
  min-width: 15%;
}
.header-left img {
  margin-top: 4px;
  width: 30px;
  height: 35px;
}
.header-title {
  width: 85%;
  font-size: 17px;
  line-height: 44px;
  text-align: center;
}
</style>