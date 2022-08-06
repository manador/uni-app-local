<template>
	<view class="home-main">
		<block v-for="(item,index) in homeData" :key="index">
			<HomeItem :item="item"></HomeItem>
		</block>
	</view>
</template>

<script>
	import HomeItem from '@/component/index/HomeItem.vue'
	export default{
		props:{
			homeData:{
				type:Array,
				default:[]
			}
		},
		data(){
			return{
				// homeData:[{
				// 	classImgLink:"https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p5.png",
				// 	className:"实训室"
				// },{
				// 	classImgLink:"https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p4.png",
				// 	className:"P4"
				// },{
				// 	classImgLink:"https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p5.png",
				// 	className:"P5"
				// },{
				// 	classImgLink:"https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p4.png",
				// 	className:"全日制"
				// },{
				// 	classImgLink:"https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p5.png",
				// 	className:"线下班"
				// }]
			}
		},
		components:{
			HomeItem
		}
	}
</script>

<style scoped>
	.home-main{
		width: 676rpx;
		margin: 20rpx 0 0 36rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
	}
</style>