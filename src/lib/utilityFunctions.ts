import crypto from "crypto";
import { prisma } from "./PrismaClient";

export function generateSignature(secretKey: string, contentToSign: string) {
  const secretKeyBytes = Buffer.from(secretKey, "utf-8");

  const hmac = crypto.createHmac("sha256", secretKeyBytes);

  hmac.update(contentToSign);

  const signature = hmac.digest("base64");

  return signature;
}

export function verifySignature(
  generatedSignature: string,
  headerSignatures: string
) {
  const signatures = headerSignatures.split(" ");

  for (const signature of signatures) {
    const [version, expectedSignature] = signature.split(",");

    if (expectedSignature === generatedSignature) {
      return true;
    }
  }

  return false;
}

export const GenerateRandomName = () => {
  const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let str = "";

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.ceil(Math.random() * 53);
    str += alphabets[randomNumber];
  }

  return str;
};

export const CalcNoOfVideosInProgress = (videoList: EachVideo[]) => {
  return videoList.reduce(
    (accumulator, currentVal) =>
      currentVal.status === "InProgress" ? (accumulator += 1) : accumulator,
    0
  );
};

// export async function waitForImageTaskID(
//   taskId: string,
//   retries = 3,
//   delay = 1000
// ) {
//   for (let i = 0; i < retries; i++) {
//     const record = await prisma.videoGenerationData.findFirst({
//       where: {
//         imageTaskId: taskId,
//       },
//     });

//     if (record) return record;

//     await new Promise((res) => setTimeout(res, delay));
//   }

//   throw new Error("imageTaskId not found in DB after multiple retries");
// }
