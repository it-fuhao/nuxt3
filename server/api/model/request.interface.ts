export interface RequestType {
  url: string;
  method: string;
  headers?: any;
  params?: any;
  body?: any;
}

export interface ResponseType<T> {
  code: string;
  msg: string;
  data: T;
}
