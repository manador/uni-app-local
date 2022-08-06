<template>
	<view class="headers">
		<view class="nav-top">
			<view class="status-bar"></view>
			<view class="top-content">
				<view class="go-back" @click="goto" v-if="isBack">
					<slot name="left">
						<image src="../../static/imgs/arrow.png" mode=""></image>
					</slot>
				</view>
				<view class="title">
					<slot name="center">
						<view>{{title}}</view>
					</slot>
				</view>
			</view>
		</view>
		<view class="margin-box"></view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:""
			},
			isBack:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			goto(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style scoped>
	.nav-top{
		width: 100vw;
		height: 115rpx;
		background-color: white;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 900;
	}
	.status-bar{
		height: 64rpx;
	}
	.top-content{
		width: 100vw;
		height: 100rpx;
		display: flex;
		align-items: center;
	}
	.go-back{
		width: 90rpx;
		height: 42rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		position: relative;
		font-size: 24rpx
	}
	.go-back image{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		width: 40rpx;
		height: 42rpx;
	}
	.title{
		line-height: 115rpx;
		font-size: 32rpx;
		text-align: center;
		color: #344356;
	}
	.margin-box{
		height: 115rpx;
	}
</style>