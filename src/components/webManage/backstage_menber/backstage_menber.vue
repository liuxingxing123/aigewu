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
        iconList:["icon-yggl","icon-jfgl","icon-mp","icon-grzl",""],
        listText:["员工管理","积分管理","客户名片","个人资料",""],
        linkto:["/staffManage","/integralm","/cardManage","/personalManage",""]
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
  .centerBox{
    padding: 0 20px;
  }
  .formBox{
    width: 40%;
    margin-top: 20px;
  }
</style>
