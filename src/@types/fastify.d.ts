// fastify.d.ts
import "fastify";

declare module "fastify" {
  interface FastifyRequest {
    metadata?: {
      accountId?: string;
    };
  }
}
