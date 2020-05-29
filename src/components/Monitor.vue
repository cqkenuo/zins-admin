<template>
  <div class="monitor">
    <el-row :gutter="20">
      <el-col :span="8">
        <MBase/>
      </el-col>

      <el-col :span="8">
        <MBase/>

      </el-col>

      <el-col :span="8">
        <MResource/>
      </el-col>

    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="license">
          <div slot="header" class="licnese_header">
            <span>许可证</span>
          </div>
          <div class="license_total">
            <div class="license_c2">
              <div class="license_desc_l">
                <div class="license_desc_lt">
                  <div class="license_title">等保二</div>
                  <div class="license_desc">许可证总数</div>
                </div>
                <div class="license_desc_num">0</div>
              </div>

              <div class="license_percent">
                <div class="license_percent_bar">
                  <el-progress type="dashboard" :percentage="50"></el-progress>
                </div>

                <div class="license_percent_desc">
                  <div>1</div>
                  <div>已用</div>
                  <div>1</div>
                  <div>剩余</div>
                </div>
              </div>


            </div>
            <div class="license_split_border"></div>
            <div class="license_c3">
              <div class="license_desc_l">
                <div class="license_desc_lt">
                  <div class="license_title">等保三</div>
                  <div class="license_desc">许可证总数</div>
                </div>
                <div class="license_desc_num">0</div>
              </div>


              <div class="license_percent">
                <div class="license_percent_bar">
                  <el-progress type="dashboard" :percentage="50"></el-progress>
                </div>

                <div class="license_percent_desc">
                  <div>1</div>
                  <div>已用</div>
                  <div>1</div>
                  <div>剩余</div>
                </div>
              </div>

            </div>

          </div>

          <div class="license_detail">
            <el-table
                :data="tableData"
                style="width: 100%"
                :header-cell-style="{background:'rgb(243, 243, 244)',color:'#606266'}">
              <el-table-column
                  prop="vnf_type"
                  label="网元类型"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="license_num"
                  label="许可证总数"
                  width="180">
              </el-table-column>
              <el-table-column
                  prop="used"
                  label="已用">
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="tenant">
          <div slot="header" class="card_header">
            <div class="tenant-icon">
              <i class="el-icon-office-building c_h_icon"></i>
            </div>

            <div class="card_h_des">
              <div class="c_h_desc_title">网元</div>
              <div class="c_h_desc_content">网元总数</div>
            </div>

            <div class="c_h_num">
              0
            </div>
          </div>
          <div class="c_main_c">

            <div id="pieReport" style="width: 100%;height: 300px;"></div>
          </div>
        </el-card>

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
  import echarts from 'echarts'
  // import MBase from '@/components/monitor/abnormal/MBase.vue'
  import MBase from "./monitor/abnormal/MBase";
  import MResource from "./monitor/abnormal/MResource";

  export default {
    name: 'Monitor',
    components: {MResource, MBase},
    comments: {
      MBase,
      MResource
    },
    data() {
      return {
        tableData: [{
          vnf_type: '日志审计',
          license_num: '2',
          used: '1'
        }, {
          vnf_type: 'web应用防火墙',
          license_num: '2',
          used: '1'
        }, {
          vnf_type: '漏扫',
          license_num: '2',
          used: '1'
        }, {
          vnf_type: '堡垒机',
          license_num: '2',
          used: '1'
        }, {
          vnf_type: '防火墙',
          license_num: '2',
          used: '1'
        }, {
          vnf_type: '数据库审计',
          license_num: '2',
          used: '1'
        }],
        charts: '',
        opinion: ['防火墙', 'web应用防火墙', '日志审计', '漏扫', '堡垒机', '数据库审计'],
        type: 'pie',
        opinionData: [{
          value: 1,
          name: '防火墙'
        }, {
          value: 2,
          name: 'web应用防火墙'
        }, {
          value: 3,
          name: '日志审计'
        }, {
          value: 1,
          name: '漏扫'
        }, {
          value: 1,
          name: '堡垒机'
        }, {
          value: 2,
          name: '数据库审计'
        }
        ]
      }
    },
    methods: {
      drawPie(id) {
        this.charts = echarts.init(document.getElementById(id));
        this.charts.setOption({
          color: ['#A4B6C9', '#4E7095'], /*饼状图的颜色*/
          tooltip: {
            trigger: 'item',
            formatter: "{b}({d}%)", /*饼状图触碰之后显示的注释文字*/
          },
          legend: {
            left: 'center', /*标签文字排成一行*/
            y: 'bottom', /*在垂直方向上的底部*/
            data: this.opinion,
          },
          series: [{
            type: 'pie', //饼状图
            center: ['50%', '40%'], //显示位置
            name: '',
            radius: ['0%', '60%'], /*空心圆的占比*/
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                borderWidth: 3, /*隔开的白色边界*/
                borderColor: '#fff', /*border*/
                // labelLine :{show:true}
              },
            },

            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'inner',
                textStyle: {
                  fontWeight: 200,
                  fontSize: 12 //文字的字体大小
                },
                formatter: '{d}%', /*饼状图内显示百分比*/
                // data:['40%','60%'],
              },

              emphasis: {
                show: false, /*空心文字出现*/
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: this.opinionData
          }
          ]
        })
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.drawPie("pieReport");
      });
    }

  }
