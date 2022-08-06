/**
 * 请求面试题接口管理
 */
import $http from '@/servies/request.js'

// 查询面试题分类列表
// 接口： /wechat/questions/typeList
export const getQuestionTypeList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/questions/typeList',
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

// 查询面试题
// 接口 /wechat/questions/list
export const getQuestionList = ({pageSize,pageNum,typeId}) => {
	return $http.request({
		url:'/wechat/questions/list',
		method:'POST',
		header:{
			"Content-Type":"application/json"
		},
		data:{
			pageNum,
			pageSize,
			typeId
		}
	})
}

// 查询面试题总条数
// 接口 /wechat/questions/selQuestionNum/{typeId}
export const getQuestionNum = ({typeId}) => {
	return $http.request({
		url:'/wechat/questions/selQuestionNum/'+typeId,
		method:'GET'
	})
}