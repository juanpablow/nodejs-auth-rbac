import fastify from "fastify";

import { SignInController } from "../application/controllers/SignInController";
import { SignUpController } from "../application/controllers/SignUpController";

import { SignInUseCase } from "../application/useCases/SignInUseCase";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";

const app = fastify();

app.post("/signup", async (req, res) => {
  const SALT = 10;
  const signUpUseCase = new SignUpUseCase(SALT);
  const signUpController = new SignUpController(signUpUseCase);

  if (req.body != null) {
    const { statusCode, body } = await signUpController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
});

app.post("/signin", async (req, res) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

  if (req.body != null) {
    const { statusCode, body } = await signInController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
});

app.listen({ port: 3001 }, () => {
  console.log("Server started at http://localhost:3001");
});
