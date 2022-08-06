<template>
	<view class="sy-video">
		<video :src="objUrl" :controls="true" :enable-play-gesture="true"></video>
	</view>
</template>

<script>
	export default{
		props:{
			objUrl:{
				type:String
			}
		}
	}
</script>

<style scoped>
	video{
		width: 650rpx;
	}
</style>