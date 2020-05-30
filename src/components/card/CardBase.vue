<template>
    <div>
        <el-card class="zins-card">
            <div slot="header" class="card_header">
                <div class="card_header_icon" :style="{background: icon_background}" v-if="show_icon">
                    <i :class="[icon, 'card_header_icon_obj']"></i>
                </div>
                <div class="card_header_icon_title" v-if="show_icon">
                    <div class="card_title_name">{{title}}</div>
                    <div class="bk_desc">{{title}}总数</div>
                </div>

                <div v-else>
                    <div class="card_title_name">{{title}}</div>
                </div>

                <div class="card_desc_num" v-if="show_icon">
                    {{total_num}}
                </div>
            </div>

            <slot name="card_main"></slot>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "CardBase",
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
                default: true
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

    .card_header_icon_title {
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


</style>

<style>
    .el-card {
        margin-bottom: 20px;
    }
</style>