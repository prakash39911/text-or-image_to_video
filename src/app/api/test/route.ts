// import { cloudinary } from "@/lib/cloudinary";
// import axios from "axios";

// export async function POST(request: Request) {
//   try {
//     const { videoUrl, musicUrl } = await request.json();

//     const result = await axios.post(
//       `${process.env.SEGMIND_BASE_URL}/v1/video-audio-merge`,
//       {
//         input_video: videoUrl,
//         input_audio: musicUrl,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": `${process.env.SEGMIND_API_KEY}`,
//         },
//         responseType: "arraybuffer",
//       }
//     );

//     const videoBuffer = Buffer.from(result.data);
//     const base64Video = videoBuffer.toString("base64");

//     const dataUri = `data:video/mp4;base64,${base64Video}`;

//     // Upload to Cloudinary using base64
//     const uploadResult = await cloudinary.uploader.upload(dataUri, {
//       resource_type: "video",
//       folder: "text-to-video/finalVideo",
//     });

//     return Response.json({
//       success: true,
//       cloudinaryUrl: uploadResult.secure_url,
//       publicId: uploadResult.public_id,
//     });
//   } catch (error) {
//     console.error("Unable to Merge Audio and Video", error);
//     return Response.json({ message: "Internal server error" }, { status: 500 });
//   }
// }
