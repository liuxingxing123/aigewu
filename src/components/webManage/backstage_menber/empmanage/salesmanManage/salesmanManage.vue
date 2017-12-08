<template>
    <div class="salesmanManage">
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
                tableTitle: ["id", "姓名", "采购等级", "职位","所在公司", "签约时间", "联系电话", "采购荣誉", "返现比例", "累积返现"],
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