<template>
    <div class="cardManage">
        <div class="cardserchbox">
            <serch v-on:serchdata="serchdatas"></serch></br>
        </div>
        <serchcondition v-on:serchcondition="serchcondition"></serchcondition>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import serchcondition from '../../../serchcondition/serchcondition.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["id", "姓名", "职位", "公司名称", "公司网址", "公司主营", "合作订单"],
            }
        },
        methods: {
            serchdatas:function (data) {
                console.log("222222"+data);
            },
            serchcondition:function (data) {
                console.log("------"+data);
            }
        },
        components: {
            serch,
            tableManage,
            serchcondition
        }
    }
</script>

<style scoped>
    .cardserchbox{
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }
</style>