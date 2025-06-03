import Image from "next/image";
import * as React from "react";

interface VerifyEmailProps {
  firstName: string;
  verificationUrl: string;
}

interface PasswordResetEmailProps {
  firstName: string;
  resetUrl: string;
}

interface VideoNotificationProps {
  firstName: string;
  prompt: string;
  thumbnailUrl: string;
  videoUrl: string;
}

export const VerifyEmail: React.FC<Readonly<VerifyEmailProps>> = ({
  firstName,
  verificationUrl,
}) => (
  <div className="bg-white p-6 rounded-md font-sans text-gray-800">
    <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
    <p className="mb-2">Hi {firstName},</p>
    <p className="mb-4">
      Thanks for signing up! Please confirm your email address by clicking the
      button below:
    </p>
    <a
      href={verificationUrl}
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Verify Email
    </a>
    <p className="text-sm text-gray-500 mt-6">
      If you didn&apos;t create an account, you can ignore this email.
    </p>
  </div>
);

export const PasswordResetEmail: React.FC<
  Readonly<PasswordResetEmailProps>
> = ({ firstName, resetUrl }) => (
  <div className="bg-white p-6 rounded-md font-sans text-gray-800">
    <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
    <p className="mb-2">Hello {firstName},</p>
    <p className="mb-4">
      We received a request to reset your password. Click the button below to
      set a new password:
    </p>
    <a
      href={resetUrl}
      className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
    >
      Reset Password
    </a>
    <p className="text-sm text-gray-500 mt-6">
      If you didn’t request a password reset, you can safely ignore this email.
    </p>
  </div>
);

export const VideoNotificationEmail: React.FC<
  Readonly<VideoNotificationProps>
> = ({ firstName, prompt, thumbnailUrl, videoUrl }) => (
  <div className="bg-white p-6 rounded-md font-sans text-gray-800">
    <h2 className="text-2xl font-bold mb-4">🎉 Your Video is Ready!</h2>
    <p className="mb-2">Hi {firstName},</p>
    <p className="mb-4">
      Your video has been successfully generated with the following prompt:
    </p>
    <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mb-4">
      &quot;{prompt}&quot;
    </blockquote>
    <div className="mb-4">
      <a href={videoUrl}>
        <Image
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="rounded shadow-md max-w-full h-auto"
          width={113}
          height={200}
        />
      </a>
    </div>
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
    >
      Watch Video
    </a>
    <p className="text-sm text-gray-500 mt-6">
      Thanks for using our video generation service!
    </p>
  </div>
);
