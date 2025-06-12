"use client";

import type React from "react";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  isOpen = false,
  onClose,
  title,
  children,
}: ModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle backdrop click to close modal
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md bg-gray-900 border border-gray-700 rounded-lg shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-teal-400 hover:bg-gray-800 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 cursor-pointer" />
        </button>

        {/* Modal content */}
        <div className="p-6">
          {title && (
            <h2
              id="modal-title"
              className="text-xl text-center font-semibold text-teal-600 mb-4 pr-8"
            >
              {title}
            </h2>
          )}
          <div className="text-center">{children}</div>
        </div>

        {/* Teal accent border */}
        <div className="absolute inset-0 rounded-lg border-2 border-teal-500/20 pointer-events-none" />
      </div>
    </div>
  );
}
