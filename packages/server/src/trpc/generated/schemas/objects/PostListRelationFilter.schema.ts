/* eslint-disable */
import { z } from 'zod';
import { PostWhereInputObjectSchema } from './PostWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.PostListRelationFilter, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    every: z.lazy(() => PostWhereInputObjectSchema).optional(),
    some: z.lazy(() => PostWhereInputObjectSchema).optional(),
    none: z.lazy(() => PostWhereInputObjectSchema).optional(),
  })
  .strict();

export const PostListRelationFilterObjectSchema = Schema;
