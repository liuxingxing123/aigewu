<template>
    <div class="purchaseManage">
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
                tableTitle: ["产品图", "订单号", "产品编号", "产品名称", "生产数量"],
            }
        },
        methods: {
            serchdatas: function (data) {
                console.log("222222" + data);
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