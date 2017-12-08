<template>
  <el-container>
    <el-row :gutter="0" class="mune">
      <el-col :span="4" :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
        <leftmenu :iconList="iconList" :listText="listText" :linkto="linkto"></leftmenu>
      </el-col>
      <el-col :span="20" :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
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
                linkto:["/createOrderManage","/contractsManage","/qualitysManage","",""]
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
