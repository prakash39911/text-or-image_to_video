import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/PrismaClient";
import bcrypt from "bcrypt";

type customUser = {
  id: string;
  email: string;
  name: string;
  emailVerified: Date | null;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),

  pages: {
    signIn: "/auth",
  },

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
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
            emailVerified: true,
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
          emailVerified: isUserExist.emailVerified,
        } satisfies customUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as customUser;
        token.id = customUser.id;
        token.email = customUser.email;
        token.name = customUser.name;
        token.emailVerified = customUser.emailVerified;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id as string;
      session.user.email = token.email as string;
      session.user.name = token.name;
      session.user.emailVerified = token.emailVerified as Date | null;

      return session;
    },
  },
  secret: process.env.AUTH_SECRET,
});
