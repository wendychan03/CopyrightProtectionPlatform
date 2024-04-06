import Vue from 'vue'
// 使用路由前，导入路由插件
import VueRouter from 'vue-router'
//对应你要跳转的组件
 
import InfringingWorksTable from '../components/InfringingWorksTable';
import userHomepage from '../components/userHomepage';
import InfringingWorkDetail from '../components/InfringingWorkDetail';
import StatisticalGraph from '../components/StatisticalGraph';
import FrontPage from  '../components/FrontPage.vue';
import SubWork from '../components/SubWork.vue'
import UpLoad from '@/components/UpLoad.vue'
import TeSt from '@/components/TeSt.vue'
import CharTs from '@/components/CharTs.vue'; // eslint-disable-line no-unused-vars
import UserLogin from '@/components/UserLogin.vue';
import SideMenu from '@/components/SideMenu.vue';

Vue.use(VueRouter)
// 创建路由的实例对象
const router = new VueRouter({
    // routes是一个数组，作用是定义hash地址与组件之间的对应关系
    
    routes: [
        {
            path:'/UserLogin',
            component:UserLogin
            }, 

        {
        path:'/',
        redirect:'/UserLogin'
        },

        {
        path:'/',
        redirect:'SideMenu',
        },

            {
            path:'/SideMenu',
            name:'SideMenu',
            component:SideMenu,
            redirect:{name:"FrontPage"},
                children:[
                    { 
                        path:'/FrontPage',
                        name:'FrontPage',
                        component:FrontPage,
                        prop:true
            
                    },

                    { 
                        path:'/userHomepage',
                        name:'userHomepage',
                        component:userHomepage,
                        prop:true
                        },

                    { 
                        path:'/InfringingWorksTable',//链接地址
                        name:'InfringingWorksTable',//路由的名字
                        component:InfringingWorksTable,//由哪个组件来处理
                        prop:true
                        },

                    { 
                        path:'/InfringingWorkDetail',
                        name:'InfringingWorkDetail',
                        component:InfringingWorkDetail,
                        prop:true  },

                    { 
                        path:'/StatisticalGraph',
                        name:'StatisticalGraph',
                        component:StatisticalGraph
                        },

                    {
                        path:'/SubWork',
                        name:'SubWork',
                        component:SubWork
                        },
                    {
                        path:'/UpLoad',
                        component:UpLoad
                        },
                    {
                        path:'/TeSt',
                        component:TeSt
                        },
                
                    {
                        path:'/CharTs',
                        component:CharTs
                        }, 
                ]
            },
          
    ]
})

// 向外共享路由的实例对象
export default router
// export default new Router({
//     routes: [
//         {
//         path:'/',
//         name:'hello',
//         component:HelloWorld},

        
//     }
//     ]
// })

