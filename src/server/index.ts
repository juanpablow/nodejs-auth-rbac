import fastify from "fastify";

import { makeSignInController } from "../factories/makeSignInController";
import { makeSignupController } from "../factories/makeSignUpController";

const app = fastify();

app.post("/signup", async (req, res) => {
  const signUpController = makeSignupController();

  if (req.body != null) {
    const { statusCode, body } = await signUpController.handle({
      body: req.body,
    });

    res.status(statusCode).send(body);
  }
});

app.post("/signin", async (req, res) => {
  const signInController = makeSignInController();

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
