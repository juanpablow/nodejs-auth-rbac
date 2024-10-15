import fastify from "fastify";

import { makeSignInController } from "../factories/makeSignInController";
import { makeSignupController } from "../factories/makeSignUpController";
import { routeAdapter } from "../server/adapters/routeAdapters";

const app = fastify();

app.post("/signup", routeAdapter(makeSignupController()));

app.post("/signin", routeAdapter(makeSignInController()));

app.listen({ port: 3001 }, () => {
  console.log("Server started at http://localhost:3001");
});
