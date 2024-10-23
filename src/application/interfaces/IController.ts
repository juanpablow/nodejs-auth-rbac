/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IReq {
  body: Record<string, any>;
  params: Record<string, string> | undefined;
  accountId: string | undefined;
}

export interface IRes {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IController {
  handle(req: IReq): Promise<IRes>;
}
