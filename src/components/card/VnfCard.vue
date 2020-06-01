<template>
    <div class="vnf-card">
        <CardBase :icon="icon" :title="title" :icon_background="icon_background" :total_num="total_num">
            <div slot="card_main">
                <el-table
                        :data="tableData"
                        style="width: 100%"
                        :header-cell-style="{color:'#8c939d'}"
                        size="medium">
                    <el-table-column
                            prop="vnf_type"
                            label="网元类型"
                            width="130">
                    </el-table-column>
                    <el-table-column
                            prop="total"
                            label="总数"
                            width="90">
                    </el-table-column>
                    <el-table-column
                            prop="online"
                            label="在线数"
                            width="90">
                    </el-table-column>
                    <el-table-column
                            prop="online_percent"
                            label="在线比">
                        <template>
                            <el-progress :percentage="30"
                                         :stroke-width="3"
                                         :show-text="false"
                                         color="rgb(103, 194, 58)">
                            </el-progress>
                        </template>

                    </el-table-column>
                </el-table>
            </div>
        </CardBase>
    </div>
</template>

<script>
  import CardBase from "./CardBase";

  export default {
    components: {
      CardBase
    },
    name: 'VnfCard',
    props: {
      icon_background: {
        default: "#409EFF"
      },
      title: {
        default: '租户'
      },
      icon: {
        default: 'el-icon-bank-card'
      },
      total_num: {
        default: 0
      },
      tableData: {
        default: () => [{
          vnf_type: '日志审计',
          total: '2',
          online: '2',
          online_percent: 100
        }, {
          vnf_type: 'web应用防火墙',
          total: '2',
          online: '2',
          online_percent: 100
        }, {
          vnf_type: '漏扫',
          total: '2',
          online: '2',
          online_percent: 100
        }, {
          vnf_type: '堡垒机',
          total: '2',
          online: '2',
          online_percent: 100
        }, {
          vnf_type: '防火墙',
          total: '2',
          online: '2',
          online_percent: 100
        }, {
          vnf_type: '数据库审计',
          total: '2',
          online: '2',
          online_percent: 100
        }]
      },
    },
  }
</script>

<style scoped>

</style>

<style>
    .vnf-card .el-card__body {
        padding: 0 10px 0 10px;
    }
</style>
