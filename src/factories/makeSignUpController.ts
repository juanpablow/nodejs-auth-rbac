import { SignUpController } from "../application/controllers/SignUpController";
import { makeSignUpUseCase } from "./makeSignUpUseCase";

export function makeSignupController() {
  const signUpUseCase = makeSignUpUseCase();

  return new SignUpController(signUpUseCase);
}
