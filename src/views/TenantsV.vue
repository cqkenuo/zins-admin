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
                    <Tenants/>
                    <!--                    <Monitor/>-->
                </el-main>

            </el-container>

        </el-container>
    </div>
</template>

<script>
  import Aside from '@/components/Aside.vue'
  import Header from '@/components/Header.vue'
  import Tenants from "@/components/Tenants.vue"
  // import Monitor from "@/components/Monitor.vue"

  export default {
    name: 'TenantsV',
    components: {
      Tenants,
      Aside,
      Header
    }
  }
</script>

<style scoped>

</style>

<style>
    .el-main {
        margin: 15px;
        padding: 0;
        border-bottom: 1px solid #EBEBEB;
    }
</style>
