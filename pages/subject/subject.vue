<template>
	<view class="subject">
		<MyHeader title="刷题"></MyHeader>
		<view class="subject-content">
			<view class="subject-common">
				<!-- 定义计数 -->
				<view class="dots">
					<text>{{topSwiperIndex + 1}}/{{totalNum}}</text>
				</view>
				<!-- 中间滑动内容 -->
				<swiper :current="topSwiperIndex" @change="toSwiperTab" :style="'height:'+clientHeight+'px;'">
					<swiper-item v-for="(item,index) in toSwiper" :key="index">
						<scroll-view scroll-y="true" :style="'height:'+clientHeight+'px;'">
							<SubjectItem :item="item" :index="topSwiperIndex"></SubjectItem>
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 底部、上下题 -->
		<view class="subject-check">
			<view @tap="goBefore">上一题</view>
			<view class="next" @tap="goNext">下一题</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '@/common/my-header/my-header.vue'
	import SubjectItem from '@/component/subject/subject-item.vue'
	import { getQuestionList,getQuestionNum } from '@/servies/question.js'
	
	export default{
		data(){
			return {
				clientHeight:0,
				typeId:0,
				toSwiper:[],
				totalNum:0,
				topSwiperIndex:0,
				currentNum:0,
				pageNum:1,
				pageSize:10
			}
		},
		onReady() {
			uni.getSystemInfo({
				success:(res) => {
					this.clientHeight = res.windowHeight - this.getClientHeight()
					// 获取计数高度
					let dots = uni.createSelectorQuery().in(this).select('.dots')
					dots.boundingClientRect((data) => {
						this.clientHeight = this.clientHeight - data.height
					}).exec((res) => {
						// 这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
					
					// 获取底部切换的高度
					let info = uni.createSelectorQuery().in(this).select('.subject-check')
					info.boundingClientRect((data) => {
						this.clientHeight = this.clientHeight - data.height
					}).exec((res) => {
						// 这个方法必须执行，即使什么也不做，否则不会获取到信息
					})
				}
			})
		},
		onLoad(options) {
			this.typeId = options.typeId,
			this.__init(),
			this.getTotal()
		},
		methods:{
			// 获取面试题总条数
			async getTotal(){
				const data = {
					typeId:this.typeId
				}
				const res = await getQuestionNum(data)
				// console.log(res);
				this.totalNum = res.questionNum
			},
			// 获取面试题数据
			async __init(){
				const data = {
					pageNum:this.pageNum,
					pageSize:this.pageSize,
					typeId:this.typeId
				}
				const res = await getQuestionList(data)
				// console.log(res);
				this.currentNum = res.length
				this.toSwiper.push(...res)
			},
			toSwiperTab(e){
				this.topSwiperIndex = Number(e.target.current)
				const current = this.topSwiperIndex + 1
				if (current === this.currentNum - 1) {
					// 继续请求
					this.continueReq()
				}else if( current === this.totalNum ){
					uni.showToast({
						title:"等待更新",
						icon:"none"
					})
				}
				return 
			},
			continueReq(){
				this.pageNum += 1
				if( this.totalNum === this.toSwiper.length ) return 
				this.__init()
			},
			// 获取可视区域的高度
			getClientHeight(){
				const res = uni.getSystemInfoSync()
				return res.statusBarHeight
			},
			// 上一题
			goBefore(){
				if ( this.topSwiperIndex === 0 ) {
					uni.showToast({
						title:"不能再往前了~",
						icon:"none"
					})
					return 
				}
				this.topSwiperIndex-- 
			},
			// 下一题
			goNext(){
				if ( this.topSwiperIndex === this.totalNum - 1 ) {
					uni.showToast({
						title:"等待更新！",
						icon:"none"
					})
					return 
				}else{
					this.topSwiperIndex++
					if ( this.topSwiperIndex === this.toSwiper.length - 1 ) {
						this.continueReq()
					}
				}
			}
		},
		components:{
			MyHeader,
			SubjectItem
		}
	}
</script>

<style scoped>
	/* 取消滚动条 */
	scroll-view ::-webkit-scrollbar{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}
	swiper{
		height: auto;
	}
	.subject{
		position: relative;
		width: 100vw;
		background-color: #f0f3f7;
		box-sizing: border-box;
	}
	.subject-content{
		padding: 0 37rpx;
		width: 100%;
		box-sizing: border-box;
	}
	.dots{
		height: 30rpx;
		text-align: center;
		font-size: 32rpx;
		font-weight: 500;
		color: #344356;
		opacity: 0.6;
	}
	.subject-common{
		padding-bottom: 50rpx;
	}
	.subject-check{
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.subject-check view{
		width: 311rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border-radius: 40rpx;
		color: #ffffff;
		margin-left: 55rpx;
		background-color: rgb(90, 103, 247);
	}
	.next{
		background-color: rgb(90, 139, 245);
	}
</style>