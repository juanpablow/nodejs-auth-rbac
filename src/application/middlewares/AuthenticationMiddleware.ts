import { verify } from "jsonwebtoken";
import { env } from "../config/env";
import { IData, IMiddleware, IReq, IRes } from "../interfaces/IMiddleware";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({ headers }: IReq): Promise<IRes | IData> {
    const { authorization } = headers;

    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: "Invalid access token.",
        },
      };
    }

    try {
      const [type, token] = authorization.split(" ");

      if (type !== "Bearer") {
        throw new Error();
      }

      const { sub } = verify(token, env.jwtSecret!);

      return {
        data: {
          accountId: sub,
        },
      };
    } catch {
      return {
        statusCode: 401,
        body: {
          error: "Invalid access token.",
        },
      };
    }
  }
}
