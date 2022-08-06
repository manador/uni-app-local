
### 导航tabbar
一、底部tabbar
	1、抛弃自带的tabbar功能，自己封装
	2、项目中用到的图片素材
	3、配置tabbar
二、完成tabbar
	1、写成组件，在每个页面中引用
	2、tabbar布局
	
	
### 首页
一、结构
    首页：
        背景：https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/bg.png
        P4：https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p4.png
		P5: https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/p5.png
    1. 首页中间部分
        一级组件 --- 二级组件
    查看班级权益：
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/title.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-title.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/item-bg.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/sign-bg-footer.png
		
	2. 班型详情页
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/banner.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/pop-bg.png
        https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/fame-bg.png
		
	3. 填写入学信息
		https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/enter-banner.png
		
	4. 面试题
		https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/question-bg.png
		
	5. 面试流程
		https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/process-bg.png
		
	6. 我的卡片
		https://fawn.xuexiluxian.cn/api/profile/wechat/bgimg/header-bg.png
		
请求：
	接口文档：https://fawnuat.xuexiluxian.cn/wechat/doc.html#/home
	
	1.1 查询班级列表
		接口：/wechat/class/list
		
	1.2 名人堂
		接口：/wechat/excellent/list
		
	1.3 公告
		接口：/wechat/notice/list
		
	1.4 查询面试题
		接口：/wechat/questions/list
		
	1.5 查询面试题总条数
		接口：/wechat/questions/selQuestionNum/{typeId}
	
	1.6 帮助列表
		接口：/wechat/help/lsit
		
	1.7 面试流程
		接口：/wechat/process/list
		
	1.8 登录接口
		接口：/wechat/user/auth/login
		
	1.9 学员协议
		接口：/wechat/stuProtocol/current
		method:GET
		
	1.10 学生入学信息
		接口：/wechat/student/info
		method:GET
		