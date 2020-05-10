<template>
  <div class="sidebar">
    <el-menu @open="handleOpen" @close="handleClose" :router=false :default-active="$route.path" @select="handleSelect"
             class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item index="/admin">
        <i class="el-icon-s-home"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>


      <el-submenu index="/admin/system">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item index="/admin/system/base">
          <i class="el-icon-menu"></i>
          <span slot="title">基本设置</span>
        </el-menu-item>

      </el-submenu>


    </el-menu>
    <div class="flod">
      <el-button type="primary" icon="el-icon-s-fold" v-model="isCollapse" @click="testss()"></el-button>
    </div>
  </div>


</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(keyPath)
        if (this.$route.path !== key) {
          this.$router.push(key)
        } else {
          this.$router.replace({
            path: '/refresh',
            query: {
              t: Date.now()
            }
          })
        }
      },
      testss() {
        this.isCollapse = !this.isCollapse
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-button {
    font-size: 20px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu, .el-menu-item {
    text-align: left;
  }
  .sidebar {
    height: 100%;
  }

  .flod {

  }
</style>