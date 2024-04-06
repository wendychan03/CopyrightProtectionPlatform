<template>
    <div class="background">
      <div class="top_card">
        <div class="card1">
  <el-card >

    <div slot="header" class="clearfix">
      
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <span class="text1">&nbsp;{{userForm.uname}}<span class="text2">的基本信息</span></span>

  </div>

   <el-descriptions class="margin-top"
   :data="userForm" 
   :column="2" 
   :size="size"  
   direction="horizontal"
   :model="userForm"
   >
   <!-- title="我的基本信息" -->
    
    <el-descriptions-item prop="phone">
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      {{userForm.phone}}
    </el-descriptions-item>
    <el-descriptions-item prop="email">
      <template slot="label">
        <i class="el-icon-message"></i>
        邮箱
      </template>
      {{userForm.email}}
    </el-descriptions-item>

    <el-descriptions-item prop="vip">
      <template slot="label">
        <i class="el-icon-medal"></i>
        会员状态
      </template>
      <el-tag size="small"> {{vipStateTag}}</el-tag>
    </el-descriptions-item>

    <el-descriptions-item prop="userStatus.endtime">
      <template slot="label">
        <i class="el-icon-date"></i>
        会员到期日
      </template>
      {{userForm.endTime}}
    </el-descriptions-item>
   
  </el-descriptions>
  <el-row>

  <!-- 修改我的信息 -->
<el-button type="primary" round @click="dialogFormVisible = true" style="float: right;">修改</el-button>

<el-dialog title="修改我的信息" :visible.sync="dialogFormVisible" :center="true">
  <el-form :model="userForm" :rules="userForm_rules" ref="userFormRef">
    <el-form-item label="姓" :label-width="formLabelWidth" prop="lastName">
      <el-input v-model="userForm.lastName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="名" :label-width="formLabelWidth" prop="firstName">
      <el-input v-model="userForm.firstName" autocomplete="off"></el-input>
    </el-form-item>
     <el-form-item label="用户名" :label-width="formLabelWidth" prop="username">
      <el-input v-model="userForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth" prop="phone">
      <el-input v-model="userForm.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth" prop="email">
      <el-input v-model="userForm.email" autocomplete="off"></el-input>
    </el-form-item>
   
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="changeUser();dialogFormVisible = false" >确 定</el-button>
  </div>
</el-dialog>
</el-row>
  </el-card>
  </div>

  <!-- 反馈意见表单 -->
  <div class="card2">
    <el-card>
      <div class="text3">
        <span>联系我们<span class="text4">&nbsp;&nbsp;*我们的反馈将会通过邮件发送给您</span></span>
      </div>
    <br/>
    <!-- ref="feedbackForm" 拿到整个表单的实例对象 -->
      <el-form ref="feedbackForm" :model="feedbackForm" label-width="80px">
      
      <el-form-item label="使用评分">
        <el-rate v-model="feedbackForm.value1"></el-rate>
      </el-form-item>
      <el-form-item label="问题类型">
        <el-checkbox-group v-model="feedbackForm.type">
          <el-checkbox label="技术帮助" name="type"></el-checkbox>
          <el-checkbox label="改进建议" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="问题描述">
        <el-input type="textarea" v-model="feedbackForm.desc"></el-input>
      </el-form-item>

     <el-form-item>
        <el-button type="primary" style="float: right;" @click="onSubmit" round>发送</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  </div>

  </div>
  
  <!-- 下半部分 -->
  <div class="buttom_card">

  <div class="vipcss">
    <el-card>
  <div claa="vip_smallCard">
  <p>用户充值</p>
  <el-row :gutter="12">
  <el-col :span="6">
    <el-card shadow="hover">
      <el-radio v-model="radio1" label=30><p style="font-size:20px;font-weight: bolder;">单月<br/>¥15</p></el-radio>
      <!-- label是Radio 的 value -->
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <el-radio v-model="radio1" label=92><p style="font-size:20px;font-weight: bolder;">三个月<br/>¥40</p></el-radio>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <el-radio v-model="radio1" label=183><p style="font-size:20px;font-weight: bolder;">六个月<br/>¥75</p></el-radio>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card shadow="hover">
      <el-radio v-model="radio1" label=365><p style="font-size:20px;font-weight: bolder;">单年<br/>¥140</p></el-radio>
    </el-card>
  </el-col>
</el-row>
  </div>
<br/>
<el-row>
  <el-button type="primary" round @click="vip" style="float: right;">充值</el-button>
</el-row>
</el-card>
  </div>

  <div class="card_buttom2">
    <el-card>
      <div class="text3">
      <span>快速查找最近上传作品</span>
     </div>
    <el-row :gutter="20">
      <el-col :span="13"> 
        <!-- P51搜索功能 -->
        <el-input placeholder="请输入内容" >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">       
      </el-col>
    </el-row>

  <!-- 表格 -->
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="上传日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="keyword"
        label="关键词">
      </el-table-column>
    </el-table>
    </el-card>
  </div>

</div>

</div>

