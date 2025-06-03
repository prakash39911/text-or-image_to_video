"use server";

import { cloudinary } from "@/lib/cloudinary";
import { geminiAI } from "@/lib/GeminiApi";
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
    const prompt = `Create a whimsical and detailed macro photography-style image prompt based on the topic: ${userInput}
    
    Example output: A whimsical and detailed miniature scene showing tiny toy chefs making a giant pizza. The setting is a kitchen counter turned into a pizza factory. Miniature workers in chef hats and aprons use toy-sized cooking tools: rooling pins, paint rollers for spreading dough, tiny buckets of tomato sauce, and ladders to reach toppings like ginat olives, pepperoni slices, and basil leaves. One chef is shredding cheese with a huge grater, while another uses a bloqtorch to melt cheese. Construction cones and scaffolding surround the pizza as if it is a worksite. Warm lighting, **controlled depth of field**, cinematic realism, macro photography style.`;

    const response = await geminiAI.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are an imaginative and detail-oriented prompt engineer specializing in creating cinematic and whimsical image prompts. 
        
        Your outputs should be structured, vivid, and tailored for high quality image generation in a macro photography style. 
        
        All scenes should feature toy-sized characters (like miniature chefs, workers, or animals) interacting with real-world objects as if they are ginat environments. 
        
        Use storytelling elements and focus on realism, charm and creativity

        Output should only contain the exact Prompt. Any other words or sentence should not be there in the Ouput. 
          
        Note : Many tiny workers should be there`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.log("Error while generating image prompt", error);
  }
}

export async function GenerateImage(imagePrompt: string) {
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
  } catch (error) {
    console.log("Unable to Generate Image", error);
    throw error;
  }
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
  const negative_prompt = `low resolution, blurry, dull colors, bad lighting, overexposed, underexposed, unnatural motion, stiff animation, messy composition, jerky camera movements`;

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
    // Log the actual error response for debugging
    if (error.response) {
      console.log("API Error Response:", error.response.data);
      console.log("API Error Status:", error.response.status);
    }

    console.log(
      "Unable to make successful request for video generation",
      error.message
    );
    throw error;
  }
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
  try {
    console.log("Music Prompt------", musicPrompt);

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
  } catch (error) {
    console.error("Unable to Make api call to generate music", error);
    throw error;
  }
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
