<template>
    <div class="proNumManage">
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
                tableTitle: ["产品编号", "产品规格", "产品属性"],
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