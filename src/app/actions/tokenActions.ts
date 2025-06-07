"use server";

import { tokenType } from "@/generated/prisma";
import { prisma } from "@/lib/PrismaClient";

export async function getTokenByEmail(email: string, type: tokenType) {
  try {
    return prisma.token.findFirst({
      where: {
        email,
        type,
      },
    });
  } catch (error) {
    console.log("Unable to fetch token from DB", error);
    throw error;
  }
}

export async function getTokenByToken(token: string) {
  try {
    const existingToken = await prisma.token.findFirst({
      where: {
        token,
      },
    });

    if (!existingToken) {
      return { status: "error", message: "Token not Found", data: null };
    }

    return {
      status: "success",
      message: "Token Verified",
      data: existingToken,
    };
  } catch (error) {
    console.log("Unable to find tpken in DB", error);
    throw error;
  }
}

export async function generateToken(email: string, type: tokenType) {
  const arrayBuffer = new Uint8Array(48);
  crypto.getRandomValues(arrayBuffer);
  const token = Array.from(arrayBuffer, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");

  const expires = new Date(Date.now() + 1000 * 60 * 60 * 24);

  const existingToken = await getTokenByEmail(email, type);

  if (existingToken) {
    await prisma.token.delete({
      where: {
        id: existingToken.id,
      },
    });
  }

  return prisma.token.create({
    data: {
      email,
      token,
      expires,
      type,
    },
  });
}
