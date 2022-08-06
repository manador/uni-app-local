/**
 * 班级信息 名人堂
 */

import $http from '@/servies/request.js'

// 查询名人堂信息
// /wechat/excellent/list
export const excellentList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/excellent/list',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		}
	})
}

// 公告
// /wechat/notice/list
export const noticeList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/notice/list',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize
		}
	})
}