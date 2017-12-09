<template>
  <div>
            <vheader></vheader>
            <div class="wrapbox">
            <el-container class="content">
            	<el-row>
    				  <el-col  :span="21" ><div  class="grid-content bg-purple" >
             <div class="swiper-container">
                <div class="swiper-wrapper">
               <div class="swiper-slide" v-for="item in listImg" :key="this" @click="handlegetitem(item,$event)"> <a href="/news" target="_self" style="display:inline-block"> 
                        <img width="100%" height="200" :src="item.imgSrc"></a>
                  </div>
                </div>
                
                </div>

				  </div>
				  </el-col>
				  <el-col class="elcol" :span="3"><div class="grid-content content-right bg-purple-light">{{contentright}}</div></el-col>
				</el-row>
            </el-container>
            <div class="f1">
            	<vcontent :href="hrefpath1"  :vcontent="options"></vcontent>
            </div>               
            <div class="f2">
            	<vcontent :href="hrefpath2" :vcontent="otheroptions"></vcontent>
            </div>
            </div>

  </div>
</template>

<script>
import vheader from '@/components/managewebhome/vheader/vheader'
import vcontent from '@/components/managewebhome/content/vcontent'
import Swiper from "../../../../static/js/swiper-3.4.2.min.js"
export default {
   components:{
    vheader,
    vcontent
   },
   mounted(){//这里不能使用created
         this._initswiper()
   },
   methods:{
     _initswiper(){
      var myswiper = new Swiper('.swiper-container', {
          slidesPerView: 4,
          initialSlide:1,
          centeredSlides: true,
          spaceBetween: 30,
          freeMode:true,
          grabCursor: true,
           autoPlay:3000,
           autoplayDisableOnInteraction : true,
             speed: 500,  
            loop: true,  
            observer:true,  
            observeParents:true,  
        });
     },
     handlegetitem(db,e){
      let targetnewsid = db.id;
      window.localStorage.setItem('newsid', targetnewsid);

     }

   },
   data(){
   	return {
      hrefpath1:'/wrapperclass',
      hrefpath2:'/otherclass',
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



    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    height:200px;
    width: 25%;
      overflow: hidden;
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }

  .wrapbox{
    width:90%;
    margin:0 auto;
  }
  .el-carousel__item{
   background:#666;

  }
   .el-carousel__item h3{
      width:100%;
  }

	.f2{
		padding-bottom: 20px;
	}
	.content{
		height: 220px;
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
		width: 100%;
		position: absolute;
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
      top:50%;
      margin-top:-70px;
		font-size: 30px;
		color: white
	}
</style>
