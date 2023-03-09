/* eslint-disable */
import { z } from 'zod';
import { PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema } from './PostUncheckedCreateNestedManyWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserUncheckedCreateInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    posts: z
      .lazy(() => PostUncheckedCreateNestedManyWithoutAuthorInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputObjectSchema = Schema;
