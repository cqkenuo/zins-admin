<template>
    <div>
        <CardBase :icon="icon"
                  title="系统状态"
                  :icon_background="icon_background"
                  :total_num="total_num"
                  :show_icon="show_icon">
            <div class="system_info" slot="card_main">
                <div class="system_info_desc">
                    <i class="el-icon-cpu progress-title-icon"></i>
                    <div class="progress-title">
                        内存利用率
                    </div>
                    <div class="progress-user-percent">
                        {{mem_percent}}%
                    </div>
                </div>

                <div class="system_info_progress">
                    <el-progress :percentage="mem_percent" :stroke-width="3" :show-text="false" :color="colors"></el-progress>
                </div>

                <div class="system_info_desc">
                    <i class="el-icon-refrigerator progress-title-icon"></i>
                    <div class="progress-title">
                        CPU利用率
                    </div>
                    <div class="progress-user-percent">
                        {{cpu_percent}}%
                    </div>
                </div>

                <div class="system_info_progress">
                    <el-progress :percentage="cpu_percent" :stroke-width="3" :show-text="false" :color="colors"></el-progress>
                </div>


                <div class="system_info_desc">
                    <i class="el-icon-mobile progress-title-icon"></i>
                    <div class="progress-title">
                        磁盘利用率
                    </div>
                    <div class="progress-user-percent">
                        {{disk_percent}}%
                    </div>
                </div>

                <div class="system_info_progress last_progress">
                    <el-progress :percentage="disk_percent" :stroke-width="3" :show-text="false" :color="colors"></el-progress>
                </div>
            </div>
        </CardBase>
    </div>
</template>

<script>
  import CardBase from "./CardBase"

  export default {
    components: {
      CardBase
    },
    name: "SystemInfo",
    props: {
      icon_background: {
        default: "#409EFF"
      },
      title: {
        default: '标题'
      },
      icon: {
        default: 'el-icon-office-building'
      },
      total_num: {
        default: 0
      },
      show_icon: {
        default: false
      },
      mem_percent: {
        default: 40
      },
      cpu_percent: {
        default: 70
      },
      disk_percent: {
        default: 10
      },
      colors: {
        default: [
          {color: 'rgb(103, 194, 58)', percentage: 30},
          {color: 'rgb(230, 162, 60)', percentage: 60},
          {color: '#F56C6C', percentage: 100}
        ]
      }
    }
  }
</script>

<style scoped>
    .system_info_progress {
        padding-top: 5px;
        padding-bottom: 15px;
    }

    .system_info {
        text-align: left;
        /*font-size: 20px;*/
        color: #8c939d;
    }

    .progress-title {
        color: black;
        font-size: 15px;
        padding-left: 15px;
        flex: 1 1;
    }

    .progress-title-icon {
        font-size: 24px;
    }

    .last_progress {
        padding-bottom: 0;
    }

    .system_info_desc{
        display: flex;
    }
</style>

<style>
    .system_info_progress .el-progress-bar__outer {
        background-color: #EBEBEB;
    }
</style>
