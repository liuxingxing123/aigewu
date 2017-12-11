<template>
	<div class="admin">
		<el-container>
		  <el-container class="adminheader">
		  	<el-header >后台管理</el-header>
		  </el-container>
		  <el-container class="hahaha">
		    <el-aside style="width:240px;box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137);height:100%;background:#eee" class="elslide">
		     <el-menu
      default-active="1"
      class="el-menu-vertical-demo inner-container" 
     >
      <router-link to="/adminstystemcontrol">
      <el-menu-item id="target" index="1" @click="handleonceclick">
        <i class="el-icon-menu"></i>
        <span slot="title">后台管理</span>
      </el-menu-item></router-link>
    
     <router-link to="/audit">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">开通审核</span>
      </el-menu-item></router-link>

       <router-link to="/signup">
      <el-menu-item index="3">
        <i class="el-icon-menu"></i>
        <span slot="title">平台签约业务员</span>
      </el-menu-item></router-link>

       <router-link to="/score">
      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">返现积分</span>
      </el-menu-item></router-link>

       <router-link to="/advertising">
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">广告设定</span>
      </el-menu-item></router-link>

       <router-link to="/live">
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">直播审核</span>
      </el-menu-item></router-link>

       <router-link to="/shoping">
      <el-menu-item index="7">
        <i class="el-icon-menu"></i>
        <span slot="title">积分商城</span>
      </el-menu-item></router-link>
    </el-menu>
		    	
		    </el-aside>
		    <el-main>
		    	<router-view></router-view>
		    	<div v-if="nana">
		    		<adminstystemcontrol></adminstystemcontrol>
		    	</div>
		    </el-main>
		  </el-container>
		</el-container>
	</div>
</template>

<script>
import adminstystemcontrol from '@/components/manageWebManage/adminstystemcontrol/adminstystemcontrol';
	export default {
		data(){
			return {
				nana:false
			}
		},
		components:{
			adminstystemcontrol
		},
		created(){
			this.handleonceclick()
		},
		updated: function () {
			  this.handleonceclick()
			},
		methods:{
			handleonceclick(){
				let url = window.location.href;
				
				let bool = url.indexOf('Admin');
				if(bool!==-1){
					this.nana = true
				}else{
					this.nana = false
				}
			}
		}
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
		width: 90%;
		position: fixed;
		left:5%;
		top: 60px;
		bottom: 0;
		background:#eee;
	}
	.inner-container{
		background:#eee;
		color:#000;

	}
	.elslide::-webkit-scrollbar {
    display: none;
}

</style>