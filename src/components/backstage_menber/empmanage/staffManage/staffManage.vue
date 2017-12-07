<template>
    <div>
        <el-row :gutter="0">
            <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
                <div class="">请输入搜索条件：
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>
            </el-col>
            <el-col :xs="24" :sm="6" :md="8" :lg="9" :xl="11">
                <el-button type="primary">点击搜索</el-button>
                <el-button type="primary">添加员工</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                input: ''
            }
        }
    }
</script>

<style>

</style>