<template>
    <div class="classificationManage">
        <serch v-on:serchdata="serchdatas"></serch><el-button type="primary" class="addBtn">添加分类</el-button>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["分类名称", "备注"],
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

</style>