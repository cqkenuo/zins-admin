<template>
    <div class="monitor">
        <el-row :gutter="20">
            <el-col :span="8">
                <el-card class="tenant">
                    <div slot="header" class="clearfix">
                        <div class="tenant-icon">
                            <i class="el-icon-office-building"></i>
                        </div>

                        <span>租户</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>

            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>安全服务</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>

            <el-col :span="8">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>资源</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>

        </el-row>

        <el-row :gutter="20">
            <el-col :span="12">
                <el-col :span="8">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>许可证</span>
                        </div>
                        <div v-for="o in 4" :key="o" class="text item">
                            {{'列表内容 ' + o }}
                        </div>
                    </el-card>
                </el-col>
            </el-col>
            <el-col :span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>网元</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>

                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>系统状态</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
  export default {
    name: 'Monitor'
  }
</script>

<style scoped>
    .tenant-icon {
        height: 40px;
        width: 50px;
        color: white;
        background: green;
    }
</style>
