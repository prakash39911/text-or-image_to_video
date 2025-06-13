"use server";

import { prisma } from "@/lib/PrismaClient";
import { auth } from "../auth";

export async function createVideoFirstEntry(userPrompt: string) {
  const session = await auth();

  if (!session?.user?.id) {
    console.log("User is not loggedIn");
    return;
  }

  try {
    const isCreated = await prisma.videoGenerationData.create({
      data: {
        userDataId: session?.user?.id,
        userPrompt: userPrompt,
      },
      select: {
        id: true,
        userDataId: true,
      },
    });

    return isCreated;
  } catch (error) {
    console.error("Unable to create DB entry", error);
  }
}

export async function storeImageTaskID(
  imageTaskId: string,
  particulatTaskId: string
) {
  console.log("Attempting to store Image Task ID");
  console.log("ImageTaskID:", imageTaskId);
  console.log("VideoGeneration Row ID:", particulatTaskId);

  try {
    const existingRow = await prisma.videoGenerationData.findUnique({
      where: { id: particulatTaskId },
    });

    if (!existingRow) {
      console.error("No existing row found with ID:", particulatTaskId);
      return null;
    }

    const updated = await prisma.videoGenerationData.update({
      where: { id: particulatTaskId },
      data: { imageTaskId },
    });

    console.log("Image Task ID stored successfully");
    return updated;
  } catch (error: any) {
    console.error(
      "Error storing Image Task ID:",
      error.message,
      error.code,
      error.meta
    );
    return null;
  }
}

export async function SaveVideotaskIDAndMusicPrompt(
  imageTaskID: string,
  videoTaskId: string,
  musicPrompt: string,
  caption: string,
  imageUrl: string,
  musicUrl: string,
  musicPublicId: string
) {
  try {
    const isSaved = await prisma.videoGenerationData.update({
      where: {
        imageTaskId: imageTaskID,
      },
      data: {
        videoTaskId: videoTaskId,
        musicPrompt: musicPrompt,
        caption: caption,
        imageUrl: imageUrl,
        musicUrl,
        musicPublicId,
      },
    });

    return isSaved;
  } catch (error) {
    console.error("Unable to save video ID data into DB", error);
    throw error;
  }
}

export async function GetVideoAudioUrl(videoTaskId: string) {
  try {
    const data = await prisma.videoGenerationData.findUnique({
      where: {
        videoTaskId,
      },
      select: {
        musicUrl: true,
        videoUrl: true,
      },
    });

    if (!data) {
      throw new Error("Unable to get Data from DB");
    }

    return data;
  } catch (error) {
    console.log("Unable to Get Url Data from DB", error);
    throw error;
  }
}

export async function SaveFinalVideo(
  videoUrl: string,
  videoPublicId: string,
  videoTaskId: string
) {
  try {
    const isSaved = await prisma.videoGenerationData.update({
      where: {
        videoTaskId,
      },
      data: {
        finalVideoUrl: videoUrl,
        finalVideoPublicId: videoPublicId,
        status: "Completed",
      },
      select: {
        id: true,
        finalVideoUrl: true,
        userPrompt: true,
        imageUrl: true,
        status: true,
        userDataId: true,
        UserData: {
          select: {
            email: true,
            name: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });

    return isSaved;
  } catch (error) {
    console.log("Unable to save final video data", error);
    throw error;
  }
}

export async function saveFailedStatus(videoTaskId: string) {
  try {
    const isUpdated = await prisma.videoGenerationData.update({
      where: {
        videoTaskId,
      },
      data: {
        status: "Failed",
      },
      select: {
        id: true,
        videoTaskId: true,
        userPrompt: true,
        userDataId: true,
      },
    });

    return isUpdated;
  } catch (error) {
    console.log("Unable to save Failed Status", error);
    throw error;
  }
}

export const updateCreditsForUser = async (userId: string) => {
  try {
    const user = await prisma.userData.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user || !user.credits) {
      console.error("User and credit not found");
      return;
    }

    const isUpdated = await prisma.userData.update({
      where: {
        id: user.id,
      },
      data: {
        credits: user?.credits - 1,
      },
    });

    return isUpdated;
  } catch (error) {
    console.error("Unable to update credit details in DB");
    throw error;
  }
};
