/* eslint-disable */
import { z } from 'zod';
import { PostCreateNestedManyWithoutAuthorInputObjectSchema } from './PostCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    posts: z
      .lazy(() => PostCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserCreateInputObjectSchema = Schema;
