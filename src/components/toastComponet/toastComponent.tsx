import React from "react";
import { toast } from "sonner";
import { AlertTriangle } from "lucide-react";

const showEnhancedToast = (content: string, desctiption: string) => {
  toast(`${content}`, {
    description: `${desctiption}`,
    duration: 10000,
    className: `
        font-medium text-base
        bg-gradient-to-r from-zinc-900/95 to-zinc-800/95
        backdrop-blur-xl
        text-white
        border border-zinc-700/50
        shadow-2xl shadow-black/25
        rounded-xl
        px-6 py-4
        transform transition-all duration-300
        hover:scale-[1.02]
        before:absolute before:inset-0
        before:bg-gradient-to-r before:from-emerald-500/10 before:to-blue-500/10
        before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300
        hover:before:opacity-100
        ring-1 ring-white/10
      `,
  });
};

const showSuccessToast = (content: string, desctiption: string) => {
  toast.success(`${content}`, {
    description: `${desctiption}`,
    duration: 10000,
    className: `
        font-medium text-base
        bg-gradient-to-r from-emerald-900/95 to-green-800/95
        backdrop-blur-xl
        text-white
        border border-emerald-700/50
        shadow-2xl shadow-emerald-900/25
        rounded-xl
        px-6 py-4
        ring-1 ring-emerald-400/20
      `,
  });
};

const showErrorToast = (content: string, desctiption: string) => {
  toast.error(`${content}`, {
    description: `${desctiption}`,
    duration: 10000,
    className: `
    bg-black
        font-medium text-base
        bg-gradient-to-r from-red-900/95 to-rose-800/95
        backdrop-blur-xl
        text-white
        border border-red-700/50
        shadow-2xl shadow-red-900/25
        rounded-xl
        px-6 py-4
        ring-1 ring-red-400/20
      `,
  });
};

const showWarningToast = (content: string, desctiption: string) => {
  toast(`${content}`, {
    description: `${desctiption}`,
    duration: 10000,
    className: `
        font-medium text-base
        bg-gradient-to-r from-amber-900/95 to-orange-800/95
        backdrop-blur-xl
        text-white
        border border-amber-700/50
        shadow-2xl shadow-amber-900/25
        rounded-xl
        px-6 py-4
        ring-1 ring-amber-400/20
      `,
    icon: <AlertTriangle className="w-5 h-5" />,
  });
};

export {
  showEnhancedToast,
  showErrorToast,
  showWarningToast,
  showSuccessToast,
};
