<template>
  <div>
      <el-card class="abnormal_card">
        <div slot="header" class="card_header">
          <div class="card_header_icon" :style="icon_background">
            <i class="card_header_icon_obj" :class="classObject"></i>
          </div>

          <div class="card_header_title">
            <div class="card_title_name">{{title}}</div>
            <div class="bk_desc">{{description}}</div>
          </div>

          <div class="card_desc_num">
            {{desc_num}}
          </div>
        </div>

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
            <el-progress :color="colors" :percentage="normal_percent" :show-text="false"
                         :stroke-width="8"></el-progress>
          </div>
        </div>
      </el-card>
  </div>
</template>

<script>
  export default {
    name: "MBase",
    data() {
      return {
        classObject: {
          "el-icon-office-building": true,
        },
        title: '租户',
        description: '租户总数',
        desc_num: 0,
        normal_num: 1,
        abnormal_num: 1,
        icon_background: {background: "rgb(22, 114, 221)"},
        normal_percent: 50,
        colors: '#227700'
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
</style>