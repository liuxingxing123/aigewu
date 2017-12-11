<template>
  <div class="vheader">
   			<el-container>
              <el-header>
              	<div class="user">
              		<span class="username">用户名 :127372173712 </span>
              		<el-button type="primary"  @click="login" plain>登录</el-button>
              		<el-button type="primary"  @click="register" plain>注册</el-button>
              		 <a  href="/Admin" target="_self"><el-button style="margin-left:10px" type="primary" plain>平台管理<i class="el-icon-d-arrow-right"></i></el-button></a>
              	</div>
              </el-header>
			    <el-main>
				<el-row type="flex" class="row-bg">
				  <el-col :span="5" class="menu-left">
				  <div class="grid-content bg-purple">
					  	<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
					  <el-radio-button :label="false" >展开</el-radio-button>
					  <el-radio-button :label="true">收起</el-radio-button>
					</el-radio-group>
					<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
					  <el-submenu index="1">
					    <template slot="title">
					      <i class="el-icon-location"></i>
					      <span slot="title">首页菜单</span>
					    </template>
					  </el-submenu>
					  <el-submenu index="2">
					   <template slot="title">
					    <i class="el-icon-menu"></i>
					    <span slot="title">一级菜单</span>
					     </template>
					      <el-menu-item-group>
					      <el-menu-item index="2-1">二级菜单</el-menu-item>
					      <el-menu-item index="2-2">二级菜单</el-menu-item>
					      <el-menu-item index="2-3">二级菜单</el-menu-item>
					      <el-menu-item index="2-4">二级菜单</el-menu-item>
					      <el-menu-item index="2-5">二级菜单</el-menu-item>
					    </el-menu-item-group>
					  </el-submenu>

					  <el-submenu index="3">
					   <template slot="title">
					    <i class="el-icon-setting"></i>
					    <span slot="title">一级菜单</span>
					     </template>
					      <el-menu-item-group>
					      <el-menu-item index="3-1">二级菜单</el-menu-item>
					      <el-menu-item index="3-2">二级菜单</el-menu-item>
					      <el-menu-item index="3-3">二级菜单</el-menu-item>
					      <el-menu-item index="3-4">二级菜单</el-menu-item>
					      <el-menu-item index="3-5">二级菜单</el-menu-item>
					    </el-menu-item-group>
					  </el-submenu>

					  <el-submenu index="4">
					   <template slot="title">
					    <i class="el-icon-tickets"></i>
					    <span slot="title">一级菜单</span>
					     </template>
					      <el-menu-item-group>
					      <el-menu-item index="4-1">二级菜单</el-menu-item>
					      <el-menu-item index="4-2">二级菜单</el-menu-item>
					      <el-menu-item index="4-5">二级菜单</el-menu-item>
					    </el-menu-item-group>
					  </el-submenu>

					  <el-submenu index="5">
					   <template slot="title">
					    <i class="el-icon-printer"></i>
					    <span slot="title">一级菜单</span>
					     </template>
					      <el-menu-item-group>
					      <el-menu-item index="5-1">二级菜单</el-menu-item>
					      <el-menu-item index="5-2">二级菜单</el-menu-item>
					    </el-menu-item-group>
					  </el-submenu>
					 
					</el-menu>
					  </div>
				  </el-col>
				  <el-col :span="14"><div class="grid-content bg-purple-light">
						    <el-carousel trigger="click" height="450px">
						      <el-carousel-item v-for="item in listImg" :key="this">
						        <h3><img :src="item.imgSrc" width="100%" height="450"></h3>
						      </el-carousel-item>
						    </el-carousel>
				  </div></el-col>
				  <el-col :span="5"><div class="grid-content bg-purple">
				  	<el-col>
					    <el-card>
					      <img src="./hamburger.50e4091.png" width="100%" class="image">
					      <div class="title">
					        <span>{{menurighttitle}}</span>
					      </div>
					      <div class="content">{{menurightcontent}}</div>
					    </el-card>
					</el-col>
				  </div></el-col>
				</el-row>
			    </el-main>
            </el-container>

			<el-dialog title="登录" :visible.sync="loginFormVisible">
			  <el-form :model="form1">
			    <el-form-item class="loginusername" label="用户名" :label-width="formLabelWidth">
			      <el-input v-model="form1.name" auto-complete="off" placeholder="请输入用户名" clearable @blur="handlelogin" @focus="hadnleloginfocus"></el-input>
			    </el-form-item>
			    <span class="user_error_info">{{loginuserinfo}}</span>
			    <el-form-item label="密码" :label-width="formLabelWidth">
			      <el-input v-model="form1.pwd" :type="pwd" auto-complete="off" placeholder="请输入密码" @blur="handlepwduser"  @focus="handlepwduserfocus">
			      	<i ref="pwd" class="el-icon-view icon_pwd" slot="suffix" @click="handlepwd"></i>
			      </el-input>
			    </el-form-item>
			    <span class="user_error_info">{{loginpwduserinfo}}</span>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="loginFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="loginsubmit">确 定</el-button>
			  </div>
			</el-dialog>




            <el-dialog title="用户注册" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item label="用户名" :label-width="formLabelWidth">
			      <el-input v-model="form.name" placeholder="请输入手机号" auto-complete="off"  clearable @change="handlechange" @focus="handlefocus"></el-input>
			    </el-form-item>
			    <span class="user_error_info">{{usererrorinfo}}</span>
			    <el-form-item label="密码" :label-width="formLabelWidth">
			      <el-input  :type="pwd" v-model="form.pwd" placeholder="请输入密码" auto-complete="off" @change="handlepwdchange"  @focus="handlepwdfocus">
			      	<i ref="pwd" class="el-icon-view icon_pwd" slot="suffix" @click="handlepwd"></i>
			      </el-input>
			    </el-form-item>
			    <span class="user_error_info">{{pwderrorinfo}}</span>
			    <el-form-item label="确认密码" :label-width="formLabelWidth">
			      <el-input :type="remarkpwd" v-model="form.remarkpwd" placeholder="请确认密码" auto-complete="off" @change="hadnleremarkpwdchange" @focus="hadnleremarkpwdfocus">
			      	<i ref="remarkpwd" class="el-icon-view icon_remarkpwd" slot="suffix" @click="handleremarkpwd"></i>
			      </el-input>
			    </el-form-item>
			    <span class="user_error_info">{{remarkpwderrorinfo}}</span>
			     <el-form-item label="验证码" :label-width="formLabelWidth">
			      <el-input  v-model="form.yzm" placeholder="请确认右侧验证码" auto-complete="off" @change="handleyzm" @focus="handleyzmfocus" >
			      	 <el-button class="yzm" :style="{color:yzmcolor}" ref="yzm" @click="changeyzm" slot="append">{{yanzhengma}}</el-button>
			      </el-input>
			    </el-form-item>
			    <span class="user_error_info">{{yzmerrorinfo}}</span>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			    <el-button @click="dialogFormVisible = false">暂不注册</el-button>
			    <el-button type="primary" @click="handlesubmit">注册</el-button>
			  </div>
			</el-dialog>
  </div>
