import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { tap } from '@trpc/server/observable';
import { type AppRouter } from '../server/src/trpc';
import fetch from 'node-fetch';

// polyfill fetch
const globalAny = global as any;
globalAny.fetch = fetch;

async function main() {
    const url = 'http://localhost:8080/api/trpc';
    const trpc = createTRPCProxyClient<AppRouter>({
        links: [httpBatchLink({ url })],
    });

    // clean up
    await trpc.user.deleteMany.mutate({});

    const r = await trpc.user.create.mutate({
        include: { posts: true },
        data: {
            email: 'user1@abc.com',
            posts: {
                create: [{ title: 'Post 1' }, { title: 'Post 2' }],
            },
        },
    });
    console.log(`User created:`, r);

    const r1 = await trpc.post.findMany.query({ where: { title: 'Post 1' } });
    console.log(r1);

    const r2 = await trpc.user.update.mutate({
        where: { email: 'user1@abc.com' },
        data: { email: 'user2@abc.com' },
    });
    console.log(`User updated:`, r2);

    const r3 = await trpc.user.deleteMany.mutate({});
    console.log(`Users deleted:`, r3);
}

main();
