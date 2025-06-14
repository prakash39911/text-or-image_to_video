"use server";

import { cloudinary } from "@/lib/cloudinary";
import { geminiAI } from "@/lib/GeminiApi";
import { pusherServer } from "@/lib/pusher";
import { getMinutesDifference, isRetryableError } from "@/lib/utilityFunctions";
import axios from "axios";
import { error } from "console";

export async function uploadImageToCloudinary(imageUrl: string) {
  try {
    const result = await cloudinary.uploader.upload(imageUrl, {
      folder: "text-to-video/image",
    });

    return result;
  } catch (error) {
    console.log("Unable to Upload Image to Cloudinary", error);
    throw error;
  }
}

export async function uploadVideoToCloudinary(videoUrl: string) {
  try {
    const result = await cloudinary.uploader.upload(videoUrl, {
      folder: "text-to-video/video",
      resource_type: "video",
    });

    return result;
  } catch (error) {
    console.log("Unable to Upload Video to Cloudinary", error);
    throw error;
  }
}

export async function GenerateImagePrompt(userInput: string) {
  try {
    const prompt = `Create a whimsical and detailed macro photography-style image prompt featuring miniature people or creatures interacting with the world related to the topic: "${userInput}".

    Focus on depicting a scene where tiny characters are engaged in activities or scenarios directly inspired by "${userInput}", treating everyday objects as if they are colossal environments.

    For example, if the topic is "library," think about miniature people navigating towering bookshelves or using pencils as beams. If the topic is "beach," imagine tiny figures building sandcastles with giant grains of sand or surfing on a ripple.

    Ensure the prompt emphasizes:
    - Many tiny workers/people/creatures.
    - Whimsical and detailed macro photography style.
    - Cinematic realism.
    - Controlled depth of field.
    - Storytelling elements within the miniature scene.
    - The interaction of miniature characters with the environment related to "${userInput}".`;

    const response = await geminiAI.models.generateContent({
      model: "gemini-2.0-flash", // Or 'gemini-1.5-flash' if you prefer
      contents: prompt,
      config: {
        systemInstruction: `You are an imaginative and detail-oriented prompt engineer specializing in creating cinematic and whimsical image prompts.
        Your primary goal is to generate vivid, structured image prompts for macro photography that exclusively feature miniature people or creatures interacting with environments and objects related to the user's provided topic.
        The output must be a direct, high-quality image prompt only. No conversational text or additional explanations.
        Always ensure the scene includes numerous tiny characters.`,
        temperature: 0.8, // Slightly increase temperature for more creativity
      },
    });
    return response.text;
  } catch (error) {
    console.log("Error while generating image prompt", error);
    throw error;
  }
}

