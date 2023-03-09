/* eslint-disable */
import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum([
  'id',
  'email',
  'zenstack_guard',
  'zenstack_transaction',
]);
