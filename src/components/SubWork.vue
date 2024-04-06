<template>
  <el-table
    ref="subwork"
    :data="worklist"
    border
    :row-class-name="tableRowClassName"
    style="width: 800px; margin: 0 auto; top: 10px; text-align: center"
    :default-sort="{ order: 'descending' }"
  >
    <el-table-column prop="workname" label="作品名称" width="180">
    </el-table-column>
    <el-table-column prop="worktype" label="作品类型"> </el-table-column>
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
    <el-table-column
      @row-click="showdetail(scope.row)"
      type="expand"
      fixed="right"
      label="查看详情"
      width="100"
    >
    <!-- eslint-disable -->
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
    </el-table-column>
  </el-table>
</template>


<script>
export default {
  data() {
    return {
      
      // worklist:{
      //     uploadtime: "",
      //     workname: "",
      //     worktype: "",
      //     workabstract: "",
      //     workid:""
    // },
    
      worklist: [
        {
          uploadtime: "2020-04-01",
          workname: "美丽校园",
          worktype: "图片",
          workid: "4",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-05-01",
          workname: "可爱猫猫",
          worktype: "图片",
          workid: "5",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-09-01",
          workname: "不要温顺地走进那黑夜",
          worktype: "文本",
          workid: "9",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-06-01",
          workname: "xxxxxxxx",
          worktype: "xxxxxxx",
          workid: "1",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-10-01",
          workname: "xxxxxxxx",
          worktype: "xxxxxxx",
          workid: "0",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-07-01",
          workname: "xxxxxxxx",
          worktype: "xxxxxxx",
          workid: "3",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-12-01",
          workname: "xxxxxxxx",
          worktype: "xxxxxxx",
          workid: "8",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
        {
          uploadtime: "2020-11-01",
          workname: "xxxxxxxx",
          worktype: "xxxxxxx",
          workid: "8",
          workabstract: "本作品致力于xxxxxxxxxx，是xxxxxxxx",
        },
      ],
    };
  },
   
  methods: {
    // eslint-disable-next-line
    tableRowClassName({ row, rowIndex }) {
      if (row.affendingnum > 5) {
        return "warning-row";
      } else if (row.affendingnum <= 1) {
        return "success-row";
      }
    },
    showdetail(row) {
      row.expanded = !row.expanded;
      this.$refs.multipleTable.toggleRowExpansion(row, row.expanded);
    },
    // showtable() {
    //   var self = this;
    //   this.$axios.get("/api/user/showWorkList?uname=abdc").then(function (response) {
    //     self.worklist = response.data.tableVideo;
    //     console.log(this.worklist);
    //   });
    // },
  },
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>