import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Min 8 Char are required" }),
});

export type LoginFormSchemaType = z.infer<typeof LoginFormSchema>;

export const SignUpFormSchema = z.object({
  firstName: z.string().min(3, { message: "Please Enter Valid Name" }),
  lastName: z.string().optional(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Please Enter Strong Password of length 8 Char" }),
});

export type SignUpFormSchemaType = z.infer<typeof SignUpFormSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordSchemaType = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;
