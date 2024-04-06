<template>

  <!-- 采用两栏布局 -->
  <div class="flex-container">
    <!-- 左边部分 -->
    <div class="left">

      <div class="left-item1">
          <!-- 走马灯  -->
          <div class="pic_Carousel">
            <el-carousel indicator-position="outside">
              <el-carousel-item v-for="(item, index) in urls" :key="index">
                <img v-bind:src="item.url" style="width: 100%; height: 100%" />
              </el-carousel-item>
            </el-carousel>
          </div>
      </div>

      <div class="left-item2">
        <el-card class="box-card">
          <el-divider content-position="left"><h2>最新发布</h2></el-divider>
          <el-link href="http://www.rmzxb.com.cn/c/2020-12-24/2745033.shtml"
            ><h3>数字版权如何保护?技术或成突破口——人民政协网</h3></el-link>
          <el-link
            href="https://baijiahao.baidu.com/s?id=1733120461740380832&wfr=spider&for=pc"
            ><h3>
              数字版权刑法保护重在“精准打击”_中华人民共和国最高人民检察院
            </h3></el-link
          >
          <el-link
            ><h3>为什么选择我们？因为我们将为捍卫您的原创主动出击</h3></el-link
          >
          <el-link
            ><h3>
              “版权保护，绝不能止于被动保护”————数字媒体主动追踪保护平台
            </h3></el-link
          >
          <el-link
            ><h3>
              新时代版权保护：主动搜查、数字水印、数字指纹、哈希学习
            </h3></el-link
          >
        </el-card>
      </div>
    </div>

   <!-- 右边部分 -->
    <div class="right">
      <div class="right-top-third">
      
          <div class="custom-calendar">
            <el-calendar>
            </el-calendar>
          </div> 
        
      </div>

      <div class="right-bottom-two-thirds">
        <el-card class="box-card">
          <el-divider content-position="left"><h3>平台通告</h3></el-divider>
          <el-link><h3>近期会员优惠放送<br /></h3></el-link>
          <el-link><h3>关于4月作品保护数统计<br /></h3></el-link>
          <el-link><h3>关于会员政策的修改<br /></h3></el-link>
          <el-link><h3>关于4月28日版本更新说明<br /></h3></el-link>
          <el-link><h3>关于3月用户增长<br /></h3></el-link>
        </el-card>
      </div>
      
    </div>
  </div>

</template>




<script>
import store from "../store";

export default {
  data() {
    return {
      //日历
      value: new Date(),

      //这是登陆表单的数据绑定对象
      loginForm: {
        uname: "",
        password: "",
      },

      //这是表单的认证规则对象
      loginForm_rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },

      // 走马灯图片
      urls: [
        { url: require("../assets/ad1.png") },
        { url: require("../assets/ad1.png") },
        { url: require("../assets/ad1.png") },
        { url: require("../assets/ad1.png") },
      ],
      // 用户注册表单
      dialogTableVisible: false,
      dialogFormVisible: false,
      userCreateForm: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        uname: "",
        password: "",
      },
      formLabelWidth: "150px",
      //这是用户注册的认证规则对象
      userCreateForm_rules: {
        firstName: [{ required: true, message: "请输入名", trigger: "blur" }],
        lastName: [{ required: true, message: "请输入姓", trigger: "blur" }],
        phone: [{ required: true, message: "请输入电话", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        uname: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    login() {
      //console.log(JSON.stringify(this.loginForm))
      console.log(JSON.stringify(this.loginForm));
      //validate：回调函数，拿到验证结果
      this.$refs.loginRef.validate(async (valid) => {
        if (!valid) return; //如果为false,不发起请求，直接return

        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        //发起登陆请求
        const { data: res } = await this.$http.post(
          "/api/user/login",
          JSON.stringify(this.loginForm),
          config
        );
        //const {data :res } = await this.$http.post('/api/user/login',this.loginForm);
        // async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
        console.log(res);

        if (res.code == "400")
          return this.$message.error("用户不存在，登陆失败！");
        if (res.msg == "is black")
          return this.$message.error("您在黑名单内，登陆失败！");
        if (res.msg == "wrong password")
          return this.$message.error("密码错误，登陆失败！");

        this.$message.success("登陆成功");

        //如何获取token res.data
        //将用户信息保存到session中,只在网站打开期间生效
        //window.sessionStorage.setItem("token",res.data.token);
        //window.sessionStorage.removeItem("token") 删除单个
        //window.sessionStorage.clear() //全部删除

        //把用户名储存到浏览器
        store.saveUserName(this.loginForm.uname);
        //5.登录成功之后,跳转到/home页面中
        this.$router.push("/userHomepage");
        this.$message.success("欢迎你", store.fetchUserName());
      });
    },

    createUser() {
      //validate：回调函数，拿到验证结果
      this.$refs.userCreateRef.validate(async (valid) => {
        if (!valid) return; //如果为false,不发起请求，直接return

        //发起创建用户请求
        console.log(JSON.stringify(this.userCreateForm));
        //console.log(this.userCreateForm)
        const { data: res } = await this.$http.post(
          "/api/user/register",
          JSON.stringify(this.userCreateForm)
        );
        //const {data:res} = await this.$http.post('/api/user/register',this.userCreateForm);
        //const {data:res}把data属性解构出来，重命名为res

        console.log(res);
        // async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
        if (res.code == "403")
          return this.$message.error("用户名重复，注册失败！");
        this.$message.success("注册成功");
        this.dialogFormVisible = !this.dialogFormVisible;
      });
    },
  },
};
</script>
<style scoped>
/* // flex布局 */
.flex-container{
  margin: 0 auto;
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
  display: flex;
  
}

.left{
  padding: 5px;
  /* border: solid;
  background-color:bisque; */
  flex: 3;
  flex-direction: column;
  height: 100%;
}

.left-item1{
  padding: 5px;
  /* border: solid;
  background-color:aqua; */
  flex-direction: column;
  height: 45%;

}

.left-item2{
  padding: 5px;
  /* border: solid;
  background-color:aqua; */
  flex-direction: column;
  height: 55%;

}


.right{
  padding: 5px;
  /* border: solid;
  background-color:bisque; */
  flex: 2;
  height: 100%;
}

.right-item{
  padding: 5px;
  /* border: solid;
  background-color:aqua; */

}

.right-top-third {
  padding: 5px;
  /* border: solid;
  background-color:aqua; */
  flex-direction: column;
  height: 45%;
}

.right-bottom-two-thirds {
  padding: 5px;
  /* border: solid;
  background-color:aqua; */
  flex-direction: column;
  height: 55%;
}

.custom-calendar /deep/ .el-calendar-table .el-calendar-day{
 height: 30px;
 
}

</style>
