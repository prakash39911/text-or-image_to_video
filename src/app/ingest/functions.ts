import { VideoNotificationEmail } from "@/components/emailTemplates";
import { inngest } from "../../lib/inngestClient";
import {
  GetVideoAudioUrl,
  SaveFinalVideo,
  SaveVideoDataToDB,
  SaveVideotaskIDAndMusicPrompt,
  storeImageTaskID,
  updateCreditsForUser,
} from "../actions/DatabaseActions";
import {
  GenerateImage,
  GenerateImagePrompt,
  GenerateMusic,
  GenerateMusicPrompt,
  GenerateVideo,
  GenerateVideoPrompt,
  GetImageDataForTaskID,
  MergeAudioAndVideo,
  saveFailedStatusAndSendNotification,
  SendRealTimeDataToClient,
  uploadImageToCloudinary,
  uploadVideoToCloudinary,
} from "../actions/GenerateVideoActions";
import { sendMail } from "../actions/mailAction";

export const handlePromptSubmit = inngest.createFunction(
  { id: "generate-image" },
  {
    event: "generate-image-save-image-id-to-DB",
  },
  async ({ event, step }) => {
    const { dbEntry, message } = event.data;

    try {
      const imagePrompt = await step.run("generate-image-prompt", async () => {
        return await GenerateImagePrompt(message);
      });

      console.log(
        `[Inngest] Step 1 Complete, Generated Image Prompt: ${imagePrompt}`
      );

      if (!imagePrompt) {
        console.log("Image prompt creation failed");
        return;
      }

      const generatedImageData = await step.run("generate-image", async () => {
        return await GenerateImage(imagePrompt);
      });

      console.log(
        `[Inngest] Step 2 Complete, Image Generation started: ${generatedImageData}`
      );

      await step.run("save-to-DB", async () => {
        await storeImageTaskID(generatedImageData.data.task_id, dbEntry?.id);
      });

      return {
        success: true,
        message: `Image generation started and Image Task ID saved to DB`,
      };
    } catch (error) {
      console.error(`[Inngest] FAILED generating image task`, error);

      await step.run("handle-processing-failure", async () => {
        await saveFailedStatusAndSendNotification(true, false, dbEntry?.id);
      });
      // Re-throw the error to ensure the Inngest run is marked as failed
      throw error;
    }
  }
);

export const processImageAndStartVideoGeneration = inngest.createFunction(
  { id: "process-image" },
  { event: "start.generating.video.save.to.database" },
  async ({ event, step }) => {
    const incomingBodyTaskId = event.data;

    console.log(
      `[Inngest] starting processing image webhook data for task--(Triggered from imageWebhook): ${incomingBodyTaskId}`
    );

    try {
      // Step 1: Get the generated image data
      const imageUrl = await step.run("get-image-data", async () => {
        return await GetImageDataForTaskID(incomingBodyTaskId);
      });
      console.log(`[Inngest] Step 1 Complete: Got image URL: ${imageUrl}`);

      // Step 2: Upload image to Cloudinary
      const cloudinaryResult = await step.run(
        "upload-image-to-cloudinary",
        async () => {
          return await uploadImageToCloudinary(imageUrl);
        }
      );
      console.log(`[Inngest] Step 2 Complete: Uploaded to Cloudinary.`);

      // Step 3: Get image as Base64 for AI prompts
      const base64ImageData = await step.run(
        "fetch-image-as-base64",
        async () => {
          const response = await fetch(cloudinaryResult.url);
          const imageArrayBuffer = await response.arrayBuffer();
          return Buffer.from(imageArrayBuffer).toString("base64");
        }
      );
      console.log(`[Inngest] Step 3 Complete: Converted image to Base64.`);

      // Step 4: Generate video prompt
      const videoPrompt = await step.run("generate-video-prompt", async () => {
        return await GenerateVideoPrompt(base64ImageData);
      });

      if (!videoPrompt) throw new Error("Video Prompt was not generated");

      console.log(`[Inngest] Step 4 Complete: Generated video prompt.`);

      // Step 5: Start video generation
      const videoData = await step.run("start-video-generation", async () => {
        return await GenerateVideo(videoPrompt, cloudinaryResult.secure_url);
      });
      console.log(`[Inngest] Step 5 Complete: Started video generation.`);

      // Step 6: Generate music prompt and caption
      const musicPromptAndCaption = await step.run(
        "generate-music-prompt",
        async () => {
          return await GenerateMusicPrompt(videoPrompt, base64ImageData);
        }
      );

      if (!musicPromptAndCaption)
        throw new Error("Music Prompt/Caption was not generated");

      console.log(`[Inngest] Step 6 Complete: Generated music prompt.`);

      // Step 7: Generate music
      const musicData = await step.run("generate-music", async () => {
        return await GenerateMusic(musicPromptAndCaption.music_prompt);
      });
      console.log(`[Inngest] Step 7 Complete: Generated music.`);

      // Step 8: Save all data to the database
      const isSaved = await step.run("save-results-to-db", async () => {
        return await SaveVideotaskIDAndMusicPrompt(
          incomingBodyTaskId,
          videoData.data.task_id,
          musicPromptAndCaption.music_prompt,
          musicPromptAndCaption.caption,
          cloudinaryResult.secure_url,
          musicData.secure_url,
          musicData.public_id
        );
      });
      console.log(
        `[Inngest] Step 8 Complete: Saved all data to DB. IsSaved: ${isSaved}`
      );

      return {
        success: true,
        message: `Successfully processed task ${incomingBodyTaskId}`,
      };
    } catch (error) {
      console.error(
        `[Inngest] FAILED processing image task ID ${incomingBodyTaskId}:`,
        error
      );
      // If any step fails, run a final step to record the failure
      await step.run("handle-processing-failure", async () => {
        await saveFailedStatusAndSendNotification(
          false,
          false,
          incomingBodyTaskId
        );
      });
      // Re-throw the error to ensure the Inngest run is marked as failed
      throw error;
    }
  }
);

