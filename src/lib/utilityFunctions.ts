import crypto from "crypto";

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

export function getMinutesDifference(
  dateTimeStr1: string,
  dateTimeStr2: string
): number {
  // Parse the date-time strings into Date objects
  const date1 = new Date(dateTimeStr1).getTime(); // Convert to timestamp
  const date2 = new Date(dateTimeStr2).getTime(); // Convert to timestamp

  // Calculate the difference in milliseconds
  const diffInMs = Math.abs(date2 - date1);

  // Convert milliseconds to minutes
  const diffInMinutes = diffInMs / (1000 * 60);

  return Math.floor(diffInMinutes);
}

export function isRetryableError(error: any): boolean {
  // Network errors, timeouts, and 5xx server errors are retryable
  if (
    error.code === "ECONNRESET" ||
    error.code === "ETIMEDOUT" ||
    error.code === "ENOTFOUND"
  ) {
    return true;
  }

  if (error.response) {
    const status = error.response.status;
    // Retry on 5xx server errors and some 4xx errors
    return status >= 500 || status === 429 || status === 408;
  }

  return false;
}
