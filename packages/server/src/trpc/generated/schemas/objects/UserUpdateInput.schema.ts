/* eslint-disable */
import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PostUpdateManyWithoutAuthorNestedInputObjectSchema } from './PostUpdateManyWithoutAuthorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<Prisma.UserUpdateInput, 'zenstack_transaction' | 'zenstack_guard'>
> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    email: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    posts: z
      .lazy(() => PostUpdateManyWithoutAuthorNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserUpdateInputObjectSchema = Schema;
