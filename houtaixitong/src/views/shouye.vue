<template>
  <el-row class="shouye contain">
    <el-col class="header" :span="24">
      <el-col :span="10" class="logo" :class="isCollapse?'logo-shrink-with':'logo-with'">
        {{isCollapse?'': logoName}}
      </el-col>
      <el-col class="zhankai" :span="10">
        <div class="tools" @click.prevent="show">
          <i class="el-icon-tickets"></i>
        </div>
      </el-col>
      <el-col class="liebiao" :span="4">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img class="toux" src="../assets/meinv.jpg" /> 阿囡</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided @click.native="">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>

    <el-col :span="24" class="main-con">
      <aside class="oh" :class="isCollapse?'smalla':'biga'">



        <el-menu :default-active="$route.path"  class="el-menu-vertical-demo" unique-opened router @open="handleOpen" @close="handleClose" :collapse="isCollapse"  @select="handleselect">
          <template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu class="tel"  :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
              <!--<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>-->
            </el-submenu>
          </template>
        </el-menu>
      </aside>
      <section class="content-container transition-box" :class="isCollapse?'newWidth':''">
        <div class="fl">
          <el-tag class="newtag"  :class="{'active': isActive(item.path)}" type="danger" :key="index" v-for="(item,index) in tagList" closable :disable-transitions="false" @close="handleClose(index)">
            <router-link :to="item.path" class="tags-li-title">
              {{item.name}}
            </router-link>
          </el-tag>
        </div>
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import bus from './bus';
    export default {
        name: "shouye",
        data(){
            return {
              isCollapse:false,
              logoName:'南哥·桂林',
              tagList:[]
            }
        },
        methods:{
          isActive(path) {
            return path === this.$route.fullPath;
          },
          show(){
            var that = this;
            that.isCollapse = !that.isCollapse
          },
          handleOpen(key, keyPath) {
            console.log(this.$route.path);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          },
          handleselect: function (a, b) {
            console.log();
          },
          // 设置标签
          setTags(route){
            const isExist = this.tagList.some(item => {
              return item.path === route.fullPath;
            })
            if(!isExist){
              if(this.tagList.length >= 8){
                this.tagList.shift();
              }
              this.tagList.push({
                title: route.meta.title,
                path: route.fullPath,
                name: route.matched[1].components.default.name
              })
            }
            bus.$emit('tags', this.tagsList);
          },
          // 关闭单个标签
          handleClose(index) {
            const delItem = this.tagList.splice(index, 1)[0];
            const item = this.tagList[index] ? this.tagList[index] : this.tagList[index - 1];
            if (item) {
              delItem.path === this.$route.fullPath && this.$router.push(item.path);
            }else{
              this.$router.push('/page1');
            }
          },
        },
        computed: {
          showTags() {
            // return this.tagsList.length > 0;
          }
        },
        watch:{
          $route(newValue, oldValue){
            this.setTags(newValue);
          }
        },
        created(){
          this.setTags(this.$route);
        }
    }
</script>

<style scoped>
  .logo-shrink-with{
    width: 65px;
    transition: all 0.4S;
  }
  .logo-with{
    width: 230px;
    transition: all 0.4S;
  }
  .tl{
    text-align: left;
  }
  .shouye .header{
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
  }
  .el-submenu.is-active .el-submenu__title{
    text-align: left;
  }
  .logo{
    text-align: left;
    height: 60px;
    font-size: 22px;
    padding-left: 20px;
    padding-right: 20px;
    border-color: hsla(62,77%,76%,.3);
    border-right-width: 1px;
    border-right-style: solid;
  }
  .tools{
    width: 16px;
    padding:0 30px;
  }
  .tools i{
    width: 16px;
    height: 16px;
  }
  .liebiao{
    float: right;
    text-align: right;
    padding-right: 30px;
    color: #fff;
  }
  .liebiao span{
    color: #fff;
  }
  .toux{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0 10px 10px;
    float: right;
  }
  .main-con{
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }
  .main-con aside{
    flex:0 0 230px;
    width: 230px;
    transition: all 0.4S;
  }
  .main-con aside .el-menu{
    height: 100%;
  }
  .el-menu{
    border-radius: 2px;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #eef1f6;
  }

.oh{
  overflow: auto;
}
.oh.smalla:not(.el-menu--collapse){
  width: 65px;
  flex:0 0 65px;
  transition: all 0.4S;
}
  .oh::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .oh::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .oh::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .tel{
    text-align: left;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 229px;
  }
  /*.content-container{*/
    /*!*width: calc(100% - 230px);*!*/
    /*background-color: red;*/
  /*}*/
  .newWidth{
    idth: calc(100% - 60px);
  }
  .main-con .content-container:not(.el-menu--collapse) {
    flex:1;
    /*overflow-y: scroll;*/
    padding: 5px 15px 15px;
    transition: all 0.4S;
  }
  .main-con .content-container .breadcrumb-container .title {
    width: 200px;
    float: left;
    color: #475669;
    text-align: left;
  }
  .main-con .content-container .breadcrumb-container .breadcrumb-inner {
    float: right;
  }
  .main-con .content-container .content-wrapper {
    background-color: #fff;
    box-sizing: border-box;
  }
  .newtag{
    float: left;
    background-color: #fff;
    color: #000;
  }
  .newtag a{
    text-decoration: none;
  }
  .newtag.active{
    background-color: #409EFF;
    color: #fff;
  }
  .newtag.active a{
    color: #fff;
  }
  .newtag:nth-child(n+2){
    margin-left: 10px;
  }
  .fl{
    width: 100%;
    float: left;
    padding: 3px;
    box-shadow: 2px 2px 2px 2px #ccc;
    margin-bottom: 5px;
  }
</style>
