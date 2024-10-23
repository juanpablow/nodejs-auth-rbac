import { FastifyReply, FastifyRequest } from "fastify";
import { IMiddleware } from "../../application/interfaces/IMiddleware";

export function middlewareAdapter(middleware: IMiddleware) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const result = await middleware.handle({
      headers: req.headers as Record<string, string>,
    });

    if ("statusCode" in result) {
      return reply.status(result.statusCode).send(result.body);
    }
    req.metadata = {
      ...req.metadata,
      ...result.data,
    };
  };
}
