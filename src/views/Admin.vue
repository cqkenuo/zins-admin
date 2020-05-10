<template>
  <div class="html">
    <el-container>
      <el-aside width="auto">
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
  html, body {
    height: 100%;
    margin: 0;
  }

  .el-header {
    padding: 0;
  }

</style>