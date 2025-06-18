import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/PrismaClient";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const bcrypt = await import("bcrypt");

        if (!credentials.email || !credentials.password) return null;

        const isUserExist = await prisma.user.findFirst({
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
          isUserExist.password || ""
        );

        if (!isPasswordCorrect) return null;

        return {
          id: isUserExist.id,
          name: isUserExist.name || "",
          email: isUserExist.email,
          emailVerified: isUserExist.emailVerified,
        } satisfies customUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial Sign In
      if (user) {
        const customUser = user as customUser;
        token.id = customUser.id;
        token.email = customUser.email;
        token.name = customUser.name;
        token.emailVerified = customUser.emailVerified;
      }

      // This block will run when the session is updated
      if (trigger === "update") {
        console.log("Update trigger detected, fetching fresh data from DB");

        // Re-fetch the user from the database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: {
            id: true,
            email: true,
            name: true,
            emailVerified: true,
          },
        });

        if (dbUser) {
          // Update the token with fresh data from database
          token.id = dbUser.id;
          token.email = dbUser.email;
          token.name = dbUser.name;
          token.emailVerified = dbUser.emailVerified;
        }
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

    async signIn({ user, account }) {
      if (account?.provider !== "credentials") {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: user.email!,
          },
        });

        if (existingUser && existingUser.password) {
          return "/auth?error=CredentialsAccountExists";
        }
      }

      if (account?.provider === "credentials") {
        const userExists = await prisma.user.findUnique({
          where: { email: user.email! },
          include: { accounts: true },
        });

        if (
          userExists &&
          userExists.accounts.some((acc) => acc.type === "oauth")
        ) {
          return "/auth?error=OAuthAccountExists";
        }
      }

      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
});
