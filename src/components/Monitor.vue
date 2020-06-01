<template>
    <div class="monitor">
        <el-row :gutter="20">
            <el-col :span="8">
                <NumCard/>
            </el-col>

            <el-col :span="8">
                <NumCard icon_background="#67C23A"
                         title="安全服务"
                         icon="el-icon-guide"
                         :total_num="security_service_total"/>
            </el-col>

            <el-col :span="8">
                <NumCard icon_background="#E6A23C"
                         title="资源"
                         icon="el-icon-receiving"
                         :show_icon="show_resource_icon"/>
            </el-col>

        </el-row>

        <el-row :gutter="20">

            <el-col :span="12" class="license_used_card">
                <LicenseUsed/>
            </el-col>
            <el-col :span="12">
                <VnfCard icon_background="#99CCCC"
                         title="网元"
                         icon="el-icon-bank-card"
                         :total_num="security_service_total"/>

                <SystemInfo/>
            </el-col>
        </el-row>

    </div>

</template>

<script>
  import NumCard from "./card/NumCard";
  import VnfCard from "./card/VnfCard";
  import LicenseUsed from "./card/LicenseUsed";
  import SystemInfo from "./card/SystemInfo";

  export default {
    name: 'Monitor',
    components: {NumCard, VnfCard, LicenseUsed, SystemInfo},
    data() {
      return {
        show_resource_icon: true,
        security_service_total: 3,
      }
    },
  }
</script>

<style scoped>

</style>
