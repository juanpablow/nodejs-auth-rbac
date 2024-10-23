/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IReq {
  headers: Record<string, string>;
}

export interface IRes {
  statusCode: 200 | number;
  body: Record<string, any> | null;
}

export interface IData {
  data: Record<string, any>;
}

export interface IMiddleware {
  handle(req: IReq): Promise<IRes | IData>;
}
