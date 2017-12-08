<template>
    <div class="serchcondition">
        <span style="float: left;margin-top: 10px">筛选条件：</span>
        <el-button @click="serchcondition">全部</el-button>
        <el-button>已合作用户</el-button>
        <el-button>未合作用户</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
            }
        },
        methods: {
            serchcondition:function (data) {
                this.$emit('serchcondition',data);
            }
        }
    };
</script>

<style>
    .serchcondition{
        margin-bottom: 20px;
    }
</style>