export async function GenerateImage(imagePrompt: string) {
  const maxTries = 3;
  const retryDelay = 1000; // delay in milliseconds

  let lastError: any;

  for (let attempt = 1; attempt <= maxTries; attempt++) {
    try {
      const response = await axios.post(
        `${process.env.FREEPIK_BASE_URL}/v1/ai/text-to-image/imagen3`,
        {
          prompt: imagePrompt,
          num_images: 1,
          aspect_ratio: "social_story_9_16",
          webhook_url: `${process.env.DOMAIN_ADD}/api/webhook/imageGeneration`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-freepik-api-key": `${process.env.FREEPIK_API_KEY}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      lastError = error;

      console.error(
        `Image generation attempt ${attempt} failed:`,
        error.message
      );

      const isRetryable = isRetryableError(error);

      if (attempt === maxTries || !isRetryable) {
        break;
      }

      //  If an API has a brief outage, many instances of your application might start their retry cycles at the exact same time.
      // With pure exponential backoff, they will all retry simultaneously (at 1s, then 2s, then 4s, etc.), potentially overwhelming the API as it comes back online. This is known as the "thundering herd" problem.
      // Solution: Add a small, random amount of time to the delay.
      //  This "jitter" spreads out the retry attempts from different clients.

      const baseDelay = retryDelay * Math.pow(2, attempt);
      const jitter = baseDelay * 0.2 * Math.random(); // Add up to 20% jitter
      const delay = baseDelay + jitter;

      console.log(`Retrying in ${Math.round(delay)}ms...`);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // We reach here means, all attempts failed---
  throw new Error(`Image generation failed after ${maxTries} attempts.`, {
    cause: lastError,
  });
}

export async function GetImageDataForTaskID(taskId: string) {
  try {
    const response = await axios.get(
      `${process.env.FREEPIK_BASE_URL}/v1/ai/text-to-image/imagen3/${taskId}`,
      {
        headers: { "x-freepik-api-key": `${process.env.FREEPIK_API_KEY}` },
      }
    );

    return response.data.data.generated[0];
  } catch (error) {
    console.log("Unable to get Image Data", error);
    throw error;
  }
}

export async function GenerateVideoPrompt(base64ImageData: string) {
  try {
    const prompt = ` Create a Video Prompt by analyzing the image and the given instructions.

    Example Output - A whimsical, fast-paced animation featuring tiny toy chefs working quickly on a massive pizza. The scene begins with a slow, deliberate camera orbiting the pizza surface, revealing multiple layers of activity. Miniature chefs run up and down ladders, rapidly spread tomato sauce using toy paint rollers, and quickly place huge pepperoni slices. Others zipline between platforms or operate toy forklifts carrying basil leaves and cheese chunks. The camera smoothly glides around the scene, occasionally dipping down for gentle low-angle shots and clear, focused close-ups of melting cheese and sizzling toppings. Steam rises as the cheese bubbles and browns. The animation is lively and energetic, with fast but smooth character movements and lots of background activity, maintaining visual clarity throughout.
    `;

    const response = await geminiAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { text: prompt },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64ImageData,
          },
        },
      ],
      config: {
        systemInstruction: `You are a creative video prompt generator.
        
        Your task is to analyze an image and create whimsical, cinematic video animation prompt. 
        
        The prompt should describe camera movements (emphasizing **smooth, controlled, and deliberate** movements over rapid or jerky ones), fast-paced actions of tiny-toy-like characters, dynamic environment effects, and ambient sound design. 
        
        The tone must be magical, playful, and visually immersive---perfect for a short animated video in tools like Kling, Runway, or Sora.
        
        Strict Note : 
        1. All characters should appear to be working very fast and efficiently, not slow or idle. Their poses and actions should suggest speed, urgency, or rapid coordination -- as if everything is moving in a high-efficiency, fast-paced system.
        
        2. Camera movements should be **slow, smooth, and intentional**, designed to enhance clarity and focus on details. Avoid quick pans, rapid zooms, or excessive rotations that could cause blur. Prioritize stable, cinematic shots.

        3. This is a 5 seconds Video script

        4. Keep the prompt lite and short.

        5. Output should only contain the exact Prompt. Any other words or sentence should not be there in the Output.
        `,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.log("Unable to generate Video Prompt", error);
    throw error;
  }
}

export async function GenerateVideo(videoPrompt: string, ImageUrl: string) {
  const maxTries = 3;
  const delayInMs = 1000;
  const negative_prompt = `low resolution, blurry, dull colors, bad lighting, overexposed, underexposed, unnatural motion, stiff animation, messy composition, jerky camera movements`;

  let lastError: any;

  for (let attempt = 1; attempt <= maxTries; attempt++) {
    try {
      const response = await axios.post(
        `${process.env.FREEPIK_BASE_URL}/v1/ai/image-to-video/kling-pro`,
        {
          prompt: videoPrompt,
          image: ImageUrl,
          negative_prompt: negative_prompt,
          duration: "5",
          cfg_scale: 0.5,
          webhook_url: `${process.env.DOMAIN_ADD}/api/webhook/videoGeneration`,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-freepik-api-key": process.env.FREEPIK_API_KEY,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      lastError = error;

      console.error(
        `Video generation attempt ${attempt} failed:--`,
        error.message
      );

      const isRetryable = isRetryableError(error);

      if (attempt === maxTries || !isRetryable) {
        break;
      }

      const baseDelay = delayInMs * Math.pow(2, attempt);
      const jitter = baseDelay * 0.2 * Math.random(); // Add up to 20% jitter
      const delay = baseDelay + jitter;

      console.log(`Retrying in ${Math.round(delay)}ms...`);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // We reach here means, all attempts failed---
  throw new Error(`Image generation failed after ${maxTries} attempts.`, {
    cause: lastError,
  });
}

export const GetVideoDataForTaskId = async (taskId: string) => {
  try {
    const videoData = await axios.get(
      `${process.env.FREEPIK_BASE_URL}/v1/ai/image-to-video/kling/${taskId}`,
      {
        headers: {
          "x-freepik-api-key": `${process.env.FREEPIK_API_KEY}`,
        },
      }
    );

    return videoData.data.data.generated[0];
  } catch (error) {
    console.error("Unable to get Video Data for the task ID", error);
    throw error;
  }
};

export async function GenerateMusicPrompt(
  videoPrompt: string,
  base64ImageData: string
) {
  try {
    const prompt = ` Create music prompt and caption based on the provided image and the video script and foll
    ow the given system instructions. 

    video script : ${videoPrompt}
    `;

    const response = await geminiAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        { text: prompt },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64ImageData,
          },
        },
      ],
      config: {
        systemInstruction: ` You have to create a music prompt for generating background music using Musicfy for a 5-second video.

        The video will be created using Kling AI.

        Based on the provided image and the video script, generate a background music prompt that matches the mood, pace, and surreal visual style of the scene.

        The music must enhance the fast paced, cinematic, and dreamlike atmosphere of the video.

        The character in the scene are moving very fast and efficiently, so the music should reflect that energy.

        Include references to instrumentation, tempo, mood and any sound effects or genre influences (e.g. whimsical strings, glitchy synths, cartoon sound design, orchestral hits, lo-fi beats, etc.).

        Then, Write a short, attention-grabbing instagram caption (under 150 characters) that matches the vibe of the video -- surreal, funny, satisfying, or weirdly cool -- and encourages viewer engagement.
        
        Produce JSON matching this specification:

        Return: {
        "music_prompt: string,
        "caption" : string 
        }
        `,
        temperature: 0.7,
      },
    });

    // Get the raw text output
    const rawText = response.text;

    // Remove markdown code block delimiters and parse the JSON
    const cleanJsonString = rawText?.replace(/```json\n|\n```/g, "").trim();

    if (!cleanJsonString) {
      throw error;
    }

    // Parse the cleaned string into a JavaScript object
    const parsedOutput = JSON.parse(cleanJsonString);

    return parsedOutput; // Return the parsed JavaScript object
  } catch (error) {
    console.log("Unable to Generate Music Prompt", error);
    throw error;
  }
}

export async function GenerateMusic(musicPrompt: string) {
  const maxTries = 3;
  const delayInMS = 1000;

  let lastError: any;

  for (let attempt = 1; attempt <= maxTries; attempt++) {
    try {
      const response = await axios.post(
        `${process.env.SEGMIND_BASE_URL}/v1/meta-musicgen-medium`,
        {
          prompt: musicPrompt,
          duration: 6,
          seed: 42,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": `${process.env.SEGMIND_API_KEY}`,
          },
          responseType: "arraybuffer",
        }
      );

      const buffer = Buffer.from(response.data);

      // Convert to base64 data URI
      const base64Audio = buffer.toString("base64");
      const dataUri = `data:audio/wav;base64,${base64Audio}`;

      // Upload to Cloudinary
      const cloudinaryResponse = await cloudinary.uploader.upload(dataUri, {
        resource_type: "video", // required for audio
        folder: "text-to-video/audio",
      });

      return {
        secure_url: cloudinaryResponse.secure_url,
        public_id: cloudinaryResponse.public_id,
      };
    } catch (error: any) {
      lastError = error;

      console.error(
        `Music generation attempt ${attempt} failed:`,
        error.message
      );

      const isRetryable = isRetryableError(error);

      if (attempt === maxTries || !isRetryable) {
        break;
      }

      const baseDelay = delayInMS * Math.pow(2, attempt);
      const jitter = baseDelay * 0.2 * Math.random(); // Add up to 20% jitter
      const delay = baseDelay + jitter;

      console.log(`Retrying in ${Math.round(delay)}ms...`);

      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw new Error(`Music generation failed after ${maxTries} attempts`, {
    cause: lastError,
  });
}

export async function MergeAudioAndVideo(videoUrl: string, audioUrl: string) {
  try {
    const result = await axios.post(
      `${process.env.MERGE_BACKEND_URL}/v1/api/mergeVideoAudio`,
      {
        videoUrl,
        audioUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(
      "Result of Separate backend call, to merge audio and video--",
      result.data
    );

    return {
      finalVideoUrl: result.data.cloudinary.url,
      finalVideoPublicId: result.data.cloudinary.public_id,
    };
  } catch (error) {
    console.error("Unable to Merge Audio and Video", error);
    throw error;
  }
}

export async function SendRealTimeDataToClient(
  userId: string,
  isSavedFinally: any
) {
  const dataToSendUsingPusher = {
    id: isSavedFinally.id,
    url: isSavedFinally.finalVideoUrl,
    title: isSavedFinally.userPrompt,
    thumbnail: isSavedFinally.imageUrl,
    status: isSavedFinally.status,
  };

  const minutes = getMinutesDifference(
    isSavedFinally.updatedAt,
    isSavedFinally.createdAt
  );

  try {
    await pusherServer.trigger(`private-${userId}`, "video:generated", {
      videoObj: dataToSendUsingPusher,
      minutesTaken: minutes,
    });
  } catch (error) {
    console.error("Pusher Notification trigger error:", error);
    throw error;
  }
}

export async function sendNotificationToClient(data: {
  id: string;
  userPrompt: string;
  videoTaskId: string | null;
  userDataId: string;
}) {
  try {
    await pusherServer.trigger(
      `private-${data.userDataId}`,
      "videoGeneration:failed",
      { id: data.id, status: "Failed", prompt: data.userPrompt }
    );
  } catch (error) {
    console.error("Unable to send failed status update to client", error);
    throw error;
  }
}
