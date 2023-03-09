/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserMaxAggregateInputType,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
  })
  .strict();

export const UserMaxAggregateInputObjectSchema = Schema;
