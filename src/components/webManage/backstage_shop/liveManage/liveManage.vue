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
                menus:["公司直播","","",""],
                routerlink:["/livesManage","","",""]
            }
        },
        components:{
            topmenu
        }
    };
</script>

<style>

</style>