<template>
    <div> 
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true" @select="handleSelect">
  <el-menu-item index="/InfringingWorksTable" route="../InfringingWorksTable"><i class="el-icon-document"></i>侵权作品</el-menu-item>
  <el-menu-item index="/StatisticalGraph" route="../StatisticalGraph"><i class="el-icon-pie-chart"></i>侵权情况视图</el-menu-item>
</el-menu>
        <p>graph</p>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style scoped> 
</style>
