<template>
  <div id="login">

    <div class="ZinsLogo">
      <h1>Zins Blog</h1>
    </div>

    <div class="loginInput">
      <el-form :model="loginForm" v-loading="loading">

        <el-form-item prop="username">
          <el-input v-model="loginForm.username" name="username" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" name="password" placeholder="密码" show-password
                    @keyup.enter.native="login"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button class="loginButton" type="primary" @click="login('loginForm')" plain>登陆</el-button>
        </el-form-item>

      </el-form>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loading: false
      }
    }
  }
</script>

<style scoped>
  .ZinsLogo {
    margin: 200px 0 0 0;
  }
  .loginInput {
    width: 300px;
    padding: 15px 15px 0 15px;
    border: 1px solid #8c939d;
    margin: 0 auto;
  }
  .loginButton {
    width: 100%;
  }

</style>