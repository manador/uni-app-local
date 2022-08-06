<template>
	<view class="celebrity-list">
		<Celebrity :dataList="excellentList"></Celebrity>
	</view>
</template>

<script>
	import Celebrity from "@/component/start-school/Celebrity.vue"
	export default{
		props:{
			excellentList:{
				type:Array,
				default:{}
			}
		},
		components:{
			Celebrity
		}
	}
</script>

<style>
</style>