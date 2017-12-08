<template>
    <div class="ordersManage">
        <div class="orderHeader">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <div>
                    <el-form-item>
                        <el-select v-model="value" placeholder="请选择">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="">
                        <el-input v-model="formInline.user" placeholder="请输入内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </div>
                <el-form-item label="单号">
                    <el-input v-model="formInline.user" placeholder="单号"></el-input>
                </el-form-item>
                <el-form-item label="商品id">
                    <el-input v-model="formInline.user" placeholder="商品id"></el-input>
                </el-form-item>
                <el-form-item label="卖家">
                    <el-input v-model="formInline.user" placeholder="卖家"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="orderTable">
            <div>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">全部订单</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">待确认</el-button>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">待付款</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">待生产</el-button>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">待包装</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">待发货</el-button>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">待收货</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">待评价</el-button>
                </el-badge>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">订单进程提醒</el-button>
                </el-badge>
            </div>
            <el-table
                    :data="tableData5"
                    style="width: 100%">
                <el-table-column
                        label="订单号："
                        prop="date">
                </el-table-column>
                <el-table-column
                        label="">
                </el-table-column>
                <el-table-column
                        label="">
                </el-table-column>
                <el-table-column
                        label="">
                </el-table-column>
                <el-table-column
                        label="">
                </el-table-column>
                <el-table-column
                        label="订单详情">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                tableData: [{
                }],
                tableData5: [{
                    pronews: '订单号：',
                    num: '图片',
                    money: '江浙小吃、小吃零食',
                    time: '荷兰优质淡奶，奶香浓而不腻',
                    sell: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    backMoney: '订单详情'
                }],
                options: [{
                    value: '选项1',
                    label: '待确认'
                }, {
                    value: '选项2',
                    label: '待付款'
                }, {
                    value: '选项3',
                    label: '待生产'
                }, {
                    value: '选项4',
                    label: '待包装'
                }, {
                    value: '选项5',
                    label: '待发货'
                },{
                    value: '选项5',
                    label: '待评价'
                }],
                value: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .orderHeader{
        margin-top: 20px;
    }
    .el-badge{
        margin: 0 20px;
    }
</style>