<template>
    <div class="financesManage">
        <div class="infoHeade">
            <div class="block">
                <el-date-picker
                        v-model="value6"
                        type="daterange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
                <el-button type="primary" style="margin: 0 20px;">生成公司销售总揽</el-button>
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" style="margin: 0 20px;">生成业务员销售总揽</el-button>
            </div>
        </div>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                value6: '',
                options: [{
                    value: '选项1',
                    label: '业务员1'
                }, {
                    value: '选项2',
                    label: '业务员2'
                }, {
                    value: '选项3',
                    label: '业务员3'
                }, {
                    value: '选项4',
                    label: '业务员4'
                }, {
                    value: '选项5',
                    label: '业务员5'
                }],
                value: '',
                tableTitle: ["订单号", "产品", "数量", "单价", "销售额", "返现", "业务员"],
            }
        },
        methods: {
            serchdatas:function (data) {
                console.log("222222"+data);
            }
        },
        components: {
            tableManage
        }
    }
</script>

<style>
    .block{
        margin-top: 20px;
    }
</style>