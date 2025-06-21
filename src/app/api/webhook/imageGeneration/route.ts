import { saveFailedStatusAndSendNotification } from "@/app/actions/GenerateVideoActions";
import { inngest } from "@/lib/inngestClient";
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
    await inngest.send({
      name: "start.generating.video.save.to.database",
      data: body,
    });

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
  console.log(`Image Generation Task with Task ID ${body.task_id} failed:`);

  try {
    await saveFailedStatusAndSendNotification(false, false, body.task_id);
  } catch (error) {
    console.log("Unable to save failed status and send notification");
  }

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
