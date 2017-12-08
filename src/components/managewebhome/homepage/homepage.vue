<template>
  <div>
            <vheader></vheader>
            <el-container class="content">
            <keep-alive>
            	<el-row>
				  <el-col  :span="21" ><div id="box" ref="box" @mousemove="handlenice" @mouseleave="handleleave" class="grid-content bg-purple" >
					<div class="newsitem" v-for="(item,i) in listImg" :key="this" :data-id="item.id" @mouseenter="handleenter">
						<img :src="item.imgSrc" :alt="item.imgSrc" width="100%" height="100%">
						<div class="logoshow" v-show="currentIndex ==item.id">{{item.text}}</div>
					</div>
				  </div>
				  </el-col>
				  <el-col class="elcol" :span="3"><div class="grid-content content-right bg-purple-light">{{contentright}}</div></el-col>
				</el-row>
				</keep-alive>
            </el-container>
            <div class="f1">
            	<vcontent  :vcontent="options"></vcontent>
            </div>
            <div class="f2">
            	<vcontent  :vcontent="otheroptions"></vcontent>
            </div>
  </div>
</template>

<script>
import vheader from '@/components/managewebhome/vheader/vheader'
import vcontent from '@/components/managewebhome/content/vcontent'
let timer = null
export default {
   components:{
    vheader,
    vcontent
   },
   created(){
   	let box = this.$refs.box;this.initswiper()
   },
   methods:{
   	initswiper(){
   		clearInterval(timer)
   		timer=setInterval(()=>{
                var l=box.offsetLeft+10;
                if(l>=0){
                    l=-box.clientWidth/2;
                }
                box.style.left=l+"px";
            },500);
  	 	},
 	handleleave(){
 		this.initswiper()
 		this.currentIndex = null;
     },
     handlenice(e){
     	  var x=e.clientX;
	      var y=e.clientY;
	      var divx1 = box.offsetLeft;
	      var divy1 = box.offsetTop;
	      var divx2 = box.offsetLeft + box.offsetWidth;
	      var divy2 = box.offsetTop + box.offsetHeight;
	      if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
	    	clearInterval(timer);
		}
     },
     handleenter(e){
     	 let targetid = e.currentTarget.dataset.id;
		this.currentIndex = targetid;
     }
   },
   data(){
   	return {
   		currentIndex:null,
   		contentright:"厂商推荐",
   		options:{
   			title:"1F   包装类",
   			contentleft:{imgSrc:"src/components/managewebhome/content/1.jpg",text:"广告1",id:12},
   			contentright:[
   					{
   						title:"内容1",
   						imgSrc:"src/components/managewebhome/content/11.jpg",
   						id:0
   					},
   					{
   						title:"内容2",
   						imgSrc:"src/components/managewebhome/content/3.jpg",
   						id:1
   					},
   					{
   						title:"内容3",
   						id:2,
   						imgSrc:"src/components/managewebhome/content/4.jpg"
   					},
   					{
   						title:"内容4",id:3,
   						imgSrc:"src/components/managewebhome/content/5.jpg"
   					},
   					{
   						title:"内容5",id:4,
   						imgSrc:"src/components/managewebhome/content/6.jpg"
   					},
   					{
   						title:"内容6",id:5,
   						imgSrc:"src/components/managewebhome/content/7.jpg"
   					},
   					{
   						title:"内容7",id:6,
   						imgSrc:"src/components/managewebhome/content/8.jpg"
   					},
   					{
   						title:"内容8",id:7,
   						imgSrc:"src/components/managewebhome/content/9.jpg"
   					}
   			]
   		},
   		otheroptions:{
   			title:"2F   其他类",
   			contentleft:{imgSrc:"src/assets/1.jpg",text:"广告2",id:11},
   			contentright:[
   					{
   						title:"内容1",	id:0,
   						imgSrc:"src/assets/2.jpg"
   					},
   					{
   						title:"内容2",id:1,
   						imgSrc:"src/assets/10.jpg"
   					},
   					{
   						title:"内容3",id:2,
   						imgSrc:"src/assets/3.jpg"
   					},
   					{
   						title:"内容4",id:3,
   						imgSrc:"src/assets/4.jpg"
   					},
   					{
   						title:"内容5",id:4,
   						imgSrc:"src/assets/5.jpg"
   					},
   					{
   						title:"内容6",id:5,
   						imgSrc:"src/assets/6.jpg"
   					},
   					{
   						title:"内容7",id:6,
   						imgSrc:"src/assets/7.jpg"
   					},
   					{
   						title:"内容8",id:7,
   						imgSrc:"src/assets/8.jpg"
   					}
   			]
   		},
   		listImg:[
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
				},
				{
					imgSrc:'src/components/managewebhome/swiper/2.jpg',text:"22222",id:5

				},
				{
					imgSrc:'src/components/managewebhome/swiper/3.jpg',text:"3333333",id:6
				},
				{
					imgSrc:'src/components/managewebhome/swiper/4.jpg',text:"44444444444",id:7
				}
				]
   	}
   }
}
</script>

<style scoped>
	.f2{
		padding-bottom: 20px;
	}
	.content{
		height: 160px;
	}
	.el-row{
		width: 100%;
		height: 100%;
	}
	.el-col{
		height: 100%;
		padding: 10px;
		background: #666;
		position: relative;
		overflow: hidden;
	}
	.cover{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 2;
	}
	.grid-content{
		width: 200%;
		position: absolute;
		height: 140px;
		left: 10px;
		top: 10px;
		overflow: hidden;
	}
	.newsitem{
		width: 12%!important;
		height: 100%;
		margin-right: 10px;
		float: left;
		overflow: hidden;
		margin-bottom: 10px;
		position: relative;
		cursor: pointer;
	}
	.logoshow{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top:0;
		line-height: 1.2;
		padding: 6px;
		box-sizing: border-box;
		text-indent: 2em;
		background: rgba(0,0,0,.5);
		color: white;
		font-size: 14px;
	}
	.elcol{
		position:relative;
	}
	.content-right{
		position: absolute;
		left: 50%;
		margin-left: -15px;
		width: 30px;
		font-size: 30px;
		color: white
	}
</style>
