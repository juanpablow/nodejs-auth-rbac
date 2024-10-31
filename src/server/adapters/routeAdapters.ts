import { FastifyReply, FastifyRequest } from "fastify";
import { IController } from "../../application/interfaces/IController";

export function routeAdapter(controller: IController) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    const { statusCode, body } = await controller.handle({
      body: req.body ?? {},
      params: req.params as Record<string, string> | undefined,
      accountId: req.metadata?.accountId,
    });
    reply.status(statusCode).send(body);
  };
}
