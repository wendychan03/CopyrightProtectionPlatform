<template>
  <div>
    <el-table
      ref="worklist"
      :data="worklist"
      border
      :row-class-name="tableRowClassName"
      style="width: 800px; margin: 0 auto; top: 10px; text-align: center"
      :default-sort="{ order: 'descending' }"
    >
    <!-- :v-for="(item) in worklist" {{item}} -->
      <el-table-column prop="workname" label="作品名称" width="180" 
      >
      
      </el-table-column>

      <el-table-column prop="worktype" label="作品类型"> </el-table-column> -->

      <el-table-column
        align="center"
        sortable
        prop="uploadtime"
        label="上传时间"
        width="180"
      >
      </el-table-column>

      <el-table-column sortable prop="workid" label="审查情况" width="180">
      </el-table-column>

      <el-table-column prop="workabstract" label="摘要" width="220">
      </el-table-column>

      <!-- eslint-disable -->
      <!-- <el-table-column
        @row-click="showdetail(scope.row)"
        type="expand"
        fixed="right"
        label="查看详情"
        width="100"
      >
        eslint-disable
        <template slot-scope="scope">
          <div>本作品致力于xxxxxxxxxx，是xxxxxxxx</div>
          <div>作品名称：哈哈哈哈哈哈</div>
          <div>上传者：yry</div>
          <div>作品状态：已授权</div>
          <div>审查周期：6个月</div>
          <div>
            作品摘要：本作品是一个基于数字媒体的版权保护平台，特点在于能够主动追踪盗版作品，时刻给用户的作品以保护
          </div>
        </template>
      </el-table-column> -->
    </el-table>

    <el-pagination
      @current-change="handleCurrentChange"
      background
      layout="prev, pager, next"
      :total="100"
      :page-size="pageSize"
      :current-page="CurrentPage"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 3,
      worklist: [],
    };
  },

  methods: {
    handleCurrentChange(val) {
      this.$http
        .get("/api/user/showPageWorkList?uname=yry&pagesize=8&pagenum=1")
        .then((responce) => {
          console.log(responce.data.data);
          // var temp = [];
          for(var i=0;i<responce.data.data.length;i++){
            this.worklist.push(responce.data.data[i]);
          }
          // this.worklist = temp;
        });
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