export const processVideoMergeWithAudio = inngest.createFunction(
  {
    id: "process-video",
  },
  {
    event: "video-generation-success-merge-audio-video-save-to-db",
  },
  async ({ event, step }) => {
    const { taskId, freepikVideoUrl } = event.data;

    console.log(
      `[Inngest] started processing video webhook data for task ID: ${taskId}}`
    );

    try {
      const videoUploadResult = await step.run(
        "upload-video-to-cloudinary",
        async () => {
          return await uploadVideoToCloudinary(freepikVideoUrl);
        }
      );
      console.log(`[Inngest] Step 1 Complete: Uploaded to Cloudinary.`);

      const isSaved = await step.run("save-video-data", async () => {
        return await SaveVideoDataToDB(
          taskId,
          videoUploadResult.secure_url,
          videoUploadResult.public_id
        );
      });
      console.log(`[Inngest] Step 2 Complete: Saved video data`);

      if (isSaved) {
        const { videoUrl, musicUrl } = await step.run(
          "get-video-audio-url",
          async () => {
            return await GetVideoAudioUrl(taskId);
          }
        );
        console.log(
          `[Inngest] Step 3 Complete: Successfully fetched video and music URL`
        );

        if (!videoUrl || !musicUrl) {
          console.log("Unable to get audio and video Url");
          return;
        }

        const response = await step.run("merge-audio-video", async () => {
          return await MergeAudioAndVideo(videoUrl, musicUrl);
        });

        console.log(
          `[Inngest] Step 4 Complete: Merged audio and video successfully`
        );

        const isSavedFinally = await step.run(
          "saving-final-data-to-db",
          async () => {
            return await SaveFinalVideo(
              response.finalVideoUrl,
              response.finalVideoPublicId,
              taskId
            );
          }
        );
        console.log(`[Inngest] Step 5 Complete: Saved Final data to DB`);

        await step.run("send-real-time-data-to-client", async () => {
          await SendRealTimeDataToClient(isSavedFinally.userId, isSavedFinally);
        });
        console.log(`[Inngest] Step 6 Complete: Sent real time data to Client`);

        await step.run("send-email-video-confirmation", async () => {
          await sendMail(
            "TextToVideo@resend.dev",
            isSavedFinally.User.email,
            "Video Generation Complete",
            VideoNotificationEmail({
              firstName: isSavedFinally.User.name
                ? isSavedFinally.User.name
                : "User",
              prompt: isSavedFinally.userPrompt,
              thumbnailUrl: isSavedFinally.imageUrl!,
              videoUrl: isSavedFinally.finalVideoUrl!,
            })
          );
        });
        console.log(`[Inngest] Step 7 Complete: Email Sent`);

        await step.run("update-credit-details", async () => {
          await updateCreditsForUser(isSavedFinally.userId);
        });
        console.log(`[Inngest] Step 8 Complete: Updated Credit Details in DB`);

        console.log(
          "Video Generation along With Audio is finally Complete",
          response.finalVideoUrl
        );
      }

      return {
        success: true,
        message: `Successfully processed video task ID ${taskId}`,
      };
    } catch (error) {
      console.error(
        `[Inngest] FAILED processing video task ID ${taskId}:`,
        error
      );
      await step.run("handle-processing-failure", async () => {
        await saveFailedStatusAndSendNotification(false, true, taskId);
      });
      throw error;
    }
  }
);