</template>


<script>

import store from '../store'

export default {

   data() {
    return {
        size: '',



        //充值天数
        radio1:Number,

        //信息框内的用户状态标签
        vipStateTag:"",

        //反馈意见表单
        feedbackForm:{
          type:[],
          desc:'',
          value1:null,

        },

      userForm:{},
      // blacklist: 0
      // email: "150"
      // endTime: null
      // isVip: 0
      // login: 1
      // password: "666"
      // phone:"150"
      // token: "cf10f0562a6f4cd5831ee00551029ca4"
      // uid: 18
      // uname: "wendi03"
      // worklist: null


      formLabelWidth: '150px',
      dialogTableVisible: false,
      dialogFormVisible: false, 
    
    // 修改用户信息验证规则
    userForm_rules:{
          firstName:[
          { required: true, message: '请输入名', trigger: 'blur' },
          ],
          lastName:[
          { required: true, message: '请输入姓', trigger: 'blur' },
          ],
          phone:[
          { required: true, message: '请输入电话', trigger: 'blur' },
          ],
          email:[
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          ],
          username:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          ],
        },

        tableData: [{
            date: '2016-05-02',
            name: 'work1',
            keyword: '猫',
            
          }, {
            date: '2016-05-04',
            name: 'work2',
            keyword: '狗',
            
          }, 
        ],

        userinfoForm:{uname:''},



    }
   },

   created(){
    //一进主页就从后端搜索用户信息
    this.searchUser()


    // 查找对应名称的作品及作品报表 模仿p44
    // getRecentWork(){
    //   this.$http.get

    // }
    
   },

   computed:{
   },

   methods:{
    // 修改我的基本信息
    changeUser(){
      //validate：回调函数，拿到验证结果
      this.$refs.userFormRef.validate(async valid =>{
        if(!valid) return;//如果为false,不发起请求，直接return
        //发起创建用户请求
        const {data :res } = await this.$http.put(
          'http://localhost:8080/user/update',
          JSON.stringify(this.userForm));
        
        // async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
        if(res.meta.status!==200) return this.$message.error('修改失败！');
        this.$message.success('修改成功');
           })   
      },

      async searchUser(){
        //this.uname=store.fetchUserName()
        //从浏览器存储里读取用户名
        //var user=store.fetchUserName()
        
        var uname=store.fetchUserName()
        console.log(uname)
        //console.log('this.qs.stringify({userinfoForm:this.uname.userinfoForm})',this.qs.stringify({userinfoForm:this.uname.userinfoForm}))
        const { data :res } = await this.$http.get(
          '/api/user/search?uname='+uname)
        
        if (res.code!=="200") return this.$message.error("请登陆")
        console.log(res.data)
        this.userForm=res.data
        if (res.data.isVip==1) return this.vipStateTag="会员"
        this.vipStateTag="非会员"



      },

      async vip(){

        var username=store.fetchUserName()
        var vipDays=this.radio1

        var userinfoForm={
          uname:username,
          days:vipDays,
        }
        console.log(userinfoForm)
        const { data:res } = await this.$http.post(
          '/api/user/recharge',JSON.stringify(userinfoForm))

          console.log(res)

        if (res.code!=="200") return this.$message.error()
        this.$message.success("充值成功！");
      },

      onSubmit() {
        console.log('submit!');
        this.$message.success("感谢您的反馈");
        this.$refs['feedbackForm'].resetFields();

      }
    
    
  }
}
</script>
<style scoped>

.background{
  background-color:aliceblue !important;

}

.top_card{
  top: 130px;

height:300px ;
width: 80%;
left: 16%;

  position: absolute;

  display: flex;
  align-items:center

}

.card1{
flex:3;  
/* 占父容器的两份 */
/* background-color: aqua; */
padding: 0 20px;
/* 上下0左右20px */
font-size: 40px;
font-weight:bolder;



}

.card2{
flex:3;
/* background-color: blue; */
padding: 0 20px;
font-size: 15px;


}

.work_progress{
  display: flex;
  justify-content: center;
  /* flex容器的属性：justify-content，
  能够设置子元素的对齐和空间分配方式，常用的就是居中设置。 */
  flex-direction:row
  
}



.buttom_card{
  top: 500px;

height:300px ;
width: 80%;
left: 16%;

  position: absolute;

  display: flex;
  align-items:center

}

.vipcss{
flex:3;  
/* 占父容器的两份 */
/* background-color: aqua; */
padding: 0 20px;
/* 上下0左右20px */
font-size: 15px;
font-weight:bolder;

}

.vip_smallCard{
  padding: 10px;
}

.card_buttom2{
flex:3;
/* background-color: blue; */
padding: 0 20px;
font-size: 15px;


}

/* 用户信息卡片中用户名的字体 */
.text1{
  font-size: 23px;
}

/* 基本信息的字体 */
.text2{
  font-size: 15px;
  font-weight:normal;
}

.text3{
font-weight:bolder;
}


.text4{
  font-size: 12px;
  font-weight:normal;
}

</style>
