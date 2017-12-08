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
                menus:["产品编号","采购/生产","出库","库存"],
                routerlink:["/proNumManage","/purchaseManage","/libraryManage","/stocksManage"]
            }
        },
        components:{
            topmenu
        }
    };
</script>

<style>

</style>