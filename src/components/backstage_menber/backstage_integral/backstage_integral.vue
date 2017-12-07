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
                menus:["积分管理","返现统计","积分商城",""],
                routerlink:["/integralm","/backManage","/integralShopManage",""]
            }
        },
        components:{
            topmenu
        }
    };
</script>

<style>

</style>