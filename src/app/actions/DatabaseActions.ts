"use server";

import { prisma } from "@/lib/PrismaClient";
import { auth } from "../../auth";

export async function createVideoFirstEntry(userPrompt: string) {
  const session = await auth();

  if (!session?.user?.id) {
    console.log("User is not loggedIn");
    return;
  }

  try {
    const isCreated = await prisma.videoGenerationData.create({
      data: {
        userId: session?.user?.id,
        userPrompt: userPrompt,
      },
      select: {
        id: true,
        userId: true,
      },
    });

    return isCreated;
  } catch (error) {
    console.error("Unable to create DB entry", error);
    throw error;
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
    throw error;
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
        userId: true,
        User: {
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

export async function saveFailedStatus(
  id: string | null,
  videoTaskId: string | null,
  imageTaskId: string | null
) {
  try {
    if (videoTaskId) {
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
          userId: true,
        },
      });

      return isUpdated;
    } else if (imageTaskId) {
      const isUpdated = await prisma.videoGenerationData.update({
        where: {
          imageTaskId,
        },
        data: {
          status: "Failed",
        },
        select: {
          id: true,
          videoTaskId: true,
          userPrompt: true,
          userId: true,
        },
      });

      return isUpdated;
    } else if (id) {
      const isUpdated = await prisma.videoGenerationData.update({
        where: {
          id,
        },
        data: {
          status: "Failed",
        },
        select: {
          id: true,
          videoTaskId: true,
          userPrompt: true,
          userId: true,
        },
      });

      return isUpdated;
    }

    return undefined;
  } catch (error) {
    console.log("Unable to save Failed Status", error);
    throw error;
  }
}

export const updateCreditsForUser = async (userId: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!user || !user.credits) {
      console.error("User and credit data not found");
      return;
    }

    const isUpdated = await prisma.user.update({
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

// PurchaseDetails: {
//         id: string;
//         createdAt: Date;
//         amount: number;
//         payment_status: $Enums.payment_status;
//         creditPurchased: number;
//         packagePurchased: {
//             id: string;
//             key: string;
//         };
//     }[];

export async function GetBillingInfo(userId: string) {
  try {
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        PurchaseDetails: {
          select: {
            id: true,
            amount: true,
            payment_status: true,
            creditPurchased: true,
            createdAt: true,
            packagePurchased: {
              select: {
                id: true,
                key: true,
              },
            },
          },
        },
      },
    });

    const processedData = data?.PurchaseDetails.map((eachObj) => {
      return {
        id: eachObj.id,
        packageName: eachObj.packagePurchased.key,
        amount: eachObj.amount / 100,
        credits: eachObj.creditPurchased,
        purchaseDate: eachObj.createdAt,
        status: eachObj.payment_status,
      };
    });

    return processedData;
  } catch (error) {
    console.error("Unable to get billing info");
  }
}

export const updateVideoGenerationStatusToFailed = async (id: string) => {
  try {
    await prisma.videoGenerationData.update({
      where: {
        id,
      },
      data: {
        status: "Failed",
      },
    });
  } catch (error) {
    console.error("Unable to update video generation failed status");
    throw error;
  }
};

export const SaveVideoDataToDB = async (
  taskId: string,
  videoUrl: string,
  videoPublicId: string
) => {
  try {
    return await prisma.videoGenerationData.update({
      where: {
        videoTaskId: taskId,
      },
      data: {
        videoUrl,
        videoPublicId,
      },
    });
  } catch (error) {
    console.error("Unable to save video data to DB", error);
    throw error;
  }
};
