<template>
	<div class="swiper-box" ref="swiperBox">
			<swiper class="box-container" :options="swiperOption" ref="mySwiper">
				<swiper-slide v-for="(item,idx) in listImg" :key="idx" @mouseenter.native="stopPlay" @mouseleave.native="play">
					<img :src="item.imgSrc" style="height:450px" class="swiper-image" alt="swiper-image" >
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="padding:4px"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
 				<div class="swiper-button-next" slot="button-next"></div>  
			</swiper>
		</div>
</template>

<script type="text/javascript">
	import {swiper,swiperSlide} from 'vue-awesome-swiper';

	export default {
		data(){
			return {
				listImg:[
				{
					imgSrc:'src/components/managewebhome/swiper/1.jpg',
				},
				{
					imgSrc:'src/components/managewebhome/swiper/2.jpg',
				},
				{
					imgSrc:'src/components/managewebhome/swiper/3.jpg',
				},
				{
					imgSrc:'src/components/managewebhome/swiper/4.jpg',
				},
				{
					imgSrc:'src/components/managewebhome/swiper/5.jpg',
				}
				],
				swiperOption:{
		       autoplay: 3000,
		        initialSlide: 1,
	         	 loop: true,
		       setWrapperSize :true,
		       autoHeight: true,
		       paginationType:"bullets",
		       pagination : '.swiper-pagination',
		       paginationClickable :true,
		       prevButton:'.swiper-button-prev',
		       nextButton:'.swiper-button-next',
		       observeParents:true,
					}
				};
			},
			components:{
				swiper,
				swiperSlide
			},
			computed:{
				mySwiper(){
					return this.$refs.mySwiper.swiper;
				}
			},
			methods:{
				stopPlay(){
					this.mySwiper.stopAutoplay();
				},
				play(){
					this.mySwiper.startAutoplay();
				}
			}
	}
</script>

<style scoped>
	.swiper-box{
		height:450px;
		overflow: hidden;
		position: relative;
	}
	.swiper-box .swiper-container{
		height: 100%;
	}
	.swiper-box .swiper-image{
		width: 100%;
		height: 100%;
	}
</style>