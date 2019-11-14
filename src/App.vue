<template>
<div>
    <router-view></router-view> 
     <el-footer></el-footer> 
    </div>
</template>
<script>
import ElFooter from '@/views/footer/footer'
export default {
    components:{
      ElFooter,
    }
}
</script>
<style >
*{
  margin :0;
  padding: 0
}
h3{
  font-weight: normal
}
  html{
    font-size: 13.333333vw;
  }
  div{
    box-sizing: border-box;
  }
</style>
