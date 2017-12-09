<template>
	<div>
		<el-row>
		  <el-col  :span="24"><div class="grid-content vcontenttitle bg-purple-dark">{{vcontent.title}}</div></el-col>
		</el-row>
			<el-row>
			  <el-col class="positionleft" :span="4" ><div id="elcol"  ref="elcol" class="grid-content contentleft bg-purple" :data-id="vcontent.contentleft.id"  @mouseenter="handleadvertshow"><img   :src="vcontent.contentleft.imgSrc" :title="vcontent.contentleft.text" >
			  </div>
				<div class="leftadvertising" @mouseleave="handleadverthide"   v-show="leftadvertising == vcontent.contentleft.id">{{vcontent.contentleft.text}}</div>
			  </el-col>
 			  <el-col :span="20"><div class="grid-content contentright bg-purple-light" @mouseleave="handleleave">
 			  	<div class="item"  v-for="(item,i) in vcontent.contentright" :key="i" @click="handlegopage(item,$event)">
					<div class="itemimg" :data-id="item.id"  v-on:mouseenter="handleshow"><img  :src="item.imgSrc" width="220" height="154"></div>
					 <a :href="href" target="_self" style="display:inline-block">
					<div class="canshow" v-show="currentItem ==item.id">{{item.title}}</div>
					</a>
				</div>
 			  </div></el-col>
			</el-row>
	</div>

</template>
<script>

	export default {
		props:{
			vcontent:{
				type:Object
			},
			href:{
				type:String
			}
		},
		data(){
			return {
				 currentItem:null,
				 leftadvertising:null
			}
		},
		created(){
		   	let elcol = this.$refs.elcol ;
		},
		methods:{
			handleshow(e){
				 let targetid = e.currentTarget.dataset.id;
				 this.currentItem = targetid;
			},
			handlegopage(db,e){
						 let targetnewsid = db.id;
     					window.localStorage.setItem('classid', targetnewsid);
			},
			handleleave(){
				this.currentItem = null;
			},
			handleadvertshow(e){
			    // var x=e.clientX;
			    // var y=e.clientY;
			    // var divx1 = elcol.offsetLeft;
			    // var divy1 = elcol.offsetTop;
			    // var divx2 = elcol.offsetLeft + elcol.offsetWidth;
			    // var divy2 = elcol.offsetTop + elcol.offsetHeight;
			    // if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
			    let targetid = e.currentTarget.dataset.id;
				 this.leftadvertising = targetid;
			},
			handleadverthide(){
				this.leftadvertising = null;
			}
		}

	}

</script>
<style scoped>
	.vcontenttitle{
		line-height: 50px;
		font-size: 30px;
		margin: 10px 0;
		background: rgba(242,242,242,1);
		color: #000;
		padding-left: 14px;
		font-weight: 700;
	}
	.contentleft{
		padding: 10px;
		cursor: pointer;
	}
	.positionleft{
		position: relative;
	}
	.opacity{
		width: 100%;
		position: absolute;
		left: 0;
		top:10px;
		bottom:10px;
		z-index: 2;
	}
	 .leftadvertising{
		width: 100%;
		position: absolute;
		left: 0;
		top:10px;
		bottom:10px;
		line-height: 1.2;
		padding: 6px;
		box-sizing: border-box;
		text-indent: 2em;
		background: rgba(0,0,0,.5);
		color: white;
		font-size: 14px;
	}
	.contentleft img{
		display: black;
		width: 100%;
		height: 318px;
	}
	.contentright{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.item{
		width: 24%;
		position: relative;
		height: 154px;
		margin-top: 10px;
		cursor: pointer;
		overflow: hidden;
	}
	.itemimg{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.itemimg img{
		width: 100%!important;
	}
	.item .canshow{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height:100%;
		line-height: 1.2;
		padding: 6px;
		box-sizing: border-box;
		text-indent: 2em;
		background: rgba(0,0,0,.5);
		color: white;
		font-size: 14px;
	}
</style>