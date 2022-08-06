// 班级薪资接口的管理
import $http from './request.js'
// 查询班级列表
// 接口：/wechat/class/list
export const getClassList = ({pageSize,pageNum}) => {
	return $http.request({
		url:'/wechat/class/list',
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