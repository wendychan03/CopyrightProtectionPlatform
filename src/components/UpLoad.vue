<template>
  <div class="contain">
    <div
      id="left"
      style="text-align: center; width: 475px; float: left; position: relative"
    >
      <el-button type="text" @click="dialogVisible = true"
        >点击打开 Dialog</el-button
      >
      <!-- <div id="top">
        <div class="nihong">选择文件</div>
      </div> -->
      <!--服务器端口-->
      <!-- 这里本来写的是<el-upload></el-upload> -->
    </div>

    <div style="width: 475px; float: right; position: relative">
      <div id="top2">
        <div class="nihong" style="">作品信息</div>
      </div>
      <!-- :rules="rules" -->
      <el-dialog title="上传作品信息" :visible.sync="dialogVisible" width="80%">
        <!-- :before-close="handleClose" -->
        <span>这是一段信息</span>>
        <el-form
          label-width="120px"
          size="small"
          label-position="left"
          :model="workinfoform"
          ref="form"
        >
          <el-form-item label="作品名称" prop="workname">
            <el-input
              type="textarea"
              v-model="workinfoform.workname"
            ></el-input>
          </el-form-item>

          <el-form-item label="作品类型" prop="worktype">
            <el-input
              type="textarea"
              v-model="workinfoform.worktype"
            ></el-input>
          </el-form-item>

          <el-form-item label="用户id" prop="ownerid">
            <el-input
              type="textarea"
              v-model="workinfoform.ownerid"
            ></el-input>
          </el-form-item>

          <el-form-item label="审查平台" prop="platform">
            <el-input
              type="textarea"
              v-model="workinfoform.platform"
            ></el-input>
          </el-form-item>

          <el-form-item size="medium" label="作品摘要" prop="workabstract">
            <el-input
              v-model="workinfoform.workabstract"
              style="height: 100px"
              type="textarea"
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-upload
              accept="text/plain"
              action="/work/add"
              drag
              multiple
              :headers="headers"
              :auto-upload="false"
              :file-list="fileList"
              :on-change="handleChange"
            >
              <!-- drag
              multiple 
              :before-remove="beforeRemove"
              -->
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
            </el-upload>
            <el-button type="primary" @click="submitForm('workinfoform')"
              >上传列表</el-button
            >
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="confirmUpload('workinfoform')"
              >立即创建表单</el-button
            >
            <el-button @click="resetForm('workinfoform')">重置</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      headers: {
        "Content-Type": "multipart/form-data",
      },
      workinfoform: {
        workname: "",
        worktype: "",
        
        platform: "",
        workabstract: "",
        ownerid:"",
      },
      //intervaltime: "",
      dialogVisible: false,
      rules: {
        workname: [
          { required: true, message: "请输入活动名称", trigger: "string" },
          { max: 20, message: "长度在 20 个字符以内", trigger: "string" },
        ],
        worktype: [
          { required: true, message: "请选择作品类型", trigger: "string" },
          { max: 20, message: "长度在 20 个字符以内", trigger: "string" },
        ],
        intervaltime: [
          { required: true, message: "请选择审查周期", trigger: "string" },
          { max: 20, message: "长度在 20 个字符以内", trigger: "string" },
        ],
        platform: [
          { required: true, message: "请选择审查平台", trigger: "string" },
          { max: 20, message: "长度在 20 个字符以内", trigger: "string" },
        ],
        workabstract: [
          { required: true, message: "请输入作品摘要", trigger: "string" },
          { max: 75, message: "长度在 75 个字符以内", trigger: "string" },
        ],
      },
      workcategories: [
        {
          value: "picture",
          label: "图片作品",
        },
        {
          value: "text",
          label: "文字作品",
        },
        {
          value: "sound",
          label: "音频作品",
        },
        {
          value: "film",
          label: "影视作品",
        },
      ],
      workinterval: [
        {
          value: "daily",
          label: "每天",
        },
        {
          value: "weekly",
          label: "每周",
        },
        {
          value: "monthly",
          label: "每月",
        },
        {
          value: "seasonly",
          label: "每季度",
        },
      ],
    };
  },

  methods: {
    submitForm(workinfoform) {
      //console.log(this.workinfoform);
      this.$refs[workinfoform].validate((valid) => {
        if (valid) {
          this.$axios.post("/api/work/add", this.rules).then(function (resp) {
            if (resp.data == "successful") {
              this.$message("添加成功");
            }
          });
        }
      });
      
    },

    resetForm(workinfoform) {
      this.$refs[workinfoform].resetFields();
    },

    handleChange(file, fileList) {
      //文件数量改变
      this.fileList = fileList;
    },
    
    confirmUpload() {//workinfoform
      //确认上传
      // this.$refs[workinfoform].validate((valid) => {
      //   if (valid) {

      var param = new FormData();

      //console.log(JSON.stringify(this.workinfoform));
      //   }
      // }),
      this.fileList.forEach((val, index) => { // eslint-disable-line no-unused-vars
        param.append("file", val.raw);
      });
      let formJson = JSON.stringify(this.workinfoform);
      
      const formblob = new Blob([formJson], {
        type: "application/json",
      });
      param.append("workinfoform", formblob);
      
      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      this.$http.post("/api/work/add", param, config).then((responce) => {
        console.log(responce)
      });

      this.$message({
        message: "上传成功！",
        duration: 1000,
      });
    },
  },
};
</script>


<style scoped>
.nihong {
  text-align: center;
  color: white;
  text-shadow: 0px 0px 15px #00cccc, 0px 0px 15px #00cccc, 0px 0px 15px #00cccc;
}

.contain {
  top: 50px;
  margin: 0 auto;
  position: relative;
  border: 10px solid rgb(40, 37, 37);
  border-radius: 25px;
  background-color: rgb(40, 37, 37);
  height: 550px;
  width: 1000px;
  min-height: 80px;
}

.upload {
  width: 250px;
  height: 300px;
}
</style>