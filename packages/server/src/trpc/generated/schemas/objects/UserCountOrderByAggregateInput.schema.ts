/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.UserCountOrderByAggregateInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UserCountOrderByAggregateInputObjectSchema = Schema;
