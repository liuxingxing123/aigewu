<template>
    <div class="leftMenu">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo leftmenuUl" :collapse="isCollapse">
            <el-menu-item index="1" style="padding-left: 10px;">
                <router-link v-bind:to="linkto[0]" class="routerA">
                    <div> <i :class="iconList[0]"></i>{{listText[0]}}</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="2" style="padding-left: 10px;">
                <router-link v-bind:to="linkto[1]" class="routerA">
                    <div> <i :class="iconList[1]"></i>{{listText[1]}}</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="3" style="padding-left: 10px;">
                <router-link v-bind:to="linkto[2]" class="routerA">
                    <div> <i :class="iconList[2]"></i>{{listText[2]}}</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="4" style="padding-left: 10px;">
                <router-link v-bind:to="linkto[3]" class="routerA">
                    <div> <i :class="iconList[3]"></i>{{listText[3]}}</div>
                </router-link>
            </el-menu-item>
            <el-menu-item index="5" style="padding-left: 10px;">
                <router-link v-bind:to="linkto[4]" class="routerA">
                    <div> <i :class="iconList[4]"></i>{{listText[4]}}</div>
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: {
            iconList: {
                type: Array,
                default() {
                    return [
                        {
                        }
                    ];
                }
            },
            listText: {
                type: Array,
                default() {
                    return [
                        {
                        }
                    ];
                }
            },
            linkto: {
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
                isCollapse: false,
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
    .leftMenu{
        padding-top: 30px;
    }
    .mune .leftMenu .routerA{
        font-size: 1em;
        color: #333;
    }
    .leftmenuUl {
        overflow: hidden;
    }
    .el-radio-button:first-child .el-radio-button__inner{
        padding: 12px;
        margin-right: 20px;
    }
    .el-radio-button:last-child .el-radio-button__inner{
        padding: 12px;
        margin-right: 20px;
    }
</style>