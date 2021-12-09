import myFetch from '../request';
import { IUserParams } from './model/common.interface';

export const getUserInfo = async <T>(params: IUserParams) => {
  return await myFetch.fetch<T>({
    url: '/apigateway/api/user/getUserInfo',
    method: 'post',
    body: params
  });
};
