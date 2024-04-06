<template>
  
    <el-container  >
    
    <el-header >
      <div>
        <span>数字媒体主动追踪保护云平台</span>
      </div>
      <el-button type="Border Light" round @click="logout()" >退出</el-button>
        
      </el-header>
      
    <!-- 左侧菜单 -->  
    <el-container>
  
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '59px' : '200px'" style="background-color: #dbe9f4">
  
  
  
        <!-- 折叠菜单 -->
      <div class="toggle-button" @click="toggleCollapse">||||</div>
      <el-menu :default-openeds="['1','2','3','4']" :router="true" :collapse="isCollapse"
      :collapse-transition="false">


        <el-menu-item index="/FrontPage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>

      <el-menu-item index="/userHomepage">
        <i class="el-icon-s-custom"></i>
        <span slot="title">用户主页</span>
      </el-menu-item>
  
        <!-- <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-custom" style="margin-right: 15px"></i>用户主页</template>
            <el-menu-item index="/userHomepage">用户主页</el-menu-item>
           
        </el-submenu> -->
  
        <el-submenu index="3"> 
          <template slot="title"><i class="el-icon-folder-opened" style="margin-right: 15px"></i>作品登记与保护</template>
            <el-menu-item index="/TeSt">已上传作品</el-menu-item>
            <el-menu-item index="/UpLoad">上传作品</el-menu-item>
            <el-menu-item index="/CharTs">统计可视化</el-menu-item>
        </el-submenu>   
  
        <el-submenu index="4"> 
          <template slot="title"><i class="el-icon-message-solid" style="margin-right: 15px"></i>作品侵权报警</template>
            <el-menu-item index="/InfringingWorksTable">侵权消息列表</el-menu-item>
            <el-menu-item index="/InfringingWorkDetail">侵权详情</el-menu-item>

        </el-submenu>
  
      </el-menu>
    </el-aside>
  
  
  
      <el-main > 
        <!-- 主内容区 -->
        <router-view></router-view>
        
      </el-main>
     
    </el-container>
  </el-container>
  
  </template>
  
  <script>
  
  
  import store from '../store'
  
  export default {
    
      data() {
        const item = {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
          tableData: Array(20).fill(item),
          
          //是否折叠
          isCollapse:false,
  
          userinfoForm:{
            uname:''
          }
  
        }
      },
      
      methods:{
        //退出按钮
        // logout(){
        //   //从浏览器存储里读取用户名
        //   var uname=store.fetchUserName()
        //   //发起退出请求
        //   const {data : res } = this.$http.get('/api/user/logout?uname='+uname);
        //   console.log(res.code)
        //   if(res.code!=="200") return this.$message.error('退出失败！');
        //   this.$message.success('退出成功');     
        //   //清除UserName
        //   window.localStorage.removeItem('UserName');
        //   //转跳到首页登陆
        //   this.$router.push("/UserLogin")
        // },
        logout(){
          //从浏览器存储里读取用户名
          var uname=store.fetchUserName()

          //发起退出请求
          const {code : res } = this.$http.get('/api/user/logout?uname='+uname);
          console.log(res)
          if(res=="200") return this.$message.error('退出失败！');
          this.$message.success('退出成功');     
          //清除UserName
          window.localStorage.removeItem('UserName');
          //转跳到首页登陆
          this.$router.push("/UserLogin")
        },
  
        //菜单的折叠与展开
        toggleCollapse(){
          this.isCollapse=!this.isCollapse
  
        }
      }
  
    
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* color: #2c3e50; */
    color: #fff;
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
  