/* eslint-disable */
import { z } from 'zod';

export const PostScalarFieldEnumSchema = z.enum([
  'id',
  'createdAt',
  'updatedAt',
  'title',
  'published',
  'authorId',
]);
