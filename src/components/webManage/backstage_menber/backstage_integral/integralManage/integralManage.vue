<template>
    <div class="integralManage">
        <div class="integralAllBox">
            <div class="integralAll">现有积分：<span>2009</span></div>
            <el-button type="primary">点击充值</el-button>
        </div>
        <serch v-on:serchdata="serchdatas"></serch>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["操作id", "使用积金", "使用时间", "使用位置","所在地方", "剩余积金"],
            }
        },
        methods: {
            serchdatas:function (data) {
                console.log("222222"+data);
            }
        },
        components: {
            serch,
            tableManage
        }
    }
</script>

<style>
    .integralAllBox{
        margin-top: 20px;
    }
    .integralAll{
        float: left;
        margin-right: 10px;
        color: #545151;
        margin-top: 10px;
    }
</style>