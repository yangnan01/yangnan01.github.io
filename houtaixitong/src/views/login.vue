<template>
  <div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="80px" class="demo-ruleForm login-container">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="account" label="登陆名">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass" label="密码">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="navgate" :loading="logining">登录</el-button>
        <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
      </el-form-item>

  </el-form>
  </div>
  <!--<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">-->
    <!--<el-form-item label="密码" prop="pass">-->
      <!--<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="确认密码" prop="checkPass">-->
      <!--<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item label="年龄" prop="age">-->
      <!--<el-input v-model.number="ruleForm2.age"></el-input>-->
    <!--</el-form-item>-->
    <!--<el-form-item>-->
      <!--<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>-->
      <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
    <!--</el-form-item>-->
  <!--</el-form>-->

</template>

<script>
    export default {
        name: "login",
      data() {
        return {
          logining: false,
          ruleForm2: {
            account: 'admin',
            checkPass: '123456'
          },
          rules2: {
            account: [
              { required: true, message: '请输入账号', trigger: 'blur' },
              //{ validator: validaePass }
            ],
            checkPass: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              //{ validator: validaePass2 }
            ]
          },
          checked: true
        };
      },
      methods:{
        navgate(){
          this.$emit('listento','0');
          this.$router.push({ path: '/page1' });
        }
      }
    }
</script>

<style scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }

</style>
