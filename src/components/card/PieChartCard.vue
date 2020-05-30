<template>
    <div>
        <CardBase :icon="icon" :title="title" :icon_background="icon_background" :total_num="total_num">
            <div slot="card_main">
                <div id="pieReport" style="width: 100%;height: 300px;"></div>
            </div>
        </CardBase>
    </div>
</template>

<script>
    import CardBase from "./CardBase"
    import echarts from 'echarts'

    export default {
        name: "PieChartCard",
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
            }
        },
        data() {
            return {
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

</style>