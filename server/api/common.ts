import myFetch from '../request';
import { IUserParams } from './model/common.interface';

export const getUserInfo = async (params: IUserParams) => {
  return await myFetch.fetch({
    url: '/apigateway/api/user/getUserInfo',
    method: 'post',
    body: params,
  });
};
