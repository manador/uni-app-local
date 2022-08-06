export default{
	state:{
		noticeInfo:null
	},
	getters:{
		
	},
	mutations:{
		addNoticeInfo(state,option){
			state.noticeInfo = option
		}
	},
	actions:{
		addNoticefoActions({commit},option){
			commit("addNoticeInfo",option)
		}
	}
}