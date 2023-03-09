/* eslint-disable */
import { z } from 'zod';
import { PostSelectObjectSchema } from './objects/PostSelect.schema';
import { PostIncludeObjectSchema } from './objects/PostInclude.schema';
import { PostWhereUniqueInputObjectSchema } from './objects/PostWhereUniqueInput.schema';
import { PostWhereInputObjectSchema } from './objects/PostWhereInput.schema';
import { PostOrderByWithRelationInputObjectSchema } from './objects/PostOrderByWithRelationInput.schema';
import { PostScalarFieldEnumSchema } from './enums/PostScalarFieldEnum.schema';
import { PostCreateInputObjectSchema } from './objects/PostCreateInput.schema';
import { PostUpdateInputObjectSchema } from './objects/PostUpdateInput.schema';
import { PostUpdateManyMutationInputObjectSchema } from './objects/PostUpdateManyMutationInput.schema';
import { PostCountAggregateInputObjectSchema } from './objects/PostCountAggregateInput.schema';
import { PostMinAggregateInputObjectSchema } from './objects/PostMinAggregateInput.schema';
import { PostMaxAggregateInputObjectSchema } from './objects/PostMaxAggregateInput.schema';
import { PostOrderByWithAggregationInputObjectSchema } from './objects/PostOrderByWithAggregationInput.schema';
import { PostScalarWhereWithAggregatesInputObjectSchema } from './objects/PostScalarWhereWithAggregatesInput.schema';

export const PostSchema = {
  findUnique: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    where: PostWhereUniqueInputObjectSchema,
  }),
  findFirst: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    where: PostWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputObjectSchema,
        PostOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PostWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PostScalarFieldEnumSchema).optional(),
  }),
  findMany: z.object({
    select: z.lazy(() => PostSelectObjectSchema.optional()),
    include: z.lazy(() => PostIncludeObjectSchema.optional()),
    where: PostWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputObjectSchema,
        PostOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PostWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(PostScalarFieldEnumSchema).optional(),
  }),
  create: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    data: PostCreateInputObjectSchema,
  }),
  delete: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    where: PostWhereUniqueInputObjectSchema,
  }),
  deleteMany: z.object({ where: PostWhereInputObjectSchema.optional() }),
  update: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    data: PostUpdateInputObjectSchema,
    where: PostWhereUniqueInputObjectSchema,
  }),
  updateMany: z.object({
    data: PostUpdateManyMutationInputObjectSchema,
    where: PostWhereInputObjectSchema.optional(),
  }),
  upsert: z.object({
    select: PostSelectObjectSchema.optional(),
    include: PostIncludeObjectSchema.optional(),
    where: PostWhereUniqueInputObjectSchema,
    create: PostCreateInputObjectSchema,
    update: PostUpdateInputObjectSchema,
  }),
  aggregate: z.object({
    where: PostWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputObjectSchema,
        PostOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    cursor: PostWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), PostCountAggregateInputObjectSchema])
      .optional(),
    _min: PostMinAggregateInputObjectSchema.optional(),
    _max: PostMaxAggregateInputObjectSchema.optional(),
  }),
  groupBy: z.object({
    where: PostWhereInputObjectSchema.optional(),
    orderBy: z.union([
      PostOrderByWithAggregationInputObjectSchema,
      PostOrderByWithAggregationInputObjectSchema.array(),
    ]),
    having: PostScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(PostScalarFieldEnumSchema),
  }),
};
