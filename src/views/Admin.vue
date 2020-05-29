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

                <el-main>
                    <Monitor/>
                </el-main>

            </el-container>

        </el-container>
    </div>
</template>

<script>
  import Aside from '@/components/Aside.vue'
  import Header from '@/components/Header.vue'
  import Monitor from "@/components/Monitor.vue"

  export default {
    name: "Admin",
    components: {
      Monitor,
      Aside,
      // Footer,
      Header
    }
  }
</script>

<style scoped>

</style>

<style>
    .el-main {
        padding: 15px !important;
        margin: 0 !important;
    }
</style>
