/**
 * 登录接口
 */
import $http from "@/servies/request.js"

export const authLogin = ( {code} ) => {
	return $http.request({
		url:'/wechat/user/auth/login',
		method:'POST',
		header:{
			'Conten-Type':'application/json'
		},
		data:{
			code
		}
	})
}