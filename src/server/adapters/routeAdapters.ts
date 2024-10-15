import { FastifyReply, FastifyRequest } from "fastify";
import { IController } from "../../application/interfaces/IController";

export function routeAdapter(controller: IController) {
  return async (req: FastifyRequest, reply: FastifyReply) => {
    if (req.body != null) {
      const { statusCode, body } = await controller.handle({
        body: req.body,
      });

      reply.status(statusCode).send(body);
    }
  };
}
