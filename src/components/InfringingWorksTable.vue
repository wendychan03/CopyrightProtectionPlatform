<template>
    <div> 
      
<!-- 导航 -->
<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router="true" @select="handleSelect">
  <el-menu-item index="/InfringingWorksTable" route="../InfringingWorksTable"><i class="el-icon-document"></i>侵权作品</el-menu-item>
  <el-menu-item index="/StatisticalGraph" route="../StatisticalGraph"><i class="el-icon-pie-chart"></i>侵权情况视图</el-menu-item>
</el-menu> -->


 <!-- 面包屑 -->
<!-- <div>
<el-breadcrumb separator-class="el-icon-arrow-right" >
  <el-breadcrumb-item >侵权报警</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/InfringingWorksTable' }">侵权作品列表</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/InfringingWorkDetail' }">侵权作品详情</el-breadcrumb-item>
</el-breadcrumb>
</div> -->

<!-- 卡片 -->
<el-card>
    
<!-- 表格 -->
      
  <el-table
    :data="AffendingWorkList1"
    style="width: 100%"
    border>
    <!-- 索引列 -->
    <el-table-column type="index"></el-table-column>
    
    <!-- 日期列 -->
    <el-table-column
      label="日期"
      >
      <template slot-scope="scope">
        
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>

    <!-- 作品名列 -->
    <el-table-column
      label="疑侵权作品名"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
      
    </el-table-column>
    <!-- 侵权作品链接列 -->
    <el-table-column
      label="侵权作品详情"
      >
      <template slot-scope="scope">
        <el-button
        style="margin-left: 10px"
          size="mini"  
          @click="goDetail(scope.row.id)">查看详情</el-button>
      </template>
      
    </el-table-column>


    <el-table-column label="操作">
      <template slot-scope="scope">
        <!-- <el-button
        style="margin-left: 10px"
          size="mini"  
          @click="handle">查看详情</el-button> -->
          
        <el-button
          size="mini"
          type="danger"
          @click="removeAffendingWorkById(scope.row.id)">删除</el-button>
          <!-- 原click函数handleDelete(scope.$index, scope.row) -->
        </template>
    </el-table-column>
  </el-table> 

  <!-- 分页 -->

  <!-- @current-change="handleCurrentChange"：点击不同页码，触发事件handleCurrentChange -->
  <el-pagination
      
      @current-change="handleCurrentChange"
      
      :current-page.sync="queryInfo.pagenum"
      :page-size="queryInfo.pageSize"
      layout="total,prev, pager, next, jumper"
      :total="total">
    </el-pagination>

</el-card>



</div>
</template>


<script>

import store from '../store'

  export default {
    data() {
      return {
        AffendingWorkList1: [{
          id:'1',
          date: '2016-05-02',
          name: '侵权作品1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:'2',
          date: '2016-05-04',
          name: '侵权作品2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id:'3',
          date: '2016-05-01',
          name: '侵权作品3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id:'4',
          date: '2016-05-03',
          name: '侵权作品4',
          address: '上海市普陀区金沙江路 1516 弄'
        }],

        //获取侵权作品列表的参数对象
        queryInfo:{
          uname:store.fetchUserName(),
          pagenum:1,//当前页码
          pageSize:5,//每一页显示的数据
        },
        
        affendingworklist:[],
        
        total:4

        




      }

    },
    // created:{
    //   // this.getAffendingWorkList()

    // },

    methods: {
      // handleEdit(index, row) {
      //   console.log(index, row);
      // },
      // handleDelete(index, row) {
      //   console.log(index, row);
      // },

      // page(currentPage){
      //   alert(currentPage)

      // },

   

      async getAffendingworkList(){
        const {data :res }=await this.$http.get(
          '/user/showPageWorkList',
          {paramas : JSON.stringify(this.userinfoForm)}
        )

        if (res.meta.code==400){
          return this.$message.error('用户不存在')
        }
        if (res.meta.code==401){
          return this.$message.error('请先登陆'),
          this.$router.push("/userHomepage")
        }
        this.affendingworklist=res.data.worklist.affendingwork
        this.total=res.data.totalpage
      },

      // 监听 页码值改变 的事件
      handleCurrentChange(newPage){
        
        this.queryInfo.pagenum=newPage
        // 监听到当前页码改变就返回最新页码给queryInfo.pagenum
        this.getAffendingworkList()
        // 重新调用函数


      },
      

      // goDetail(workID){
      //   console.log(workID)
      //   //this.$router.push("/InfringingWorkDetail")

      //   this.$router.push({ 
      //     name:'InfringingWorkDetail',
      //     query:{
      //       id:{workID}
      //     }
      //    })
      //       // 3. params传参
      //           // this.$router.push({ name: 'InfringingWorkDetail', params: { id: '1' ,name:'hello'} })
      //          //需要传的数据可通过params添加

      //         // 跳转到指定url路径，并想history栈中添加一个记录，点击后退会返回到上一个页面
      //         // this.$router.replace({name:'InfringingWorkDetail',params: {id:'1'}}) // 只能用 name
      //         // 路由配置 path: "/home/:id" 或者 path: "/home:id" ,
      //         // 不配置path ,第一次可请求,刷新页面id会消失
      //         // 配置path,刷新页面id会保留
      //         // html 取参 $route.params.id    script 取参 this.$route.params.id
      //       },

    //   goDetail(workID) {
    //   console.log(workID);
    //   workID=JSON.stringify(workID);
    //   this.$router.push({
    //     name: 'InfringingWorkDetail',
    //     query: {
    //       id: workID
          
    //     }
    //   });
    // },     
    goDetail(workID) {
  console.log(workID);
  this.$router.push({
    name: 'InfringingWorkDetail',
    params: {
      id: workID
    }
  });
},

  // 根据id删除侵权作品
          async removeAffendingWorkById(){
            //括号()里要传入id

            // 弹框询问用户是否删除
            const confirmResult = await this.$confirm(
              '此操作将删除该作品信息，请您确认该作品未侵权','提示',
              {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }
                ).catch(err=> err)
                if (confirmResult!='confirm') {
                  return this.$message.info('已取消删除')
                }

        // this.$http.delete.delete('')
        // 这里写删除操作

          },

    

    }
  }
</script>

<style > 


</style>