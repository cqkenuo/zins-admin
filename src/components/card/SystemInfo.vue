<template>
  <div>
    <CardBase :icon="icon"
              title="系统状态"
              :icon_background="icon_background"
              :total_num="total_num"
              :show_icon="show_icon">
      <div class="system_info" slot="card_main">
        <div>
          <i class="el-icon-cpu card_header_icon_obj"></i>内存利用率
        </div>
        <div class="system_info_progress">
          <el-progress :percentage="50" :stroke-width="8" color="#67C23A"></el-progress>
        </div>
        <div>CPU利用率</div>
        <div class="system_info_progress">
          <el-progress :percentage="50" :stroke-width="8" color="#67C23A"></el-progress>
        </div>
        <div>磁盘利用率</div>
        <div class="system_info_progress last_progress">
          <el-progress :percentage="50" :stroke-width="8" color="#67C23A"></el-progress>
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
      }
    }
  }
</script>

<style scoped>
  .system_info_progress {
    padding-top: 5px;
    padding-bottom: 10px;
  }

  .system_info {
    text-align: left;
    /*font-size: 20px;*/
    color: #8c939d;
  }

  .last_progress {
    padding-bottom: 0;
  }
</style>

<style>
  .system_info_progress .el-progress-bar__outer {
    background-color: #EBEBEB;
  }
</style>