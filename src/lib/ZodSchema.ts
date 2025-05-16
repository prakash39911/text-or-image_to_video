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
