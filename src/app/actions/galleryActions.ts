"use server";

import { prisma } from "@/lib/PrismaClient";
import { auth } from "../auth";

export async function GetAllGeneratedVideos() {
  const session = await auth();

  try {
    const data = await prisma.videoGenerationData.findMany({
      where: {
        userDataId: session?.user?.id,
      },
      select: {
        id: true,
        imageUrl: true,
        userPrompt: true,
        finalVideoUrl: true,
        status: true,
      },
    });

    const finalArray = data.map((eachObj) => {
      return {
        id: eachObj.id,
        url: eachObj.finalVideoUrl as string,
        title: eachObj.userPrompt,
        thumbnail: eachObj.imageUrl as string,
        status: eachObj.status,
      };
    });

    return finalArray;
  } catch (error) {
    console.error("Unable to fetch video details", error);
  }
}