</template>

<script>
import swiper from '@/components/managewebhome/swiper/swiper';
import BScroll from 'better-scroll';
export default {
	data(){
		return {
			adminshow:false,
			pwd:"password",
			remarkpwd:"password",
			pwdcount:0,
			remarkpwdcount:0,
			maxlength:11,
			usererrorinfo:"",
			pwderrorinfo:"",
			remarkpwderrorinfo:"",
			loginuserinfo:"",
			loginpwduserinfo:"",
			yzmerrorinfo:"",
			yanzhengma:"",
			submitArr:[],
			submitObj:{},
			loginArr:[],
			loginObj:{},
			yzmcolor:"black",
			loginFormVisible:false,
			dialogFormVisible: false,
			 form: {
	          name: '',
	          pwd: '',
	          remarkpwd:"",
	          yzm:""
	        },
	        form1:{
	        	name:'',
	        	pwd:''
	        },	listImg:[
				{
					imgSrc:'src/components/managewebhome/swiper/1.jpg',text:"1111111",id:0

				},
				{
					imgSrc:'src/components/managewebhome/swiper/2.jpg',text:"22222",id:1

				},
				{
					
					imgSrc:'src/components/managewebhome/swiper/3.jpg',text:"3333333",id:2
				},
				{
					
					imgSrc:'src/components/managewebhome/swiper/4.jpg',text:"44444444444",id:3
				},
				{
					imgSrc:'src/components/managewebhome/swiper/1.jpg',text:"1111111",id:4
				}
				],
	        formLabelWidth: '80px',
	        isCollapse: false,
	        menurighttitle:"好吃的汉堡包",
	        menurightcontent:"如果要兼容 PC 其他浏览器（IE、Firefox 等），国外一位才人 John Kurlak 也研究出了一种办法。在容器外面再嵌套一层 overflow:hidden 内部内容再限制尺寸和外部嵌套层一样，就变相隐藏了。"
		}
	},
	created(){
		this.yzmcolor = this.randomColor();
		this.yanzhengma = this.randomyzm();
	},
	components:{
		swiper
	},
	methods:{
		
		 handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      },
		handlelogin(e){
			let val = e.target.value;
			if(val.length!==0){
				this.loginuserinfo = ""
				this.loginArr.push(true)
				this.loginObj.username = val
			}else{
				this.loginuserinfo = "用户名不能为空"
			}
		},
		hadnleloginfocus(){
			this.loginuserinfo = ""
		},
		handlepwduser(e){
			let val = e.target.value;
			if(val.length!== 0){
				this.loginpwduserinfo = ""
				this.loginArr.push(true)
				this.loginObj.pwd = val
			}else{
				this.loginpwduserinfo = "密码不能为空"
			}
		},
		handlepwduserfocus(){
			this.loginpwduserinfo = ""
		},
		login(){
			this.loginFormVisible = true;
		},
		loginsubmit(){
			if(this.loginArr.length === 2){
				console.log("此时将对象中的用户名密码发送给后台  得到用户是否注册    如果没有 提醒注册 如果有  则直接提示登录成功  并跳转到某个网页");
				console.log(this.loginObj)
			}else{
				console.log("请将登陆表单录入完成");
				return ;
			}
		},
		randomColor(){
			let color1 = Math.floor(Math.random()*106)+150;
			let color2 = Math.floor(Math.random()*106)+150;
			let color3 = Math.floor(Math.random()*106)+150;
			let a = Math.random()*0.5+0.5;
			let rgba = "rgba("+color1+","+color2+","+color3+","+a+")";
			return rgba;
		},
		changeyzm(){
 			this.yzmcolor = this.randomColor();
            this.yanzhengma = this.randomyzm();
		},
		randomyzm(){
			let yzmcount = 0
            let str = ""
            while (yzmcount < 4){
                // 生成 48 ~ 122 之间的随机数字
                var rand = Math.floor(Math.random() * 75) + 48;
                // 判断是否在合理范围内
                if (rand >= 48 && rand <= 57
                    || rand >= 65 && rand <= 90
                    || rand >= 97 && rand <= 122) {
                    yzmcount++;
                    str += String.fromCharCode(rand);
                }
            }
            return str;
		},
		register(){
			this.dialogFormVisible=true;
		},
		handlepwd(e){
			if(this.pwdcount%2 === 0){
				this.pwd = "text"
				this.$refs.pwd.style.color="green"
			}else{
				this.pwd = "password"
				this.$refs.pwd.style.color="#b4bccc"
			}
			this.pwdcount++;
		},
		handleremarkpwd(){
			if(this.remarkpwdcount%2 === 0){
				this.remarkpwd = "text"
				this.$refs.remarkpwd.style.color="green"
			}else{
				this.remarkpwd = "password"
				this.$refs.remarkpwd.style.color="#b4bccc"
			}
			this.remarkpwdcount++;
		},
		handlefocus(){
			this.usererrorinfo="";
		},
		handlechange(val){
			if(val.length!==11){
				this.usererrorinfo="请输入一个11位的手机号码才能注册"
			}else{
				this.usererrorinfo="";
				//发请求到后太判断是否注册
				this.submitArr.push(true)
				this.submitObj.username = val
			}
			
		},
		handlepwdchange(val){
			if(val.length<10 || val.length>16){
				this.pwderrorinfo = "密码长度请控制在10到16位"
			}else if(!/^[A-Za-z0-9]+$/.test(val)){
				this.pwderrorinfo = "密码必须由数字、字符组成";
			}else{
				this.pwderrorinfo = "";
				this.submitArr.push(true)
				this.submitObj.pwd = val
			}
		},
		handlepwdfocus(){
			this.pwderrorinfo = "";
		},
		hadnleremarkpwdchange(){
			let bool = this.form.remarkpwd === this.form.pwd
			if(bool){
				this.remarkpwderrorinfo = "";
				this.submitArr.push(true)
			}else{
				this.remarkpwderrorinfo = "亲 两次输入的密码不一致,请校验";
			}
		},
		hadnleremarkpwdfocus(){
			this.remarkpwderrorinfo = "";
		},
		handleyzm(val){
			let _this = this;
			if(val === this.yanzhengma){
				this.yzmerrorinfo = ""
				this.submitArr.push(true)
			}else{
				this.yzmerrorinfo = "验证码错误（注意:严格区分大小写哦~）"
				setTimeout(function(){
					_this.changeyzm();
				},100);
			}
		},
		handleyzmfocus(){
			this.yzmerrorinfo = "";
		},
		handlesubmit(e){
			if(this.submitArr.length === 4){
				console.log("全部填写完成  且符合要求");
				console.log(this.submitObj)
			}
		}
	}
	
}
</script>

