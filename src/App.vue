<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
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
