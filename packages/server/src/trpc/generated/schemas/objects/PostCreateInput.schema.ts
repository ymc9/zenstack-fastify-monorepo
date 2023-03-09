/* eslint-disable */
import { z } from 'zod';
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from './UserCreateNestedOneWithoutPostsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.PostCreateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    title: z.string(),
    published: z.boolean().optional(),
    author: z
      .lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema)
      .optional(),
  })
  .strict();

export const PostCreateInputObjectSchema = Schema;
