import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/PrismaClient";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: "/auth",
  },

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        console.log("Credentials got through Authorize function", credentials);

        if (!credentials.email || !credentials.password) return null;

        const isUserExist = await prisma.userData.findFirst({
          where: {
            email: credentials.email,
          },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
          },
        });

        if (!isUserExist) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password as string,
          isUserExist.password
        );

        if (!isPasswordCorrect) return null;

        return {
          id: isUserExist.id,
          name: isUserExist.name,
          email: isUserExist.email,
        };
      },
    }),
  ],
});
