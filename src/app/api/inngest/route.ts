import { serve } from "inngest/next";
import { inngest } from "../../../lib/inngestClient";
import {
  processImageAndStartVideoGeneration,
  processVideoMergeWithAudio,
} from "@/app/ingest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [processImageAndStartVideoGeneration, processVideoMergeWithAudio],
});
