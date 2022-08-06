<template>
	<view class="home">
		<view class="home-container">
			<view class="home-header">
				<view class="home-title">小鹿线前端学院</view>
				<view class="home-school">入学信息入口</view>
				<view class="home-show" @tap="goShowContract">
					<view class="home-class">
						<text class="show-text">查看班级权益</text>
					</view>
					<image class="home-img" src="../../static/imgs/shape.png" mode=""></image>
				</view>
			</view>
			<scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
				<view class="home-content" :style="'height:'+clientHeight+'px;'">
					<HomeCommodity :homeData="homeData"></HomeCommodity>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	import HomeCommodity from '@/component/index/HomeCommodity.vue'
	import { getClassList } from '@/servies/class.js'
	
	export default {
		data() {
			return {
				selected:0,
				clientHeight:null,
				homeData:[]
			}
		},
		onLoad() {
			this.__init()
		},
		onReady() {
			uni.getSystemInfo({
				success:(res) => {
					// console.log(res);
					// 获取头部的高度 select 里面的参数就比如css选择器一样选择元素
					let info = uni.createSelectorQuery().in(this).select('.home-header')
					info.boundingClientRect((data) => {
						// console.log(data);
						this.clientHeight = res.windowHeight - data.height - 68
						// console.log(this.clientHeight);
					}).exec((res) => {
						// 这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
				}
			})
		},
		methods: {
			async __init(){
				const data = {
					pageSize:10,
					pageNum:1
				}
				const res = await getClassList(data)
				// console.log(res)
				this.homeData = res
			},
			goShowContract(){
				uni.navigateTo({
					url:'../show-contract/show-contract'
				})
			}
		},
		components:{
			MyTabbar,
			HomeCommodity
		}
	}
</script>

<style>
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.home-container{
		width: 100vw;
		height: 100%;
		margin-right: -7rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png') no-repeat;
		background-size: cover;
		margin-bottom: 120rpx;
		box-sizing: border-box;
	}
	.home-header{
		padding: 131rpx 37rpx 0 37rpx;
	}
	/* 设置标题 */
	.home-title{
		width: 420rpx;
		height: 59rpx;
		font-size: 60rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #000cff;
		line-height: 80rpx;
	}
	/* 入学信息 */
	.home-school{
		width: 236rpx;
		height: 40rpx;
		font-size: 38rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #344356;
		line-height: 56rpx;
		opacity: 0.8;
		padding: 30rpx 0;
	}
	/* 查看权益 */
	.home-show{
		width: 290rpx;
		height: 59rpx;
		display: flex;
		align-items: center;
		background-color: #5468ff;
		border-radius: 10rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
	}
	.home-class{
		height: 27rpx;
		line-height: 27rpx;
		font-size: 28rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #ffffff;
	}
	.home-class::after{
		content: '';
		width: 1rpx;
		height: 31rpx;
		margin: 0 20rpx;
		border-left: 4rpx solid #ffffff;
	}
	.home-img{
		width: 28rpx;
		height: 28rpx;
	}
</style>
