<template>
    <div class="mune">
        <el-row :gutter="0" class="mune">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-col :span="6" :xs="6" :sm="2" :md="2" :lg="2" :xl="2" style="outline-color: transparent">
                    <el-menu-item index="1"><router-link v-bind:to="routerlink[0]" class="routerA">{{menus[0]}}</router-link></el-menu-item>
                </el-col>
                <el-col :span="6" :xs="6" :sm="2" :md="2" :lg="2" :xl="2" style="outline-color: transparent">
                    <el-menu-item index="2">
                        <router-link v-bind:to="routerlink[1]" class="routerA">{{menus[1]}}</router-link>
                    </el-menu-item>
                </el-col>
                <el-col :span="6" :xs="6" :sm="2" :md="2" :lg="2" :xl="2" style="outline-color: transparent">
                    <el-menu-item index="3">
                        <router-link v-bind:to="routerlink[2]" class="routerA">{{menus[2]}}</router-link>
                    </el-menu-item>
                </el-col>
                <el-col :span="6" :xs="6" :sm="2" :md="2" :lg="2" :xl="2" style="outline-color: transparent">
                    <el-menu-item index="4">
                        <router-link v-bind:to="routerlink[3]" class="routerA">{{menus[3]}}</router-link>
                    </el-menu-item>
                </el-col>
            </el-menu>
        </el-row>

        <div class="line"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            menus: {
                type: Array,
                default() {
                    return [
                        {
                        }
                    ];
                }
            },
            routerlink: {
                type: Array,
                default() {
                    return [
                        {
                        }
                    ];
                }
            }
        },
        data() {
            return {
                activeIndex: '1',
                indexs:1
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key);
            }
        }
    }
</script>

<style>
    .mune .el-menu-item, .el-submenu__title{
        padding: 0 5px;
    }
    .mune .routerA{
        font-size: 0.3em;
    }
    .mune .el-menu-item{
        height: 50px;
        line-height: 50px;
    }
</style>