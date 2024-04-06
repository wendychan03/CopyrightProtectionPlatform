<template>
  <div  class="page-background">

    <div class="login_container">
      <!-- 登陆 -->

      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        class="login_avatar"
      ></el-avatar>

      <el-form
        :model="loginForm"
        :rules="loginForm_rules"
        ref="loginRef"
        label-width="0px"
        class="login_form"
      >
        用户名
        <el-form-item prop="uname">
          <!-- label="用户名" -->
          <el-input
            v-model="loginForm.uname"
            icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>

        密码
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            icon="el-icon-lock"
          ></el-input>
        </el-form-item>
      </el-form>

      <!-- <el-form-item class="login_botton"> -->
      <el-row class="login_botton">
        <el-button type="primary" round @click="login">登陆</el-button>

        <!-- 注册Form -->
        <el-button type="primary" round @click="dialogFormVisible = true"
          >注册</el-button
        >
<!-- 
        <el-dialog
          title="填写信息以注册账户"
          :visible.sync="dialogFormVisible"
          :center="true"
          class="custom-dialog"
        >
          <el-form
            :model="userCreateForm"
            :rules="userCreateForm_rules"
            ref="userCreateRef"
          >
            <el-form-item
              label="姓"
              :label-width="formLabelWidth"
              prop="lastName"
            >
              <el-input
                v-model="userCreateForm.lastName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="名"
              :label-width="formLabelWidth"
              prop="firstName"
            >
              <el-input
                v-model="userCreateForm.firstName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="手机"
              :label-width="formLabelWidth"
              prop="phone"
            >
              <el-input
                v-model="userCreateForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="邮箱"
              :label-width="formLabelWidth"
              prop="email"
            >
              <el-input
                v-model="userCreateForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="用户名"
              :label-width="formLabelWidth"
              prop="username"
            >
              <el-input
                v-model="userCreateForm.uname"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              :label-width="formLabelWidth"
              prop="password"
            >
              <el-input
                v-model="userCreateForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="createUser">确 定</el-button>
          </div>
        </el-dialog> -->
      </el-row>
    </div>

    <el-dialog
          title="填写信息以注册账户"
          :visible.sync="dialogFormVisible"
          :center="true"
        >
          <el-form
            :model="userCreateForm"
            :rules="userCreateForm_rules"
            ref="userCreateRef"
          >
            <el-form-item
              label="姓"
              :label-width="formLabelWidth"
              prop="lastName"
            >
              <el-input
                v-model="userCreateForm.lastName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="名"
              :label-width="formLabelWidth"
              prop="firstName"
            >
              <el-input
                v-model="userCreateForm.firstName"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="手机"
              :label-width="formLabelWidth"
              prop="phone"
            >
              <el-input
                v-model="userCreateForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="邮箱"
              :label-width="formLabelWidth"
              prop="email"
            >
              <el-input
                v-model="userCreateForm.email"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="用户名"
              :label-width="formLabelWidth"
              prop="uname"
            >
              <el-input
                v-model="userCreateForm.uname"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              :label-width="formLabelWidth"
              prop="password"
            >
              <el-input
                v-model="userCreateForm.password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="createUser">确 定</el-button>
          </div>
        </el-dialog>

  </div>
</template>
<script>
import store from "../store";

export default {
  data() {
    return {
      //这是登陆表单的数据绑定对象
      loginForm: {
        uname: "admin",
        password: "1234",
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
        this.$router.push("/FrontPage");
        this.$message.success("欢迎你", store.fetchUserName());
      });
    },

    createUser() {
      //validate：回调函数，拿到验证结果
      this.$refs.userCreateRef.validate(async (valid) => {
        if (!valid) return; //如果为false,不发起请求，直接return

        let config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        //发起创建用户请求
        console.log(JSON.stringify(this.userCreateForm));
        //console.log(this.userCreateForm)
        const { data: res } = await this.$http.post(
          "/api/user/register",
          JSON.stringify(this.userCreateForm),
          config
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
.page-background {
  background-image: url('../assets/background.jpg'); /* 替换为你的图片路径 */
  background-size: cover; /* 背景图片覆盖整个元素 */
  background-position: center; /* 背景图片居中 */
  background-repeat: no-repeat; /* 不重复背景图片 */
  height: 100vh; /* 可以根据需要设置高度 */
  width: 100%; /* 可以根据需要设置宽度 */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}


.login_container {
  background-color: rgba(215, 239, 255, 0.9); /* 使用rgba()函数设置透明度 */
  height: 300px;
  width: 350px;
  border-radius: 15px;
  /* position: absolute;
  top: 50%;
  left: 50%; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  border-style: solid;
  border-width: medium;
  border-color: #f5f5f5;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4); /* 悬浮效果的阴影 */
  transition: box-shadow 0.4s ease; /* 过渡效果 */
}

.login_container:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.8); /* 鼠标悬浮时的阴影效果 */
}

/* .login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  top: 23%;
  padding: 0 20px;
  box-sizing: border-box;
} */

.login_form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

/* 
.login_avatar {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
} */

.login_avatar {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
}

.login_botton {
  display: flex;
  justify-content: center;
  /* flex容器的属性：justify-content，
  能够设置子元素的对齐和空间分配方式，常用的就是居中设置。 */
  top: 80%;
}


</style>