<style scoped>
 .el-header{
 	width: 100%;
    background:rgba(242, 242, 242, 1);
    height: 60px;
    line-height:60px;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
  .el-header .user{
  	font-size: 0;
  	height: 100%;
  }
  .el-header .user span{
	display: inline-block;
	height: 60px;
    line-height:60px;
    color: #169bd5;
  	font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }
  .el-header .user .username{
	padding-right: 40px;
  }
  .el-header .user .login{
		cursor: pointer;
		padding: 0 8px;
  }
  .el-header .user .register{
		cursor: pointer;
		padding: 0 8px;
  }
  .el-main{
  	margin-top: 60px;
  }
  .icon_pwd,.icon_remarkpwd{
  	padding-right: 10px;
  }
 .el-form-item{
 	margin-bottom:0;
 }
 .user_error_info{
 	display: block;
 	width: 100%;
 	height: 24px;
 	line-height: 24px;
 	color: red;
 	text-align: center;
 	font-size: 16px;
 }
 .yzm{
 	width: 100px;
    background: #fff;
    letter-spacing: 4px;
    font-size: 22px;
    display: inline-block;
    height: 38px;
    text-align: center;
    line-height: 38px;
    font-weight:600;
 }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
 	.el-main{
 		padding-top: 0;
 	}
 	.el-radio-group{
 		margin: 10px auto;
 	}
 	.menu-left{
 		height: 450px;
 		overflow: auto;
 	}
 	.menu-left::-webkit-scrollbar {display:none}
 	.el-card{
 		height: 450px;
 		width: 100%;
 		box-sizing: border-box;
 		padding: 10px;
 	}
   .title{
   	font-size: 18px;
   	color: black;
   	font-weight: 700;
   	line-height: 2;
   }
	.content{
		font-size: 14px;
		color: #999;
		line-height: 1.4;
		text-indent: 2rem;
	}
	
</style>
