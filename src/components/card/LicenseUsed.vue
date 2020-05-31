<template>
    <div>
        <CardBase :icon="icon" title="许可证" :icon_background="icon_background" :total_num="total_num"
                  :show_icon="show_icon">
            <div slot="card_main">
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
                                <div class="license_percent_bar_box">
                                    <el-progress type="dashboard" :percentage="50"></el-progress>
                                </div>
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
                                <div class="license_percent_bar_box">
                                    <el-progress type="dashboard" :percentage="50"></el-progress>
                                </div>
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
        name: "UsedCard",
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
            }
        },
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

    .license_desc {
        font-size: 14px;
        font-weight: 400;
        color: #8c939d;
    }

    .license_desc_num {
        color: green;
        font-size: 25px;
        line-height: 45px;
        padding-right: 10px;
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

    .license_detail {
        padding-top: 20px;
        /*padding-bottom: 10px;*/
    }

    .license_percent_bar_box {
        display: flex;
        align-items:center;
        justify-content:center;
    }
</style>