<template>
    <div class="postManage">
        <serch v-on:serchdata="serchdatas"></serch><el-button type="primary" class="addBtn">添加岗位</el-button>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["id", "岗位名称", "所属部门", "备注"],
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