"use client";

import type React from "react";

import { useState } from "react";
import { Eye, EyeOff, GitBranch, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { SignUpFormSchema, SignUpFormSchemaType } from "@/lib/ZodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterUser } from "@/app/actions/authActions";
import { toast } from "sonner";

export default function SignUp({ setIsSignup }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchemaType>({
    resolver: zodResolver(SignUpFormSchema),
  });

  async function actualSubmit(data: SignUpFormSchemaType) {
    setIsLoading(true);

    const result = await RegisterUser(data);

    if (!result?.status) {
      throw new Error("Something went wrong");
    }

    toast("User Registered Successfully");
    setIsLoading(false);
  }

  return (
    <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-teal-500">
          Create an account
        </h1>
        <p className="text-sm text-gray-400">
          Sign up to get started with our platform
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full cursor-pointer text-gray-400 bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
          >
            <GitBranch className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full cursor-pointer bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
          >
            <Mail className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-700"></span>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-gray-900 px-2 text-gray-400">
              or continue with
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit(actualSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name" className="text-gray-300">
                First name
              </Label>
              <Input
                {...register("firstName")}
                id="first-name"
                placeholder="John"
                className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
              />
              {errors.firstName && (
                <div className="text-red-700 mt-[-3px] mb-[-6px]">
                  {errors.firstName.message}
                </div>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name" className="text-gray-300">
                Last name
              </Label>
              <Input
                {...register("lastName")}
                id="last-name"
                placeholder="Doe"
                className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              placeholder="name@example.com"
              className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
            />
            {errors.email && (
              <div className="text-red-700 mt-[-3px] mb-[-7px]">
                Please enter valid Email
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">
              Password
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
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-400 transition-colors"
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
              {errors.password && (
                <div className="text-red-700 mt-1">
                  Atleast 8 characters required{" "}
                </div>
              )}
            </div>
            <p className="text-xs text-gray-500">
              Must be at least 8 characters long
            </p>
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                Creating account...
              </div>
            ) : (
              "Create account"
            )}
          </Button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => setIsSignup(false)}
            className="text-teal-400 cursor-pointer hover:text-teal-300 font-medium transition-colors"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
