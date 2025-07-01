# AI Text-To-Video Generator

## 🚀 Overview

> Text-To-Video is an AI-powered web application that transforms a simple prompt into a short, engaging video with music. Users can purchase credits, generate videos, receive live notifications, and download their creations. The app leverages modern technologies and a robust microservices-style architecture to handle each step reliably and at scale.

---

## 🚀 Project Links

- **Live Demo:** [Live Link](https://text-or-image-to-video.vercel.app/)

- **Express Backend Repository:** [Backend Repo](https://github.com/prakash39911/text-to-video-express-backend)

---

[![Watch the video](https://res.cloudinary.com/prakashcloud/image/upload/v1751171432/Screenshot_from_2025-06-29_09-44-06_sjda4k.png)](https://res.cloudinary.com/prakashcloud/video/upload/v1751347623/Text_To_Video_Demo_1_eir682.mp4)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js, Zustand, React Hook Form, Zod
- **Backend:** Express.js (deployed on Render)
- **Database:** PostgreSQL + Prisma ORM
- **Authentication:** Auth.js (credentials & OAuth via Google, GitHub)
- **Payment & Credits:** Razorpay
- **Real-time Notifications:** Pusher
- **Workflow & Serverless Functions:** Inngest
- **Video/Audio Processing:** FFmpeg (on Express server)
- **Email Service:** Resend
- **Hosting & Deployment:** Vercel (frontend), Render (Express backend)
- **Development Tools:** Ngrok (webhook testing)

---

## ✨ Key Features

1. **Credit Purchase Flow**

   - Integrated Razorpay for purchasing credit packages
   - Three credit packages preloaded in database by Seeding the data into DB.

2. **AI-Powered Generation**

   - Enter a topic to generate an image prompt
   - Image generation via AI
   - Video prompt created from generated image
   - Music prompt derived from image & video context
   - AI-driven video & music generation
   - FFmpeg merges audio & video streams

3. **User Authentication & Security**

   - Auth.js for secure credential-based login and OAuth (Google, GitHub)
   - Email verification & password reset via Resend
   - Route protection middleware for secure endpoints

4. **Live & Email Notifications**

   - Webhook-based events trigger Inngest functions
   - Users receive live in-app notifications via Pusher
   - Email confirmations upon video completion
   - Retry mechanisms in Inngest for robust error handling

5. **Video Management**

   - Stream and download generated videos
   - Cloud uploads for persistent storage

6. **Scalable Workflow with Inngest**

   - Structured, step-by-step functions for each task
   - Precise control and retry logic for external API calls

7. **Form Handling & Validation**
   - React Hook Form for user inputs
   - Zod schemas for type-safe validation

---

## 📦 Architecture & Workflow

1. **User Prompt**: User submits a topic via the frontend
2. **Image Prompt Generation**: Backend transforms topic into an image prompt
3. **Image Generation**: AI service returns images
4. **Video Prompt Generation**: Next, a video prompt is derived from the image context
5. **Music Prompt Generation**: Music prompt is created using image & video prompts
6. **Video & Music Creation**: Separate AI calls for video and music
7. **Merge & Upload**: FFmpeg merges outputs; the combined file is uploaded to cloud storage
8. **Notifications**: Inngest triggers and retries events; Pusher and Resend notify the user

---

## 🚀 Getting Started

1. **Frontend**

   ```bash
   git clone https://github.com/prakash39911/text-or-image_to_video
   cd text-or-image_to_video
   npm install
   npm run dev
   ```

2. **Backend**

   ```bash
   git clone https://github.com/prakash39911/text-to-video-express-backend
   cd text-to-video-express-backend
   npm install
   npm run dev
   ```

Ensure you set up environment variables for database connection, Razorpay keys, Auth.js secrets, Inngest webhooks, Pusher credentials, and Resend API key.
