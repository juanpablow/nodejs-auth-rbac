import { z, ZodError } from "zod";

import { InvalidCredentials } from "../errors/InvalidCredentials";
import { IController, IReq, IRes } from "../interfaces/IController";
import { SignInUseCase } from "../useCases/SignInUseCase";

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(8),
});

export class SignInController implements IController {
  constructor(private readonly signInUseCase: SignInUseCase) {}

  async handle({ body }: IReq): Promise<IRes> {
    try {
      const { email, password } = schema.parse(body);

      const { accessToken } = await this.signInUseCase.execute({
        email,
        password,
      });

      return {
        statusCode: 204,
        body: { accessToken },
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401, // Unauthorized
          body: {
            error: "Invalid Credentials.",
          },
        };
      }
      throw error;
    }
  }
}
