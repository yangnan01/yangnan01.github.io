import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import shouye from '@/views/shouye'
import page1 from '@/views/nav1/page1'
import page2 from '@/views/nav1/page2'
import page3 from '@/views/nav2/page3'
import page4 from '@/views/nav2/page4'
import page5 from '@/views/nav3/page5'
import page6 from '@/views/nav3/page6'
import page7 from '@/views/nav4/page7'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      hidden: true
    },
    // {
    //   path: '/shouye',
    //   name: 'shouye',
    //   component: shouye,
    //   hidden: true
    // },
    {
      path: '/',
      component: shouye,
      name: '段子',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        // { path: '/login', component: login, name: 'login', hidden: true },
        // { path: '/shouye', component: shouye, name: '主页', hidden: true },
        { path: '/page1', component: page1, name: '主页' },
        { path: '/page2', component: page2, name: '段子' },
      ]
    },
    {
      path: '/',
      component: shouye,
      name: '播放器',
      iconCls: 'el-icon-edit',
      children: [
        { path: '/page3', component: page3, name: '音乐' },
        { path: '/page4', component: page4, name: '视频' }
      ]
    },
    {
      path: '/',
      component: shouye,
      name: '导航三',
      iconCls: 'el-icon-date',
      // leaf: true,//只有一个节点
      children: [
        { path: '/page5', component: page5, name: 'Page5' },
        { path: '/page6', component: page6, name: 'Page6' }
      ]
    },
    {
      path: '/',
      component: shouye,
      name: '导航四',
      iconCls: 'el-icon-menu',
      // leaf: true,//只有一个节点
      children: [
        { path: '/page7', component: page7, name: 'page7' },
      ]
    },
    // {
    //   path: '/',
    //   component: shouye,
    //   name: 'Charts',
    //   iconCls: 'fa fa-bar-chart',
    //   children: [
    //     { path: '/echarts', component: echarts, name: 'echarts' }
    //   ]
    // },
    // {
    //   path: '*',
    //   hidden: true,
    //   redirect: { path: '/404' }
    // }
  ]
})
