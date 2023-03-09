/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { PostSchema } from '../schemas/Post.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(PostSchema.aggregate).query(({ ctx, input }) => db(ctx).post.aggregate(input)),

        create: procedure.input(PostSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(PostSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(PostSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(PostSchema.findFirst).query(({ ctx, input }) => db(ctx).post.findFirst(input)),

        findFirstOrThrow: procedure.input(PostSchema.findFirst).query(({ ctx, input }) => db(ctx).post.findFirstOrThrow(input)),

        findMany: procedure.input(PostSchema.findMany).query(({ ctx, input }) => db(ctx).post.findMany(input)),

        findUnique: procedure.input(PostSchema.findUnique).query(({ ctx, input }) => db(ctx).post.findUnique(input)),

        findUniqueOrThrow: procedure.input(PostSchema.findUnique).query(({ ctx, input }) => db(ctx).post.findUniqueOrThrow(input)),

        groupBy: procedure.input(PostSchema.groupBy).query(({ ctx, input }) => db(ctx).post.groupBy(input)),

        updateMany: procedure.input(PostSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(PostSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(PostSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).post.upsert(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

    }
    );
}
