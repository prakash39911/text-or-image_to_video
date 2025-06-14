"use client";

import type React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ResetPasswordSchema, ResetPasswordSchemaType } from "@/lib/ZodSchema";
import { LogoutUser, ResetUserPassword } from "../../actions/authActions";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function ResetPassword({
  token,
}: {
  token: string | undefined;
}) {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    mode: "onTouched",
  });

  async function handlePasswordReset(data: ResetPasswordSchemaType) {
    setIsLoading(true);

    try {
      if (!token) {
        return;
      }

      const isSuccess = await ResetUserPassword(token, data.password);

      if (isSuccess.status === "success") {
        setIsSuccess(true);
        toast.success("Password reset successfully!");

        if (status === "authenticated") {
          await LogoutUser();
        }
      }
    } catch (error) {
      console.error("Password reset error:", error);
      toast.error("Failed to reset password");
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
        <div className="text-center space-y-4">
          <div className="p-4 bg-teal-500/10 border border-teal-500/20 rounded-lg">
            <h3 className="text-teal-400 font-medium mb-2 text-xl">
              Password Reset Successful!
            </h3>
            <p className="text-gray-400 text-sm">
              Your password has been successfully updated. You can now sign in
              with your new password.
            </p>
            <Button
              className="mt-3 cursor-pointer"
              onClick={() => router.push("/auth")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-teal-500">
          Reset Password
        </h1>
        <p className="text-sm text-gray-400">Enter your new password</p>
      </div>

      <form onSubmit={handleSubmit(handlePasswordReset)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-gray-300">
            New Password
          </Label>
          <div className="relative">
            <Input
              {...register("password")}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showPassword ? "Hide password" : "Show password"}
              </span>
            </button>
          </div>
          {errors.password && (
            <div className="text-red-400 text-sm">
              {errors.password.message}
            </div>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-gray-300">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              {...register("confirmPassword")}
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
              <span className="sr-only">
                {showConfirmPassword ? "Hide password" : "Show password"}
              </span>
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="text-red-400 text-sm">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium transition-all duration-300"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <div className="h-4 w-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
              Saving Password...
            </div>
          ) : (
            "Save Password"
          )}
        </Button>
      </form>
    </div>
  );
}
