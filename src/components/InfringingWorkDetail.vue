<template>
    <div> 
      
     <!-- {{this.$router.query.id}} -->
    <el-page-header @back="handle()" content="疑似侵权作品详情"></el-page-header> 
      <el-divider></el-divider>

    <el-descriptions 
    class="margin-top" 
    :data="workinfoForm" 
    :column="1" 
    border>
    <el-descriptions-item prop="workname">
      <template slot="label">
      作品名
      </template>
      {{ workinfoForm.workname }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        作品ID
      </template>
      {{ workinfoForm.workid }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        指纹状态
      </template>
       {{ workinfoForm.fingerprintstatus }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
       
        指纹添加日期
      </template>
      {{ workinfoForm.fingerprintdate }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        水印数据
      </template>
      {{ workinfoForm.watermarkdate }}
    </el-descriptions-item>
  </el-descriptions>
         
  <!-- <p style="font-size:20px">AA</p> -->
  <br/><br/>
  <el-descriptions class="margin-top" :column="1"  border>
    <el-descriptions-item>
      <template slot="label">
      作者名
      </template>
      {{ workinfoForm.ownername }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label" >
        上传时间
      </template>
      {{ workinfoForm.uploadtime }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        关键词
      </template>
       {{ workinfoForm.keywords }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        
        摘要
      </template>
      {{ workinfoForm.workabstract }}
    </el-descriptions-item>

    <el-descriptions-item>
      <template slot="label">
        链接
      </template>
      {{ workinfoForm.urllist}}
    </el-descriptions-item>

  <el-descriptions-item>
      <template slot="label">
        作品类型
      </template>
      {{ workinfoForm.worktype }}
    </el-descriptions-item>


  <el-descriptions-item>
      <template slot="label">
        审查平台
      </template>
      {{ workinfoForm.platform }}
    </el-descriptions-item>

  </el-descriptions>
         


    </div>
</template>
<script>
export default {
   data() {
      return {

       
        // workinfoForm: {
        //       workid:Number, // integer
        //       workname:"", //string,浅谈《三体》
        //       fingerprintstatus:Boolean, //bool      #指纹状态（是否添加）
        //       fingerprintdate:"", //string      #指纹添加日期
        //       fingerprintvalue:"", //string      #指纹数据
        //       watermarkstatus:Boolean,   //bool      #水印状态
        //       watermarkdate:"", //string        #水印添加日期
        //       watermarkvalue:"", //string       #水印数据
        //       ownername:"" ,      //string      #作者名字
        //       ownerid:Number,         //int         #作者id
        //       uploadtime:"" ,     //string      #作品上传时间
        //       lastchecktime:"" ,  //string      #最后一次审查时间
        //       intervaltime:Number,    //long        #审查周期
        //       keywords:""    ,    //string[]    #关键词
        //       workabstract:"" ,   //string      #摘要
        //       workfile:""  ,      //string      #下载地址
        //       urllist:"",         //string[]    #侵权作品地址
        //       worktype:"" ,       //string      #作品类型
        //       platform:"" ,   //string          #审查平台
        // },
        workinfoForm: {
              workid:1, // integer
              workname:"浅谈《三体》", //string
              fingerprintstatus:true, //bool      #指纹状态（是否添加）
              fingerprintdate:"2023-01-11", //string      #指纹添加日期
              fingerprintvalue:"$SSf1342s6&8", //string      #指纹数据
              watermarkstatus:true,   //bool      #水印状态
              watermarkdate:"2023-01-11", //string        #水印添加日期
              watermarkvalue:"xxxxx", //string       #水印数据
              ownername:"李华" ,      //string      #作者名字
              ownerid:2971,         //int         #作者id
              uploadtime:"2023-01-11" ,     //string      #作品上传时间
              lastchecktime:"2023-02-09" ,  //string      #最后一次审查时间
              intervaltime:3,    //long        #审查周期
              keywords:"科幻"    ,    //string[]    #关键词
              workabstract:"《三体》是刘慈欣创作的一部科幻小说，全书以严密的故事结构和深刻的哲学思考打动了大量读者，成为了国内外科幻文学的代表性作品之一。它不仅探讨了科学技术发展对人类文明带来的影响，更让我们思考了人类存在的本质、价值以及未来的命运。在这篇论文中，我将从三方面展开对《三体》的理解和探讨：科幻元素的应用、哲学思考的体现以及人性与情感的描绘。" ,   //string      #摘要
              workfile:""  ,      //string      #下载地址
              urllist:"https://baijiahao.baidu.com/s?id=1763403370988024950&wfr=spider&for=pc",         //string[]    #侵权作品地址
              worktype:"文字" ,       //string      #作品类型
              platform:"百度" ,   //string          #审查平台
        },
      }
   },
   created(){
        // 检查路由参数是否存在
      if (!this.$route.query.id) {
        // 参数不存在,执行其他操作...
      } else {
        // 参数存在,发起请求
        console.log("exist");
        // console.log(this.$router.query.id);
        this.searchWork();
      }
    
   },

   computed:{
    
   },

   methods:{
    handle (){
            //  路径/home对应我在router目录下index.js中定义的path属性值
                this.$router.push('/InfringingWorksTable');               
            },

  //   async searchWork(){
        
  //       const { meta :res } = await this.$http.get(
  //         'work/info?id='+this.$router.query.id)
        
  //       if (res.code!=="200") return this.$message.error("请登陆")
  //       console.log(res.data)
  //       this.workinfoForm=res.data.workinfoForm
      
  //  },

    // async searchWork() {
    //   console.log(this.$router.query.id);
    //   try {
    //     const { meta: res } = await this.$http.get('work/info?id=' + this.$router.query.id);

    //     if (res.code !== "200") {
    //       return this.$message.error("请登陆");
    //     }

    //     if (res.data && res.data.workinfoForm) {
    //       this.workinfoForm = res.data.workinfoForm;
    //     } else {
    //       console.warn('服务器返回的数据格式不符合预期');
    //     }
    //   } catch (error) {
    //     console.error('获取作品信息失败:', error);
    //   }
    // },

    async searchWork() {
      // let id = JSON.parse(this.$router.query.id);
      console.log(this.$route.params.id);//可以成功获取参数

      try {
        const { meta: res } = await this.$http.get('work/info',this.$route.params.id);

        if (res.code == "404") {
          return this.$message.error("该作品不存在");
        }

        if (res.code !== "200") {
          return this.$message.error("请登陆");
        }
        

        if (res.data && res.data.workinfoForm) {
          this.workinfoForm = res.data.workinfoForm;
        } else {
          console.warn('服务器返回的数据格式不符合预期');
        }
      } catch (error) {
        console.error('获取作品信息失败:', error);
      }
    },

   }
   
}
</script>
<style scoped> 
</style>
