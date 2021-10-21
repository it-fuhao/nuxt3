import request from '../request'

/**
 * 获取用户信息
 */
export function getUserInfo(data: {}) {
  return request({
    url: '/apigateway/api/user/getUserInfo',
    method: 'post',
    data: data,
  })
}