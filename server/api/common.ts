import myFetch from '../request'
import { UserParamsModel, UserInfoModel } from './model/commonModel'

export const getUserInfo = async (params: UserParamsModel) => {
  return await myFetch.fetch({
    url: '/apigateway/api/user/getUserInfo',
    method: 'post',
    body: params
  })
}