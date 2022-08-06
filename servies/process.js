/**
 * 面试流程接口管理
 */
import $http from '@/servies/request.js'

// 面试流程
// 接口 /wechat/process/list
export const processList = ({pageNum,pageSize}) => {
	return $http.request({
		url:'/wechat/process/list',
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