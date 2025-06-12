"use client";

import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Send, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  GenerateImage,
  GenerateImagePrompt,
} from "@/app/actions/GenerateVideoActions";
import { useSessionData } from "@/hooks/useSessionData";
import {
  createVideoFirstEntry,
  storeImageTaskID,
} from "@/app/actions/DatabaseActions";
import LoadingSpinner from "./LoadingSpinner";
import { getUserCredits } from "@/app/actions/authActions";
import Modal from "./Modal";
import { Button } from "./ui/button";

export default function ChatWindow({
  credit,
}: {
  credit: number | null | undefined;
}) {
  const userId = useSessionData();

  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  const pathname = usePathname();
  const isTextToVideo = pathname.includes("text");

  if (!userId) {
    setShowModal(true);
    return;
  }

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
    setIsError(null);

    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        144 // max-height of 9rem (36 * 4) since line-height is 1.5 (24px)
      )}px`;
    }
  };

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>): void => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (): void => {
    setImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async () => {
    if (!credit) {
      setShowModal(true);
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Submitting:", { message, image });

      const dbEntry = await createVideoFirstEntry(message);

      if (!dbEntry) {
        console.log("Error while interacting with the Db");
        return;
      }

      const imagePrompt = await GenerateImagePrompt(message);

      console.log("Response Received from GEMINI-API call--:", imagePrompt);

      if (!imagePrompt) {
        console.log("Image prompt creation failed");
        return;
      }

      const generatedImageData = await GenerateImage(imagePrompt);

      console.log("Generated Image Data---", generatedImageData);

      const storeResult = await storeImageTaskID(
        generatedImageData.data.task_id,
        dbEntry?.id
      );

      // Reset form after submission
      setMessage("");
      setImage(null);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      router.push("/ai/videogallery");
    } catch (error) {
      setIsSubmitting(false);
      setIsError("Something went wrong. Please Try Again..");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== "" || image) {
        handleSubmit();
      }
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex flex-col gap-3 vertical-center w-full">
        <div>
          <LoadingSpinner />
        </div>
        <div className="text-teal-500 text-xl my-[-430px] text-center">
          Generating...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {isError && (
        <div className="text-red-600 text-xl text-center py-5">{isError}</div>
      )}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="You Don't have Enough Credits"
      >
        <Button
          variant="ghost"
          onClick={() => router.push("/")}
          className="border border-teal-700 cursor-pointer bg-teal-700"
        >
          Buy Now
        </Button>
      </Modal>
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="bg-zinc-900 rounded-lg border border-gray-700 shadow-lg shadow-teal-600/30">
          {/* Message composition area */}
          <div className="p-2">
            {/* Text area with darker scrollbar */}
            <textarea
              ref={textareaRef}
              value={message}
              onChange={handleMessageChange}
              onKeyDown={handleKeyDown}
              placeholder="Type Keywords.."
              className="w-full bg-zinc-900 rounded-lg p-1.5 text-gray-300 resize-none min-h-20 max-h-40 focus:outline-none scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
              style={{ lineHeight: "1.5" }}
            />
            {/* Image preview section */}

            {imagePreview && (
              <div className="mt-4 mb-2 relative">
                <div className="h-25 w-25 relative overflow-hidden rounded-lg bg-gray-800 flex items-center justify-center">
                  <Image
                    src={imagePreview}
                    width={100}
                    height={100}
                    alt="Preview"
                    className="object-contain max-h-full max-w-full relative"
                  />
                </div>
                <button
                  onClick={removeImage}
                  type="button"
                  className="absolute cursor-pointer hover:text-teal-300 top-20 left-22 bg-gray-800 rounded-full p-1 text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            )}
          </div>

          {/* Action bar */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              {/* Image upload button */}
              {!isTextToVideo && (
                <label className="cursor-pointer p-2 rounded-full hover:bg-gray-700 text-gray-300 hover:text-teal-400 transition-colors">
                  <ImageIcon size={20} />
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* Submit button */}
            <button
              onClick={handleSubmit}
              disabled={message.trim() === "" && !image}
              type="button"
              className={`px-4 py-2 rounded-lg flex items-center ${
                message.trim() === "" && !image
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-500 text-white cursor-pointer"
              } transition-colors`}
            >
              <span className="mr-2 font-medium">Send</span>
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
