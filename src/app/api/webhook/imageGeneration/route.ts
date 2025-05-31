import { SaveVideotaskIDAndMusicPrompt } from "@/app/actions/DatabaseActions";
import {
  GenerateMusic,
  GenerateMusicPrompt,
  GenerateVideo,
  GenerateVideoPrompt,
  GetImageDataForTaskID,
  uploadImageToCloudinary,
} from "@/app/actions/GenerateVideoActions";
import { generateSignature, verifySignature } from "@/lib/utilityFunctions";

export async function POST(request: Request) {
  const secretKey = process.env.FREEPIK_WEBHOOK_SECRET || "";

  try {
    // Get the raw body as text first
    const rawBody = await request.text();

    // Parse the body for your business logic
    const body = JSON.parse(rawBody);
    const headers = request.headers;

    // Verify webhook signature for all requests
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

    // Handle different status states
    switch (body.status) {
      case "COMPLETED":
        return await handleCompleted(body);

      case "FAILED":
        return await handleFailed(body);

      case "IN_PROGRESS":
        return await handleInProgress(body);

      default:
        console.log(`Unknown webhook status: ${body.status}`);
        return Response.json(
          { error: `Unknown status: ${body.status}` },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

async function handleCompleted(body: any) {
  console.log(`Image Generation Task ${body.task_id} completed successfully`);

  try {
    // Get the generated image data
    const url = await GetImageDataForTaskID(body.task_id);

    console.log("Generated Image URL got for the particular Task ID", url);

    const result = await uploadImageToCloudinary(url);

    const response = await fetch(result.url);
    const imageArrayBuffer = await response.arrayBuffer();
    const base64ImageData = Buffer.from(imageArrayBuffer).toString("base64");

    const generatedVideoPrompt = await GenerateVideoPrompt(base64ImageData);

    if (!generatedVideoPrompt) {
      console.log("Prompt was not generated");
      return;
    }

    console.log("Generated Video Prompt--", generatedVideoPrompt);

    const generatedVideoData = await GenerateVideo(
      generatedVideoPrompt,
      result.secure_url
    );

    console.log("Video Generation Started--", generatedVideoData);

    const musicPromptAndCaption = await GenerateMusicPrompt(
      generatedVideoPrompt,
      base64ImageData
    );

    if (!musicPromptAndCaption) {
      console.log("Music Prompt Generation was failed");
      return;
    }

    console.log("Music Prompt and Caption generated--", musicPromptAndCaption);

    const generatedMusicData = await GenerateMusic(
      musicPromptAndCaption.music_prompt
    );

    console.log(
      "Music Generated and uploaded having URL--",
      generatedMusicData
    );

    const isSaved = await SaveVideotaskIDAndMusicPrompt(
      body.task_id,
      generatedVideoData.data.task_id,
      musicPromptAndCaption.music_prompt,
      musicPromptAndCaption.caption,
      result.secure_url,
      generatedMusicData.secure_url,
      generatedMusicData.public_id
    );

    if (isSaved) {
      console.log("Video and Music URL Successfully saved in DB");
    }

    return Response.json({
      message: "Task completed successfully",
      task_id: body.task_id,
      status: body.status,
    });
  } catch (error) {
    console.error(
      `Error processing webhook completed status for task ${body.task_id}:`,
      error
    );
    return Response.json(
      { error: "Error processing completed task" },
      { status: 500 }
    );
  }
}

async function handleFailed(body: any) {
  console.log(`Task ${body.task_id} failed:`);

  // Optional: Update database with failed status
  // await updateTaskStatus(body.task_id, 'FAILED', { error: body.error_message });

  // You might want to:
  // 1. Log the error for debugging
  // 2. Refund user credits if applicable
  // 3. Send notification to user about failure
  // 4. Retry the task automatically (with limits)
  // 5. Alert your monitoring system

  return Response.json({
    message: "Task failure recorded",
    task_id: body.task_id,
    status: body.status,
  });
}

async function handleInProgress(body: any) {
  console.log(
    `Image Generation Task with task ID- ${body.task_id} is in Progress`
  );

  try {
    return Response.json({
      message: "In Progress Status Captured",
      task_id: body.task_id,
      progress: body.progress || 0,
    });
  } catch (error) {
    console.error(`Error handling in-progress task ${body.task_id}:`, error);
    return Response.json(
      { error: "Error processing in-progress status" },
      { status: 500 }
    );
  }
}
