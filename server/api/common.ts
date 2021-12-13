import myFetch from '../request';
import { IUserParams, IUser } from './model/common.interface';

export const getUserInfo = async (params: IUserParams) => {
  return await myFetch.fetch<IUser>({
    url: '/apigateway/api/user/getUserInfo',
    method: 'post',
    body: params
  });
};
