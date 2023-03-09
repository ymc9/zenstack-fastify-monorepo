import { ZenStackFastifyPlugin } from '@zenstackhq/server/fastify';
import Swagger from '@fastify/swagger';
import SwaggerUI from '@fastify/swagger-ui';
import fastify from 'fastify';
import { prisma } from './db';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import { appRouter, createContext } from './trpc';

async function main() {
    const server = fastify();

    // serve OpenAPI at /api/openapi
    server.register(ZenStackFastifyPlugin, {
        prefix: '/api/openapi',
        getPrisma: () => prisma,
    });

    // serve trpc at /api/trpc
    server.register(fastifyTRPCPlugin, {
        prefix: '/api/trpc',
        trpcOptions: { router: appRouter, createContext },
    });

    // service swagger ui at /docs
    await server.register(Swagger, {
        mode: 'static',
        specification: {
            path: './openapi.yaml',
            baseDir: '',
        },
    });
    await server.register(SwaggerUI, { routePrefix: '/docs' });

    server.get('/ping', async (request, reply) => {
        return 'pong\n';
    });

    server.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
}

main();
