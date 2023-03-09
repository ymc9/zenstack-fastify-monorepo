/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
  })
  .strict();

export const UserUncheckedCreateWithoutPostsInputObjectSchema = Schema;
