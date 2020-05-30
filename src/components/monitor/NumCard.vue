<template>
  <div>
    <el-card class="abnormal_card">
      <div slot="header" class="card_header">
        <div class="card_header_icon" :style="{background: icon_background}">
          <i :class="[icon, 'card_header_icon_obj']"></i>
        </div>
        <div class="card_header_title">
          <div class="card_title_name">{{title}}</div>
          <div class="bk_desc">{{title}}总数</div>
        </div>

        <div class="card_desc_num">
          {{total_num}}
        </div>
      </div>

      <slot name="card_main">
        <div class="card_main">
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
            <el-progress color="#227700" :percentage="normal_percent" :show-text="false"
                         :stroke-width="8"></el-progress>
          </div>
        </div>
      </slot>

    </el-card>
  </div>
</template>

<script>
  export default {
    name: "MBase",
    props: {
      icon_background: {
        default: "rgb(22, 114, 221)"
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
      }
    }
  }
</script>

<style scoped>
  .card_header {
    display: flex;
  }

  .card_header_icon {
    height: 45px;
    width: 45px;
    color: white;
    border-radius: 5px;
    font-size: 25px;
  }

  .card_header_icon_obj {
    padding-top: 10px;
  }

  .card_header_title {
    margin-left: 10px;
    height: 45px;
    text-align: left;
    flex: 1 1;
    display: flex;
    flex-direction: column;

  }

  .card_title_name {
    font-size: 16px;
    font-weight: 600;
    flex: 1 1;
  }

  .bk_desc {
    font-size: 14px;
    font-weight: 400;
    color: #8c939d;
  }

  .card_desc_num {
    color: green;
    font-size: 30px;
    line-height: 45px;
  }

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
  .abnormal_card .el-progress-bar__outer {
    background-color: red;
  }

  .el-card {
    margin-bottom: 20px;
  }
</style>