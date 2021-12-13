export interface RequestType {
  url: string;
  method: string;
  headers?: any;
  params?: any;
  body?: any;
}

export interface ResponseType<T> {
  /**
   * 状态码
   * @type {string}
   */
  code: string;
  /**
   * 消息
   * @type {string}
   */
  msg: string;
  /**
   * 数据
   * @type {T}
   */
  data: T;
}
