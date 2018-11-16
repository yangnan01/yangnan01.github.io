<template>
  <el-row class="shouye contain">
    <el-col class="header" :span="24">
      <el-col :span="10" class="logo" :class="shrink?'logo-shrink-with':'logo-with'">
        {{shrink?'': logoName}}
      </el-col>
      <el-col class="zhankai" :span="10">
        <div class="tools" @click.prevent="collapse">
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
      <aside :class="shrink?'main-shrink-style':'main-style'">


        <el-menu default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu class="tl" :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>


        <!--导航菜单-->
        <el-menu :default-active="$route.path" class="el-menu el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"  v-show="!shrink">
          <template  v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu class="tl" :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
          </template>
        </el-menu>
        <!--导航菜单-折叠后-->
        <ul class="el-menu el-menu-vertical-demo shrink" v-show="shrink" ref="menushrink">
          <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
            <template v-if="!item.leaf">
              <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)"><i :class="item.iconCls"></i></div>
              <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">{{child.name}}</li>
              </ul>
            </template>
            <template v-else>
              <ul>
                <li class="el-submenu">
                  <div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.children[0].path)"><i :class="item.iconCls"></i></div>
                </li>
              </ul>
            </template>
          </li>
        </ul>
      </aside>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "shouye",
        data(){
            return {
              shrink:false,
              logoName:'南哥·桂林'
            }
        },
        methods:{
          collapse(){
            this.shrink = !this.shrink
          },
          onSubmit() {
            console.log('submit!');
          },
          handleopen() {
            //console.log('handleopen');
          },
          handleclose() {
            //console.log('handleclose');
          },
          handleselect: function (a, b) {

          },
          //退出登录
          logout: function () {
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
              //type: 'warning'
            }).then(() => {
              sessionStorage.removeItem('user');
              _this.$router.push('/login');
            }).catch(() => {

            });


          },
          showMenu(i,status){
            // this.$refs.menushrink.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
          }
        }
    }
</script>

<style scoped>
  .logo-shrink-with{
    width: 60px;
  }
  .logo-with{
    width: 230px;
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
  .el-submenu .el-menu:hover {
    background-color: #76787a !important;
  }
  .main-con aside .shrink{
    width:60px;
  }
  .main-con aside .shrink .item{
    position: relative;
  }
  .main-con aside .shrink .submenu{
    position:absolute;
    top:0px;
    left:60px;
    z-index:99999;
    height:auto;
    display:none;
  }
  .main-shrink-style{
    flex:0 0 60px;
    width: 60px;
  }
  .main-style{
    flex:0 0 230px;
    width: 230px;
  }
  .main-con .content-container{
    flex:1;
    /*position: absolute;*/
    /*right: 0px;*/
    /*top: 0px;*/
    /*bottom: 0px;*/
    /*left: 230px;*/
    overflow-y: scroll;
    padding: 20px;
  }
  .main-con .content-container .breadcrumb-container .title{
     width: 200px;
     float: left;
     color: #475669;
   }
  .main-con .content-container .breadcrumb-container .breadcrumb-inner{
    float: right;
  }
  .main-con .content-container .content-wrapper{
    background-color: #fff;
    box-sizing: border-box;
  }
</style>
