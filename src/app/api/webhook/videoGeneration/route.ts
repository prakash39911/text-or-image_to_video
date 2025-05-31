import {
  GetVideoAudioUrl,
  SaveFinalVideo,
} from "@/app/actions/DatabaseActions";
import {
  MergeAudioAndVideo,
  uploadVideoToCloudinary,
} from "@/app/actions/GenerateVideoActions";
import { auth } from "@/app/auth";
import { prisma } from "@/lib/PrismaClient";
import { generateSignature, verifySignature } from "@/lib/utilityFunctions";

export async function POST(request: Request) {
  const secretKey = process.env.FREEPIK_WEBHOOK_SECRET || "";

  try {
    const rawBody = await request.text();

    const parsedBody = JSON.parse(rawBody);
    const headers = request.headers;

    const webhookId = headers.get("webhook-id");
    const webhookTimestamp = headers.get("webhook-timestamp");
    const webhookSignature = headers.get("webhook-signature");

    if (!webhookSignature) {
      console.log("Webhook signature was not received");
      return Response.json(
        { error: "Missing webhook signature" },
        { status: 400 }
      );
    }

    // Use the raw body string for signature verification
    const contentToSign = `${webhookId}.${webhookTimestamp}.${rawBody}`;
    const generatedSignature = generateSignature(secretKey, contentToSign);
    const isSignatureVerified = verifySignature(
      generatedSignature,
      webhookSignature
    );

    console.log("Is Signature Verified", isSignatureVerified);

    if (!isSignatureVerified) {
      console.log("Webhook signature verification failed");
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    // handle different status states
    switch (parsedBody.status) {
      case "COMPLETED":
        return await handleCompleted(parsedBody);

      case "FAILED":
        return await handleFailed(parsedBody);

      case "IN_PROGRESS":
        return await handleInProgress(parsedBody);

      default:
        console.log(`Unknown webhook status: ${parsedBody.status}`);
        return Response.json(
          { error: `Unknown Status: ${parsedBody.status}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Unable to process video webhook", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

const handleCompleted = async (parsedBody: any) => {
  const session = await auth();
  const userId = session?.user?.id;

  console.log(
    `Video Generation Task ${parsedBody.task_id} completed successfully`
  );

  try {
    console.log(
      "Url got for particular VIDEO task id",
      parsedBody.generated[0]
    );

    console.log("Video Generated Parsed Body--", parsedBody);

    const videoUploadResult = await uploadVideoToCloudinary(
      parsedBody.generated[0]
    );

    const isSaved = await prisma.videoGenerationData.update({
      where: {
        userDataId: userId,
        videoTaskId: parsedBody.task_id,
      },
      data: {
        videoUrl: videoUploadResult.secure_url,
        videoPublicId: videoUploadResult.public_id,
      },
    });

    if (isSaved) {
      console.log("Video Url Successfully Saved in the DATABASE");
      console.log("Audio Video Merge Starts---");

      const { videoUrl, musicUrl } = await GetVideoAudioUrl(parsedBody.task_id);

      if (!videoUrl || !musicUrl) {
        console.log("Unable to get audio and video Url");
        return;
      }

      const { finalVideoUrl, finalVideoPublicId } = await MergeAudioAndVideo(
        videoUrl,
        musicUrl
      );

      if (finalVideoUrl.length > 0) {
        const isSaved = await SaveFinalVideo(
          finalVideoUrl,
          finalVideoPublicId,
          parsedBody.task_id
        );

        if (isSaved) {
          console.log("Task Complete--Final Video generated--", finalVideoUrl);
        }
      }
    }

    return Response.json(
      { message: "Webhook captured successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(`Error processing completed task ${parsedBody.task_id}`, error);
    return Response.json(
      { error: "Error processing completed task" },
      { status: 500 }
    );
  }
};

const handleFailed = async (parsedBody: any) => {
  console.log(`Task with task ID- ${parsedBody.task_id} has failed`);

  return Response.json({
    message: "Task Failure recorded",
    status: parsedBody.status,
    task_id: parsedBody.task_id,
  });
};

const handleInProgress = async (parsedBody: any) => {
  console.log(
    `Video generation Task with task ID- ${parsedBody.task_id} is in progress`
  );

  // You can add any specific logic here for in-progress tasks
  // For example:
  // - Update task status in database
  // - Send progress notification to user
  // - Log progress information

  return Response.json({
    message: "Task progress recorded",
    status: parsedBody.status,
    task_id: parsedBody.task_id,
  });
};
