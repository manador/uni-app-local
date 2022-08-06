/**
 *   学员协议
 */
import $http from './request.js'
// 签署协议
// 查询班级协议
// /wechat/protocol/info/{classId}

export const protocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/protocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}

// 签署班级协议
// /wechat/stuProtocol/signClassProtocol
export const signClassProtocol = (data) => {
  return $http.request({
    url:'/wechat/stuProtocol/signClassProtocol',
    method: 'POST',
    header:{
      "Content-Type": "multipart/form-data",
      "token": uni.getStorageSync('token')
    },
    data: {
      ...data
    }
  })
}

// 查询已签署的班级协议 
export const stuProtocolInfo = ({classId}) => {
  return $http.request({
    url:'/wechat/stuProtocol/info/'+classId,
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}

// 根据班级查询协议
// /wechat/stuProtocol/current
export const stuCurrent = () => {
  return $http.request({
    url:'/wechat/stuProtocol/current',
    method: 'GET',
    header:{
      "token": uni.getStorageSync('token')
    }
  })
}


