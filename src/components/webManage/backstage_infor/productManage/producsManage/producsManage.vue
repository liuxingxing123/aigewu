<template>
    <div class="producsManage">
        <serch v-on:serchdata="serchdatas"></serch><el-button type="primary" class="addBtn">添加产品</el-button>
        <tableManage :tableTitle="tableTitle"></tableManage>
    </div>
</template>

<script type="text/ecmascript-6">
    import serch from '../../../serchBox/serch.vue';
    import tableManage from '../../../tableManage/tableManage.vue';
    export default {
        data() {
            return {
                tableTitle: ["商品图片", "产品名称", "产品分类", "产品价格", "产品销量", "产品库存", "产品评论"],
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