import fetch from 'node-fetch';

async function main() {
    const base = 'http://localhost:8080/api/openapi';

    // clean up
    await fetch(`${base}/user/deleteMany`, { method: 'DELETE' });

    let r = await fetch(`${base}/user/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            include: { posts: true },
            data: {
                email: 'user1@abc.com',
                posts: {
                    create: [{ title: 'Post 1' }, { title: 'Post 2' }],
                },
            },
        }),
    });
    console.log(`User created:`, await r.json());

    r = await fetch(
        `${base}/post/findMany?q=${JSON.stringify({
            where: { title: 'Post 1' },
        })}`
    );
    console.log(`Posts:`, await r.json());

    r = await fetch(`${base}/user/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            where: { email: 'user1@abc.com' },
            data: { email: 'user2@abc.com' },
        }),
    });
    console.log(`User updated:`, await r.json());

    r = await fetch(`${base}/user/deleteMany`, { method: 'DELETE' });
    console.log(`Users deleted:`, await r.json());
}

main();
