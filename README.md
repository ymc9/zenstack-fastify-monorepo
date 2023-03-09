# Demo For ZenStack & Fastify Integration (OpenAPI + tRPC)

## Install & Build

1. pnpm install
1. pnpm build

## Start Server

1. cd packages/server
1. pnpm prisma db push
1. pnpm start

## Swagger UI

Vist: [http://localhost:8080/docs](http://localhost:8080/docs)

## OpenAPI Client

1. cd packages/client
1. npx tsx openapi-client

## tRPC Client

1. cd packages/client
1. npx tsx trpc-client
