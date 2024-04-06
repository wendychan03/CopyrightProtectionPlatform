// 
// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
//上面是最初的代码，下面是根据网上改的，为了解决跨域问题


//vue项目使用 vue.config.js 解决跨域:
module.exports = {
  devServer: {
    
    proxy: { // 配置跨域
      '/api': { ///api表示以/api开头的请求路径
        target: 'http://localhost:8080', // 需要代理的地址，跨域的域名，后台服务器地址
        //secure: false, // 如果是不是https接口，可以不配置这个参数
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '', 
          // 路径重写，将前缀/api转为""，也可以理解为"/api"代替target里面的地址
          // 如果本身的接口地址就有"/api"这种通用前缀，也就是说https://www.exaple.com/api，就可以把pathRewrite删掉，如果没有则加上

          //例子：axios.get(/api/v1/topic)
          //这是一个以/api开头的请求路径，所以加上需要代理的地址，变为http://localhost:8080/api/v1/topic
          //并且允许跨域
          //但是真正的请求地址可能是http://localhost:8080/v1/topic，即没有/api,/api只是为了提示跨域而加的
          //所以需要路径重写，将/api/v1/topic变为/v1/topic再加上target:http://localhost:8080，=http://localhost:8080/v1/topic
        },
      },
    },
  },
};

