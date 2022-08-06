export default{
	state:{
		userList:{
			name:"xxx",
			tel:"000",
			// 0-未签协议；1-已签协议
			status:0,
			selectedPath:"",
			openId:0,
			avatarUrl:"../../static/imgs/widenglu.png",
			nickName:"小鹿线",
			classId:null
		},
		student:{}
	},
	getters:{
		
	},
	mutations:{
		changeUserStatus(state,option){
			state.userList.status = option.status
		},
		changeOpenId(state,option){
			state.userList.openId = option.openId,
			state.userList.avatarUrl = option.avatarUrl,
			state.userList.nickName = option.nickName
		},
		changeClassId(state,option){
			state.userList.classId = option.classId
		},
		changeStudent(state,option){
			state.student = option
		}
	},
	actions:{
		changeStatus({commit},option){
			commit("changeUserStatus",option)
		},
		changeOpenIdActions({commit},option){
			commit("changeOpenId",option)
		},
		changeClassIdActions({commit},option){
			commit("changeClassId",option)
		},
		changeStudentActions({commit},option){
			commit("changeStudent",option)
		}
	}
}