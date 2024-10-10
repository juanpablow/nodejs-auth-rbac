/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IReq {
  body: Record<string, any>;
}

export interface IRes {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IController {
  handle(req: IReq): Promise<IRes>;
}
