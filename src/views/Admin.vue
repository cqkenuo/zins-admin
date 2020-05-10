<template>
  <div class="html">
    <el-container>
      <el-aside width="250px">
        <Aside/>
      </el-aside>

      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>Main</el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>

    </el-container>
  </div>
</template>

<script>
  import Aside from '@/components/Aside.vue'
  import Footer from '@/components/Footer.vue'
  import Header from '@/components/Header.vue'

  export default {
    name: "Admin",
    components: {
      Aside,
      Footer,
      Header
    }
  }
</script>

<style scoped>
  .el-header {
    padding: 0;
  }
</style>