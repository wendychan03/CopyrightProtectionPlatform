<template>
  
  <router-view> </router-view>
</template>

<script>




export default {
  
    data() {
      
    },

    methods:{
      
    }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-header {
    background-color: #b3c9eb;
    color: #fff;
    line-height: 60px;
    display: flex;
    /* 左右贴边对齐 */
    justify-content: space-between;
    /* 按钮上下居中 */
    align-items: center;
    font-size: 20px;

  }
  
  .el-aside {
    color: #333;
    
  }
/* 菜单折叠 */
  .toggle-button{
    background-color:#F5F5F5;
    font-size: 10px;
    line-height: 24px;
    color: #333;
    text-align: center;
    letter-spacing: 0.3em;
    cursor: pointer;

  }

  
</style>
