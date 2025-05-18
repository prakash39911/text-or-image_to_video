"use client";

import React, { useState, useRef, ChangeEvent, KeyboardEvent } from "react";
import { Send, Image as ImageIcon, X } from "lucide-react";
import Image from "next/image";

export default function ChatWindow(): React.ReactElement {
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);

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

  const handleSubmit = (): void => {
    // In a real application, you would handle the message and image submission here
    console.log("Submitting:", { message, image });

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
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() !== "" || image) {
        handleSubmit();
      }
    }
  };

  return (
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
            placeholder="Type your message here..."
            className="w-full bg-zinc-900 rounded-lg p-1.5 text-gray-300 resize-none min-h-20 max-h-36 focus:outline-none scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
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
  );
}
