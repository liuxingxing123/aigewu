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
        iconList:["icon-yggl","icon-jfgl","icon-mp","icon-grzl",""],
        listText:["员工管理","积分管理","客户名片","个人资料",""],
        linkto:["/empmanages","/integral","/card","/personal",""]
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
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }
  .mune{
    width: 100%;
  }
</style>
