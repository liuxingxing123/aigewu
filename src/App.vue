<template>
  <div id="app">
    <div class="header">
      <el-row :gutter="0" class="header">
        <el-col :span="4" :xs="0" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple indexText">会员中心</div></el-col>
        <el-col :span="16" :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <div class="grid-content bg-purple">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                     background-color="#545c64"
                     text-color="#fff"
                     active-text-color="#ffd04b">
              <el-menu-item index="1"><router-link to="/staffManage" class="routerA">会员服务</router-link></el-menu-item>
              <el-menu-item index="2"><router-link to="/producsManage" class="routerA">信息管理</router-link></el-menu-item>
              <el-menu-item index="3"><router-link to="/createOrderManage" class="routerA">交易管理</router-link></el-menu-item>
              <el-menu-item index="4"><router-link to="/scompanysManage" class="routerA">商铺管理</router-link></el-menu-item>
            </el-menu>
            <div class="line"></div>
          </div>
        </el-col>
        <el-col :span="4" :xs="0" :sm="4" :md="4" :lg="4" :xl="4"><div class="grid-content bg-purple indexText">登录人员名称</div></el-col>
      </el-row>

    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        activeIndex: '1'
      };
    },
    methods: {
    }
  };
</script>

<style>
  *{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .header{
    background-color: #545c64;
  }
  .routerA{
    text-decoration: none;
  }
  .indexText{
    line-height: 60px;
    height: 60px;
    color: #fff;
  }
  .el-menu-item, .el-submenu__title{
    padding: 0 5px;
  }
  .el-menu-item.is-active i{
    color: rgb(17, 147, 242);
  }
</style>
