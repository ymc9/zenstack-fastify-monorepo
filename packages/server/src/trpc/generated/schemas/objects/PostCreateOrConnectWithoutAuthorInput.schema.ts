/* eslint-disable */
import { z } from 'zod';
import { PostWhereUniqueInputObjectSchema } from './PostWhereUniqueInput.schema';
import { PostCreateWithoutAuthorInputObjectSchema } from './PostCreateWithoutAuthorInput.schema';
import { PostUncheckedCreateWithoutAuthorInputObjectSchema } from './PostUncheckedCreateWithoutAuthorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<
  Omit<
    Prisma.PostCreateOrConnectWithoutAuthorInput,
    'zenstack_transaction' | 'zenstack_guard'
  >
> = z
  .object({
    where: z.lazy(() => PostWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PostCreateWithoutAuthorInputObjectSchema),
      z.lazy(() => PostUncheckedCreateWithoutAuthorInputObjectSchema),
    ]),
  })
  .strict();

export const PostCreateOrConnectWithoutAuthorInputObjectSchema = Schema;
