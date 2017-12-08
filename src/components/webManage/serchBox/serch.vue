<template>
    <div class="serchBox">
        <span style="float: left;margin-top: 10px">请输入搜索条件：</span>
        <el-input v-model="serchinput" placeholder="请输入内容" style="float: left; width: 60%;margin: 0px 30px 0 10px;"></el-input>
        <el-button type="primary" @click="serchFun">点击搜索</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                serchinput: ''
            }
        },
        methods: {
            serchFun:function () {
                this.$emit('serchdata',this.serchinput);
            }
        }
    };
</script>

<style>
    .serchBox{
        margin-top: 20px;
        float: left;
        width: 50%;
    }
</style>