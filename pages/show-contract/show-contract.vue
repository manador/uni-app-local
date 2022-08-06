<template>
	<view class="show-contract">
		<view class="contract-header">
			<image src="../../static/images/title.png" mode=""></image>
		</view>
		<scroll-view scroll-y="true" :style="'height: '+clientHeight+'px;'">
			<view class="contract" :style="'height: '+clientHeight+'px;'">
				<view class="show-contract-content">
					<view class="sign-item" v-for="item in classList" :key='item.id'>
						<view class="sign-bg-title">
							<view class="item-title">{{item.className}}</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text :nodes="item.classDesc"></rich-text>
								<!-- <rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text> -->
							</view>
						</view>
						<view class="sign-bg-footer">
							<!-- <rich-text>123456789</rich-text> -->
						</view>
					</view>
					
					<!-- <view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">实训室</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
							</view>
						</view>
						<view class="sign-bg-footer">
							<rich-text>123456789</rich-text>
						</view>
					</view>
					
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">实训室</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
							</view>
						</view>
						<view class="sign-bg-footer">
							<rich-text>123456789</rich-text>
						</view>
					</view>
					
					<view class="sign-item">
						<view class="sign-bg-title">
							<view class="item-title">实训室</view>
						</view>
						<view class="item-content">
							<view class="item-text">
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
								<rich-text>学习周期1个月</rich-text>
							</view>
						</view>
						<view class="sign-bg-footer">
							<rich-text>123456789</rich-text>
						</view>
					</view> -->
				</view>
			</view>
		</scroll-view>
		<view class="know">
			<view class="contract-know" @tap="goBack">我知道了</view>
		</view>
	</view>
</template>

<script>
	import { getClassList } from '@/servies/class.js'
	export default{
		data() {
			return {
				clientHeight:null,
				classList:null
			}
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					// 获取头部的高度  select里面的参数就比如css选择器一样选择元素
					let info = uni.createSelectorQuery().in(this).select(".contract-header")
					info.boundingClientRect((data)=>{
						// data包含元素的高度信息
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = res.windowHeight - data.height
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
					// 获取 我知道 的高度  
					let know = uni.createSelectorQuery().in(this).select(".know")
					know.boundingClientRect((data)=>{
						// data包含元素的高度信息
						// data.height  头部的高度  68是tabbar的高度
						this.clientHeight = this.clientHeight - data.height
					}).exec(function(res){
						// 这个方法必须执行,即使什么也不做,否则不会获取到信息
					})
				}
			})
		},
		onLoad(){
			this.__init()
		},
		methods:{
			// 请求数据
			async __init(){
				const data ={
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				// console.log(data);
				const res = await getClassList(data)
				// console.log( 'res:', res )
				this.classList = res
			},
			goBack(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance:none;
		background: transparent;
		color: transparent;
	}
	.show-contract{
		width: 750rpx;
		height: 100vh;
		padding-bottom: 200rpx;
		box-sizing: border-box;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png') no-repeat;
	}
	.contract-header{
		width: 100vw;
		height: 300rpx;
		position: relative;
	}
	.contract-header image{
		width: 622rpx;
		height: 93rpx;
		position: absolute;
		left: 50%;
		top: 150rpx;
		transform: translateX(-50%);
	}
	.contract{
		width: 702rpx;
		padding: 0 24rpx;
		padding-bottom: 60rpx;
	}
	.sign-item{
		width: 702rpx;
		margin-bottom: 60rpx;
	}
	.sign-bg-title{
		width: 702rpx;
		height: 100rpx;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-title.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.item-title{
		position: absolute;
		left: 50%;
		top: 10rpx;
		transform: translateX(-50%);
		font-size: 48rpx;
		font-weight: normal;
		color: #5d6fe5;
		line-height: 60rpx;
	}
	.item-content{
		width: 702rpx;
		height: 100%;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/item-bg.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.sign-bg-footer{
		width: 702rpx;
		height: 100%;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-footer.png') no-repeat;
		background-size: 100% 100%;
		position: relative;
	}
	.item-text{
		padding: 20rpx 40rpx;
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #7a8bff;
	}
	.know{
		width: 100vw;
		height: 200rpx;
		position: relative;
	}
	.contract-know{
		width: 520rpx;
		height: 80rpx;
		font-size: 30rpx;
		font-family: Microsoft YaHei;
		font-weight: normal;
		color: #5D6FE5;
		text-align: center;
		line-height: 80rpx;
		background-color: #FFFFFF;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border-radius: 20rpx;
	}
</style>
