import { z } from 'zod';
import { USER_ROLE } from './user.constant';

export const createUserSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email('Invalid email address'),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password must be at least 6 characters long'),
    needsPasswordChange: z.boolean().default(true),
    role: z.nativeEnum(USER_ROLE).default(USER_ROLE.user).optional(),
    profileImg: z.string().min(1, 'Profile image is required!!'),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const UserValidation = {
  createUserSchema,
};
