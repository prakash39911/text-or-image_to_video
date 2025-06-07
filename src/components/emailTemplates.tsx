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
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "8px",
      fontFamily: "sans-serif",
      color: "#333",
    }}
  >
    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
      Verify Your Email
    </h2>
    <p style={{ marginBottom: "8px" }}>Hi {firstName},</p>
    <p style={{ marginBottom: "16px" }}>
      Thanks for signing up! Please confirm your email address by clicking the
      button below:
    </p>
    <a
      href={verificationUrl}
      style={{
        display: "inline-block",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        padding: "12px 24px",
        borderRadius: "6px",
        textDecoration: "none",
      }}
    >
      Verify Email
    </a>
    <p style={{ fontSize: "12px", color: "#888", marginTop: "24px" }}>
      If you didn’t create an account, you can ignore this email.
    </p>
  </div>
);

export const PasswordResetEmail: React.FC<
  Readonly<PasswordResetEmailProps>
> = ({ firstName, resetUrl }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "8px",
      fontFamily: "sans-serif",
      color: "#333",
    }}
  >
    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
      Reset Your Password
    </h2>
    <p style={{ marginBottom: "8px" }}>Hello {firstName},</p>
    <p style={{ marginBottom: "16px" }}>
      We received a request to reset your password. Click the button below to
      set a new password:
    </p>
    <a
      href={resetUrl}
      style={{
        display: "inline-block",
        backgroundColor: "#dc2626",
        color: "#ffffff",
        padding: "12px 24px",
        borderRadius: "6px",
        textDecoration: "none",
      }}
    >
      Reset Password
    </a>
    <p style={{ fontSize: "12px", color: "#888", marginTop: "24px" }}>
      If you didn’t request a password reset, you can safely ignore this email.
    </p>
  </div>
);

export const VideoNotificationEmail: React.FC<
  Readonly<VideoNotificationProps>
> = ({ firstName, prompt, thumbnailUrl, videoUrl }) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      padding: "24px",
      borderRadius: "8px",
      fontFamily: "sans-serif",
      color: "#333",
    }}
  >
    <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
      🎉 Your Video is Ready!
    </h2>
    <p style={{ marginBottom: "8px" }}>Hi {firstName},</p>
    <p style={{ marginBottom: "16px" }}>
      Your video has been successfully generated with the following prompt:
    </p>
    <blockquote
      style={{
        fontStyle: "italic",
        color: "#555",
        borderLeft: "4px solid #3b82f6",
        paddingLeft: "16px",
        marginBottom: "16px",
      }}
    >
      &quot;{prompt}&quot;
    </blockquote>
    <div style={{ marginBottom: "16px" }}>
      <a href={videoUrl}>
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          style={{
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            maxWidth: "10%",
            height: "auto",
          }}
        />
      </a>
    </div>
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        backgroundColor: "#16a34a",
        color: "#ffffff",
        padding: "12px 24px",
        borderRadius: "6px",
        textDecoration: "none",
      }}
    >
      Watch Video
    </a>
    <p style={{ fontSize: "12px", color: "#888", marginTop: "24px" }}>
      Thanks for using our video generation service!
    </p>
  </div>
);
