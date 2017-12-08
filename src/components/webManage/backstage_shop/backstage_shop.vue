<template>
    <el-container>
        <el-row :gutter="0" class="mune">
            <el-col :span="4" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                <leftmenu :iconList="iconList" :listText="listText" :linkto="linkto"></leftmenu>
            </el-col>
            <el-col :span="20" :xs="21" :sm="21" :md="21" :lg="21" :xl="21" class="centerBox">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </el-container>
</template>

<script type="text/ecmascript-6">
    import leftmenu from '../leftmenu/leftmenu.vue';
    export default {
        data() {
            return {
                iconList:["icon-gsgl","icon-tjcp","icon-zb","icon-al","icon-xw"],
                listText:["公司管理","推荐产品","公司直播","成功案例","公司新闻"],
                linkto:["/scompanysManage","/recommendsManage","/livesManage","casesManage","newssManage"]
            };
        },
        methods: {
        },
        components: {
            leftmenu
        }
    };
</script>

<style>
    .centerBox{
        padding: 0 20px;
    }
</style>
