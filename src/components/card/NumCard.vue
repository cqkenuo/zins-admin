<template>
  <div>
    <CardBase :icon="icon" :title="title" :icon_background="icon_background" :total_num="total_num" :show_icon="show_icon">
      <div slot="card_main">
        <div class="normal_abnormal">
          <div class="normal_info">
            <div>{{normal_num}}</div>
            <div class="bk_desc normal_abnormal_desc">正常</div>
          </div>
          <div class="abnormal_info">
            <div>{{abnormal_num}}</div>
            <div class="bk_desc normal_abnormal_desc">异常</div>
          </div>
        </div>
        <div class="abnormal_percent_bar">
          <el-progress color="#67C23A" :percentage="normal_percent" :show-text="false"
                       :stroke-width="8"></el-progress>
        </div>
      </div>
    </CardBase>
  </div>
</template>

<script>
  import CardBase from "./CardBase"
  export default {
    name: "NumCard",
    components: {
      CardBase
    },
    props: {
      icon_background: {
        default: "#409EFF"
      },
      title: {
        default: '租户'
      },
      icon: {
        default: 'el-icon-office-building'
      },
      total_num: {
        default: 0
      },
      normal_num: {
        default: 0
      },
      abnormal_num: {
        default: 0
      },
      normal_percent: {
        default: 50
      },
      show_icon: {
        default: true
      }
    }
  }
</script>

<style scoped>

  .normal_abnormal {
    display: flex;
  }

  .normal_info {
    flex: 1 1;
    text-align: left;
  }

  .normal_abnormal_desc {
    padding-top: 10px;
  }

  .abnormal_percent_bar {
    padding-top: 10px;
  }

</style>

<style>
  .zins-card .el-progress-bar__outer {
    background-color: #F56C6C;
  }

  .el-card {
    margin-bottom: 20px;
  }
</style>