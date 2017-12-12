<template>
	<div class="adminstystemcontrol">
		<div class="contentbox">
			<el-row>
			  <el-col :span="3"><div class="grid-content bg-purple canchange">搜索条件：</div></el-col>
			  <el-col :span="6"><div class="grid-content bg-purple-light">
			  		<el-select v-model="value4" clearable placeholder="请选择" @change="handlesearch">
				    <el-option
				      v-for="item in options"
				      :key="item.value"
				      :label="item.label"
				      :value="item.value">
				    </el-option>
				  </el-select>
			  </div></el-col>
			</el-row>
			<el-row style="margin-top:10px">
			  <el-col :span="3"><div class="grid-content bg-purple canchange">筛选条件：</div></el-col>
			  <el-col :span="16"><div class="grid-content bg-purple-light">
			  	<el-radio-group v-model="radio.radio3" @change="handlechance">
			      <el-radio-button label="全部"></el-radio-button>
			      <el-radio-button label="普通入驻企业"></el-radio-button>
			      <el-radio-button label="年费入驻企业"></el-radio-button>
			      <el-radio-button label="积金返现入驻企业"></el-radio-button>
			    </el-radio-group>
			  </div></el-col>
			</el-row>
			<el-row class="maincontent">
			  <el-col :span="2" v-for="item in contents" :key="this" class="item"><div class="grid-content bg-purple-dark">{{item}}</div>
			  </el-col>
			</el-row>
			<el-row class="maincontent1 maincontent" v-for="item in contentObj">
				 <el-col :span="2" class="checked"><div class="grid-content bg-purple-light">
				 	<el-checkbox v-model="item.checked"></el-checkbox>
				 </div>
			  </el-col>
			  <el-col :span="2" v-for="items in item.contentList" :key="this" class="item"><div class="grid-content bg-purple-light">{{items}}</div>
			  </el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
		      return {
		        options: [{
		          value: '选项1',
		          label: '未通过'
		        }, {
		          value: '选项2',
		          label: '待审核'
		        }, {
		          value: '选项3',
		          label: '已通过'
		        }],
		        value4: '',
		        radio:{
		        radio3: '全部',
		        radio4: '普通入驻企业',
		        radio5: '年费入驻企业',
		        radio6: '积金返现入驻企业'
		      	},
		      
		      	contents:['选择','企业ID','企业名称','企业所在地','主营行业','成立年份','公司规模','注册资本','经营模式','申请状态'],
		      	contentObj:[
		      		{			
		      			checked:false,
		      			contentList:['1','成都丰煜科技','金牛区交大路','互联网建设','成立年份','4-5','100万','自营','未开通']
		      		}
		      	]
		      }
		      
		    },
		created(){
			this.initdata()
		},
		methods:{
			handlesearch(val){
				console.log(val)
				//通过条件筛选将数据渲染出来
			},
			handlechance(val){
				console.log(val)
				//通过条件筛选将数据渲染出来
			},
			initdata(){
				//发送请求   将所有数据拿到   缓存在当前data数据里面    并且初始化BScroll
				// this.$nextTick(() => {
				// 	this._initScroll();
				// })
			},
			
		}
	}
</script>

<style scoped>
	.adminstystemcontrol{
		width:100%;
		height:100%;
	}
	.canchange{
		text-align:center;
		line-height:40px;
		color:#000;

	}
	.el-radio-button{
		    margin-right: 10px;
		    border-radius: 20px;
		    overflow: hidden;
	}
	.maincontent{
		font-size:14px;
		line-height:40px;
		text-align:center;
		color: #000;
		margin-top:10px;
		width: 100%;
		background: #99a9bf;
		display: flex;
		justify-content: space-around;
	}
	.maincontent .item{
		width:11%;
	}
	.maincontent1{
		background:#eee;
	}
	.maincontent .item:first-child{
		font-weight: 700;
	}
	.bg-purple-dark {
	    background: #99a9bf;
	  }
</style>