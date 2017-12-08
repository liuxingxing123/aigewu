<template>
    <div class="backManage">
        <serch v-on:serchdata="serchdatas"></serch>
        <div>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        label="商品信息">
                </el-table-column>
                <el-table-column
                        label="数量">
                </el-table-column>
                <el-table-column
                        label="订单金额">
                </el-table-column>
                <el-table-column
                        label="下单时间">
                </el-table-column>
                <el-table-column
                        label="买家">
                </el-table-column>
                <el-table-column
                        label="返现金额">
                </el-table-column>
            </el-table>
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
    import serch from '../../../serchBox/serch.vue';
    export default {
        data() {
            return {
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
                }]
            }
        },
        methods: {
            serchdatas:function (data) {
                console.log("222222"+data);
            }
        },
        components: {
            serch
        }
    }
</script>

<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .demo-table-expand .el-form-item[data-v-5441202c]{
        width: 17%;
    }
</style>