<template>
    <el-row :gutter="0" style="margin: 30px 0px 30px 20px">
        <el-col :xs="24" :sm="7" :md="7" :lg="7" :xl="7">
            <el-row :gutter="0">
                <el-col :xs="7" :sm="7" :md="7" :lg="7" :xl="7" style="margin-top: 10px;font-size: 0.3em;">
                    请输入搜索条件：
                </el-col>
                <el-col :xs="17" :sm="17" :md="17" :lg="17" :xl="17">
                    <el-input v-model="serchinput" placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
        </el-col>
        <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11">
            <el-button type="primary" @click="serchFun">点击搜索</el-button>
        </el-col>
    </el-row>
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

</style>