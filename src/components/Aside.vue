<template>
    <div class="sidebar">
        <div class="logo">
            <h1>CSP</h1>
        </div>

        <el-menu class="side_menu"
                 @open="handleOpen"
                 @close="handleClose"
                 @select="handleSelect"
                 :router=false
                 :default-active="$route.path"
                 :collapse="isCollapse">

            <el-menu-item index="/admin">
                <i class="el-icon-monitor"></i>
                <span slot="title">监控</span>
            </el-menu-item>

            <el-menu-item index="/admin/tenants">
                <i class="el-icon-office-building"></i>
                <span slot="title">租户</span>
            </el-menu-item>

            <el-menu-item index="/admin/vnfs">
                <i class="el-icon-bank-card"></i>
                <span slot="title">网元</span>
            </el-menu-item>

            <el-menu-item index="/admin/resources">
                <i class="el-icon-receiving"></i>
                <span slot="title">资源</span>
            </el-menu-item>

            <el-menu-item index="/admin/templates">
                <i class="el-icon-reading"></i>
                <span slot="title">套餐模板</span>
            </el-menu-item>

            <el-menu-item index="/admin/images">
                <i class="el-icon-money"></i>
                <span slot="title">网元镜像</span>
            </el-menu-item>

            <el-menu-item index="/admin/message">
                <i class="el-icon-bell"></i>
                <span slot="title">消息告警</span>
            </el-menu-item>


            <el-submenu index="/admin/system">
                <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>系统配置</span>
                </template>
                <el-menu-item index="/admin/system/users">
                    <i class="el-icon-user"></i>
                    <span slot="title">账户中心</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/cloudplatform">
                    <i class="el-icon-cloudy"></i>
                    <span slot="title">云平台</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/lms">
                    <i class="el-icon-coin"></i>
                    <span slot="title">LMS配置</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/network">
                    <i class="el-icon-data-board"></i>
                    <span slot="title">网络</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/trusthost">
                    <i class="el-icon-postcard"></i>
                    <span slot="title">可信主机</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/upgrade">
                    <i class="el-icon-upload2"></i>
                    <span slot="title">升级</span>
                </el-menu-item>

                <el-menu-item index="/admin/system/ntp">
                    <i class="el-icon-time"></i>
                    <span slot="title">NTP服务器</span>
                </el-menu-item>
                <el-menu-item index="/admin/system/debug">
                    <i class="el-icon-discover"></i>
                    <span slot="title">系统调试</span>
                </el-menu-item>
            </el-submenu>

        </el-menu>
        <div class="side_menu_empty"></div>

        <el-menu :collapse="isCollapse" class="side_menu_collapse">
            <el-menu-item @click="collapse()">

                <i class="el-icon-s-unfold" v-if="isCollapse"></i>
                <i class="el-icon-s-fold" v-else></i>

                <span slot="title">收起</span>
            </el-menu-item>
        </el-menu>

    </div>


</template>

<script>
  export default {
    name: "Aside",
    data() {
      return {
        isCollapse: true
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
      collapse() {
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
    .side_menu:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
    }

    .side_menu_collapse:not(.el-menu--collapse) {
        width: 200px;
    }

    .el-menu-item {
        text-align: left;
        height: 45px;
        line-height: 45px;
    }

    .el-menu-item [class^=el-icon-] {
        font-size: 25px;
        margin-right: 20px;
    }

    .sidebar {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .side_menu {
        flex: 1;
        border: none
    }

    .side_menu_collapse {
        border: none
    }

    .logo {
        height: 50px;
    }

</style>

<style>
    .el-submenu__title {
        text-align: left;
        height: 45px;
        line-height: 45px;
    }

    .el-submenu .el-menu {
        border-left: 5px solid #8c939d;
        border-right: 5px solid #8c939d;
        background: #EDEDED;
        overflow: hidden;
    }

    .el-submenu [class^=el-icon-] {
        font-size: 25px;
        margin-right: 20px;
    }
    .el-submenu .el-menu-item {
        padding: 0 20px !important;
    }

</style>
