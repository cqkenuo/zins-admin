<template>
    <div class="monitor">
        <el-row :gutter="20">
            <el-col :span="8">
                <NumCard/>
            </el-col>

            <el-col :span="8">
                <NumCard icon_background="#67C23A" title="安全服务" icon="el-icon-search"
                         :total_num="security_service_total"/>
            </el-col>

            <el-col :span="8">
                <NumCard icon_background="#E6A23C" title="资源" icon_class="el-icon-search"
                         :show_icon="show_resource_icon"/>
            </el-col>

        </el-row>

        <el-row :gutter="20">
            <el-col :span="12">
                <LicenseUsed/>
            </el-col>
            <el-col :span="12">

                <PieChartCard icon_background="#99CCCC" title="网元" icon="el-icon-search"
                              :total_num="security_service_total"/>

                <el-card class="box-card">
                    <div slot="header" class="licnese_header">
                        <span>系统状态</span>
                    </div>
                    <div class="system_info">
                        <div>内存利用率</div>
                        <div class="c_main_process">
                            <el-progress :percentage="50" :show-text="false" :stroke-width="8"></el-progress>
                        </div>
                        <div>CPU利用率</div>
                        <div class="c_main_process">
                            <el-progress :percentage="50" :show-text="false" :stroke-width="8"></el-progress>
                        </div>
                        <div>磁盘利用率</div>
                        <div class="c_main_process">
                            <el-progress :percentage="50" :show-text="false" :stroke-width="8"></el-progress>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    import NumCard from "./card/NumCard";
    import PieChartCard from "./card/PieChartCard";
    import LicenseUsed from "./card/LicenseUsed";

    export default {
        name: 'Monitor',
        components: {NumCard, PieChartCard, LicenseUsed},
        data() {
            return {
                show_resource_icon: true,
                security_service_total: 3,
            }
        },


    }
</script>

<style scoped>

    .license_desc_num {
        color: green;
        font-size: 25px;
        line-height: 45px;
        padding-right: 10px;
    }

    .licnese_header {
        text-align: left;
        font-weight: 600;
    }


    .c_main_process {
        padding-top: 10px;
    }

    .system_info {
        text-align: left;

    }

</style>
