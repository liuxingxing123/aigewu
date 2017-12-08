<template>
    <div class="staffManage">
        <serch v-on:serchdata="serchdatas"></serch><el-button type="primary" class="addBtn">添加员工</el-button>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["id", "姓名", "职位", "所在部门", "入职时间", "工作电话", "私人电话", "荣誉特长"],
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
    .addBtn{
        margin-top: 20px;
    }
</style>