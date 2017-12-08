<template>
  <el-container>
    <el-row :gutter="0" class="mune">
      <el-col :span="4" :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
        <leftmenu :iconList="iconList" :listText="listText" :linkto="linkto"></leftmenu>
      </el-col>
      <el-col :span="20" :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
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
                iconList:["icon-ddgl","icon-ht","icon-zl","",""],
                listText:["订单管理","合同模板","质量说明","",""],
                linkto:["/orderManage","/contractManage","/qualityManage","",""]
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

</style>
