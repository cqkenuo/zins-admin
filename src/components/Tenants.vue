<template>
    <div class="tenants">
        <div class="tenants_header">
            <div class="tenant_header_title">
                <span>租户</span>
            </div>

            <div class="tenants_header_tools">
                <el-button type="danger" size="medium" icon="el-icon-delete">删除</el-button>
                <el-button type="success" size="medium" icon="el-icon-circle-plus-outline" @click="drawer = true">新建租户
                </el-button>


                <el-popover
                        placement="top"
                        width="300"
                        v-model="visible"
                        class="shaixuan">
                    <div class="shaixuan_input">
                        <div>
                            <div>租户名</div>
                            <div class="sx_input">
                                <el-input v-model="input_name" placeholder="请输入租户"></el-input>
                            </div>
                            <div>用户</div>
                            <div class="sx_input">
                                <el-input v-model="input_username" placeholder="请输入用户"></el-input>
                            </div>
                            <div>状态</div>
                            <div class="sx_selector">
                                <el-select v-model="status_values"
                                           multiple placeholder="请选择"
                                           style="padding-top: 15px;padding-bottom: 15px;width:100%;">
                                    <el-option
                                            v-for="item in status_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <el-button type="primary" size="small" @click="visible = false">确认</el-button>

                    </div>
                    <el-button slot="reference" type="primary" size="medium" icon="el-icon-search">筛选</el-button>

                </el-popover>

            </div>

            <el-drawer
                    :visible.sync="drawer"
                    :direction="direction"
                    :before-close="handleClose"
                    :show-close="true"
                    size="600px">
                <div slot="title" class="create_tenant_header">
                    新建租户
                </div>
                <div class="create_tenant_main">
                    <div class="create_tenant_content">
                        创建租户
                    </div>

                    <div class="create_tenant_footer">
                        <el-button type="primary" size="medium" @click="drawer = false">确认</el-button>
                        <el-button type="info" size="medium" @click="drawer = false">取消</el-button>

                    </div>
                </div>

            </el-drawer>
        </div>


        <div class="tenants_content">
            <el-table
                    :data="tableData"
                    style="width: 100%"
                    :header-cell-style="{background:'rgb(243, 243, 244)',color:'#606266'}">
                <el-table-column
                        prop="name"
                        label="租户名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="username"
                        label="用户"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="status"
                        label="状态">
                </el-table-column>
                <el-table-column
                        prop="package_name"
                        label="套餐">
                </el-table-column>
                <el-table-column
                        prop="start_end_time"
                        label="起止时间">
                </el-table-column>
                <el-table-column
                        prop="tenant_view"
                        label="租户视图">
                </el-table-column>
                <el-table-column
                        prop="operations"
                        label="操作">
                </el-table-column>
            </el-table>
        </div>


        <div class="tenants_footer">
            <div class="tenant_footer_left_side">
                <div class="tenant_footer_refresh_icon">
                    <el-button type="text" icon="el-icon-refresh-right" circle></el-button>
                </div>
                <div class="tenant_total_num">共100条</div>
            </div>
            <div class="tenant_footer_right_side">
                <el-pagination
                        :page-sizes="[20, 50, 100]"
                        :page-size="100"
                        layout="sizes, prev, pager, next"
                        :total="100">
                </el-pagination>
            </div>
        </div>

    </div>
</template>

<script>
  export default {
    name: 'Tenants',
    data() {
      return {
        visible: false,
        tableData: [],
        status_options: [
          {
            value: "active",
            label: "活动"
          }, {
            value: "error",
            label: "错误"
          }
        ],
        status_values: [],
        input_name: '',
        input_username: '',
        drawer: false,
      }
    }
  }
</script>

<style scoped>
    .tenants {
        min-height: 100%;
        background: white;
        display: flex;
        flex-direction: column;
    }

    .tenants_header {
        display: flex;
        padding: 20px;
    }

    .tenant_header_title {
        flex: 1 1;
        text-align: left;
        font-size: 23px;
        font-weight: 600;
    }

    .tenants_content {
        padding: 0 20px 0 20px;
        height: 100%;
        flex: 1 1;
    }

    .tenants_footer {
        border-top: 1px solid #e8e8e8;
        padding: 10px;
        display: flex;
    }

    .tenant_footer_left_side {
        display: flex;
        flex: 1 1;
    }

    .tenant_total_num {
        line-height: 49px;
        color: #8c939d;
        font-size: 15px;

    }

    .create_tenant_main {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-bottom: 50px;
    }

    .create_tenant_content {
        flex: 1 1;
    }


</style>

<style>
    .el-pagination {
        padding-top: 10px;
    }

    .el-icon-refresh-right {
        font-size: 23px;
        font-weight: 400;
        color: #8c939d;
    }

    .shaixuan .el-button {
        margin-left: 10px;
        /*display:flex;*/
    }

    .sx_input .el-input {
        padding-top: 5px;
        padding-bottom: 15px;
    }

    .sx_selector {
        width: 100%;
    }

    .el-drawer__header {
        text-align: left;
        font-size: 20px;
        font-weight: 600;

    }

    .create_tenant_footer .el-button {
        margin-left: 40px;
        margin-right: 40px;
        width: 120px;
    }

    .el-drawer {
        outline: none;
    }

    .el-drawer__close-btn {
        outline: none;
        /*padding: 10px;*/
        font-size: 25px;

    }

    .el-drawer__close-btn:hover {
        background: bisque;
        color: red;
    }

    .el-pager li.active {
        border: 1px solid #409EFF;
    }

    .el-pager li {
        min-width: 28px;
    }
</style>