</script>

<style scoped>
  .tenant-icon {
    height: 45px;
    width: 45px;
    color: white;
    background: rgb(22, 114, 221);
    border-radius: 5px;
  }

  .card_header {
    display: flex;
  }

  .c_h_icon {
    font-size: 25px;
    /*display: table-cell;*/
    /*vertical-align: middle;*/
    padding-top: 10px;
    /*padding: auto auto;*/
  }

  .card_h_des {
    margin-left: 10px;
    height: 45px;
    text-align: left;
    flex: 1 1;

  }

  .card_h_des .c_h_desc_title {
    font-size: 16px;
    font-weight: 600;
  }

  .card_h_des .c_h_desc_content {
    font-size: 14px;
    font-weight: 400;
    color: #8c939d;
    padding-top: 6px;
  }

  .c_h_num {
    color: green;
    font-size: 30px;
    line-height: 45px;
  }

  .license_desc_num {
    color: green;
    font-size: 25px;
    line-height: 45px;
    padding-right: 10px;
  }

  .tenant_num {
    display: flex;
  }

  .licnese_header {
    text-align: left;
    font-weight: 600;
  }

  .c_normal {
    flex: 1 1;
    text-align: left;
  }

  .c_abnormal {
    text-align: right;
  }

  .c_main_process {
    padding-top: 10px;
  }

  .license_desc {
    font-size: 14px;
    font-weight: 400;
    color: #8c939d;
  }

  .main_desc {
    font-size: 14px;
    font-weight: 400;
    padding-top: 10px;
    color: #8c939d;
  }

  .el-card {
    margin-bottom: 20px;
  }

  .license {
    height: 100%;
  }

  .license_title {
    font-size: 14px;
    font-weight: 600;
  }

  .license_total {
    display: flex;
  }

  .license_c2 {
    flex: 1 1;
    text-align: left;
  }

  .license_c3 {
    flex: 1 1;
    text-align: left;

  }

  .license_desc_l {
    display: flex;
  }

  .license_desc_lt {
    flex: 1 1;
    height: 45px;
  }

  .license_split_border {
    height: 175px;
    margin: 10px 20px 0;
    border-left: 1px solid #e8e8e8;
  }

  .license_percent {
    display: flex;
    padding: 10px;
  }

  .license_percent_bar {
    flex: 1 1;
  }

  .license_percent_desc {
    padding-left: 20px;
    padding-top: 20px;
  }

  .system_info {
    text-align: left;

  }

  .license_detail {
    padding-top: 20px;
    padding-bottom: 10px;
  }
</style>
