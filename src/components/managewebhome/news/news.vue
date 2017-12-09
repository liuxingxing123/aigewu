<template>
	<div>
		新闻页面
	</div>
</template>

<script type="text/javascript">
	export default {
		created(){
			this.getnewsid()
		},
		methods:{
			getnewsid(){
			let newsid = window.localStorage.getItem("newsid");
				console.log(newsid)
			}
		}
		
	}

</script>

<style scoped>
	
</style>