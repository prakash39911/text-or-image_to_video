"use server";

import { SignUpFormSchema, SignUpFormSchemaType } from "@/lib/ZodSchema";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/PrismaClient";

export async function RegisterUser(data: SignUpFormSchemaType) {
  try {
    const validate = SignUpFormSchema.safeParse(data);

    if (!validate.success) return { status: false, data: null };

    const { firstName, lastName, email, password } = validate.data;

    const fullName = firstName + " " + lastName;

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await prisma.userData.create({
      data: {
        name: fullName,
        email,
        password: hashedPassword,
      },
    });

    return { status: true, data: createdUser };
  } catch (error) {
    console.error(error, "Error While creating User");
  }
}
