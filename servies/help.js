/**
 * 查询帮助的接口管理
 */
import $http from '@/servies/request.js'

// 查询帮助列表信息
// 接口 /wechat/help/lsit
export const getHelpList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/help/list',
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