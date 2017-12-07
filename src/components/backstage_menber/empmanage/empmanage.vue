<template>
    <div>
        <topmenu ref="topmenu" :menus="menus" :routerlink="routerlink"></topmenu>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import topmenu from '../../topmenu/topmenu.vue';
export default {
    data(){
        return{
            menus:["会员管理","岗位管理","签约业务员","岗位结构"],
            routerlink:["/staffManage","/postManage","/salesmanManage","/poststructureManage"]
        }
    },
    components:{
        topmenu
    }
};
</script>

<style>

</style>