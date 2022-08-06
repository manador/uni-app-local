<template>
	<view class="child">
		<view class="plain-list" v-if="child.objType !== 2">
			<view class="list-plain">
				<image class="list-item" src="../../static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="list-into" @tap="goRemark(child)">{{child.reamrk}}</view>
		</view>
		<view class="plain-video" v-else>
			<view class="list-plain">
				<image class="list-item" src="../../static/imgs/underline.png" mode=""></image>
				<view class="list-title">{{child.title}}</view>
			</view>
			<view class="video-content">
				<!-- 视频播放组件 -->
				<SyVideo :objUrl="child.objPath"></SyVideo>
			</view>
		</view>
	</view>
</template>

<script>
	import SyVideo from '@/component/process/sy-video.vue'
	
	export default{
		props:{
			child:{
				type:Object,
				default:{}
			}
		},
		methods:{
			goRemark(child){
				if ( child.objType === 0 ) {
					uni.switchTab({
						url:'/pages/initerview-question/initerview-question'
					})
				}else if( child.objType == 1 ){
					this.copy(child.objPath)
				}
			},
			copy(value){
				uni.showModal({
					content:value,// 模板中提示的内容
					confirmText:"复制内容",
					success() {
						uni.setClipboardData({
							data:value,// 被复制的内容
							success() {
								uni.hideToast({
									title:"复制成功，请打开百度网盘APP",
									duration:2000,
									icon:"none"
								})
							},
							fail() {
								uni.hideToast({
									title:"复制失败",
									duration:2000,
									icon:"none"
								})
							}
						})
					}
				})
			}
		},
		components:{
			SyVideo
		}
	}
</script>

<style scoped>
	.plain-list{
		display: flex;
		align-items: center;
		padding-bottom: 40rpx;
		padding-left: 30rpx;
	}
	.plain-list:nth-child(1){
		margin-top: 20rpx;
	}
	.list-plain{
		display: flex;
		align-items: center;
	}
	.list-item{
		width: 37rpx;
		height: 34rpx;
		padding-right: 15rpx;
	}
	.list-title{
		font-size: 30rpx;
		padding-right: 40rpx;
	}
	.list-into{
		font-size: 20rpx;
		color: #0072ff;
	}
	.plain-video{
		width: 650rpx;
	}
	.plain-video .list-plain{
		padding-left: 20rpx;
	}
	.video-content{
		margin-top: 40rpx;
	}
	.video-content image{
		width: 65rpx;
		height: 650rpx;
	}
</style>