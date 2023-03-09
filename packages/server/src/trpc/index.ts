import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify';
import { FastifyReply, FastifyRequest } from 'fastify';
import { prisma } from '../db';
import { createRouter } from './generated/routers';

export function createContext({ req, res }: CreateFastifyContextOptions): {
    req: FastifyRequest;
    res: FastifyReply;
    prisma: any;
} {
    return { req, res, prisma };
}

export type Context = inferAsyncReturnType<typeof createContext>;

export const t = initTRPC.create();
export const appRouter = createRouter(t.router, t.procedure);
export type AppRouter = typeof appRouter;
