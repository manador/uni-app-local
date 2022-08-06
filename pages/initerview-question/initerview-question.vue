<template>
	<view class="question">
		<MyHeader :isBack="false" title="面试题"></MyHeader>
		<!-- 内容区域 -->
		<view class="question-content">
			<!-- 搜索区域 -->
			<view class="question-header">
				<input type="text" value="" placeholder="请输入搜索的关键字" />
				<image class="question-search" src="../../static/imgs/search.png" mode=""></image>
			</view>
			<scroll-view scroll-y="true" :style="'height:'+ clientHeight+'px;'">
				<view class="commidty" :style="'height:'+ clientHeight+'px;'">
					<!-- 面试题版块 -->
					<QuestionCommidty :dataList="dataList"></QuestionCommidty>
				</view>
			</scroll-view>
		</view>
		<MyTabbar :selected="selected"></MyTabbar>
	</view>
</template>

<script>
	import MyHeader from '@/common/my-header/my-header.vue'
	import QuestionCommidty from '@/component/question/question-commidty.vue'
	import MyTabbar from '@/common/tabbar/my-tabbar.vue'
	import { getQuestionTypeList } from '@/servies/question.js'
	
	export default{
		data(){
			return{
				selected:1,
				clientHeight:null,
				pageNum:1,
				pageSize:10,
				dataList:[]
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
					let info = uni.createSelectorQuery().in(this).select('.question-header')
					info.boundingClientRect((data) => {
						// console.log(data);
						this.clientHeight = res.windowHeight - data.height - 68 - 60
						// console.log(this.clientHeight);
					}).exec((res) => {
						// 这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
				}
			})
		},
		methods:{
			// 初始化页面面试题数据
			async __init(){
				const data = {
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				this.dataList = await getQuestionTypeList(data)
			}
		},
		components:{
			MyHeader,
			QuestionCommidty,
			MyTabbar
		}
	}
</script>

<style scoped>
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	.question{
		width: 100vw;
		height: 100vh;
		background: url('https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png') no-repeat;
	}
	.question-content{
		padding: 0 35rpx;
	}
	/* 搜索框 */
	.question-header{
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		margin-bottom: 30rpx;
		background-color: #ffffff;
		border-radius: 45rpx;
		position: relative;
	}
	.question input{
		width: 680rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: 400;
	}
	.question-search{
		width: 36rpx;
		height: 38rpx;
		position: absolute;
		top: 20rpx;
		right: 30rpx;
	}
</style>