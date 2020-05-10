<template>
  <div class="header">
    <el-menu :router=false mode="horizontal" background-color="#545c64" text-color="#fff"
             active-text-color="#ffd04b" :default-active="defaultActive" @select="handleSelect">
      <el-menu-item index="/admin">控制台</el-menu-item>
      <el-menu-item index="/about">关于</el-menu-item>
      <el-menu-item index="6" disabled>禁用菜单</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: "Header",
    methods: {
      handleSelect (key, keyPath) {
        // TODO: unused param keyPath
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
      }
    },
    computed: {
      defaultActive () {
        let pathArray = this.$route.path.split('/')[1]
        return `/${pathArray}`
      }
    }
  }
</script>

<style scoped>

</style>