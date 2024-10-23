import fastify from "fastify";

import { makeAuthenticationMiddleware } from "../factories/makeAuthenticationMiddleware";
import { makeListLeadsController } from "../factories/makeListLeadsController";
import { makeSignInController } from "../factories/makeSignInController";
import { makeSignupController } from "../factories/makeSignUpController";
import { routeAdapter } from "../server/adapters/routeAdapters";
import { middlewareAdapter } from "./adapters/middlewareAdapter";

const app = fastify();

app.post("/signup", routeAdapter(makeSignupController()));
app.post("/signin", routeAdapter(makeSignInController()));

app.get(
  "/leads",
  {
    preHandler: middlewareAdapter(makeAuthenticationMiddleware()),
  },
  routeAdapter(makeListLeadsController())
);

app.listen({ port: 3001 }, () => {
  console.log("Server started at http://localhost:3001");
});
