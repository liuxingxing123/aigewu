<template>
	<div class="admin">
		<el-container>
		  <el-container class="adminheader">
		  	<el-header >后台管理</el-header>
		  </el-container>
		  <el-container class="hahaha">
		    <el-aside width="200px">
		    	<router-link to="/adminstystemcontrol">后台管理</router-link>
		    	<router-link to="/audit" >开通审核</router-link>
		    	<router-link to="/signup" >平台签约业务员</router-link>
		    	<router-link to="/score" >返现积分</router-link>
		    	<router-link to="/advertising" >广告设定</router-link>
		    	<router-link to="/live" >直播审核</router-link>
		    	<router-link to="/shoping" >积分商城</router-link>
		    </el-aside>
		    <el-main>
		    	<router-view></router-view>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.adminheader{
		background: rgba(0, 153, 255, 1);
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 1;
	}
	.adminheader .el-header{
		font-size: 24px;
		color: #fff;
		line-height: 56px;
		font-weight: 700;
	}
	.hahaha{
		margin-top:60px;
	}
</style>