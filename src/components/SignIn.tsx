"use client";

import type React from "react";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, LoginFormSchemaType } from "@/lib/ZodSchema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignIn({ setIsSignup }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    mode: "onTouched",
  });

  // Clear error when user starts typing
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if ((name === "email" || name === "password") && loginError) {
        setLoginError(null);
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, loginError]);

  async function actualSubmit(data: LoginFormSchemaType) {
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      console.log("Sign In Response", result);

      // Check if the result has an error
      if (result?.error) {
        toast.error("Login failed: Invalid credentials");
        setLoginError("Invalid Credentials");
        return;
      }

      // Only redirect if sign in was successful
      if (result?.ok) {
        toast.success("Login Successful");
        router.push("/");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("An unexpected error occurred");
      setLoginError("Please Try Again");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full border rounded-3xl p-4 border-gray-700 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 slide-in-from-bottom-4">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-teal-500">
          Welcome back
        </h1>
        <p className="text-sm text-gray-400">
          Enter your credentials to access your account
        </p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            className="w-full cursor-pointer text-gray-400 bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full bg-gray-800/50 cursor-pointer text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
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
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="name@example.com"
              className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
            />
            {errors.email && (
              <div className="text-red-700">Please Enter Valid Email</div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Link
                href="#"
                className="text-xs text-teal-400 hover:text-teal-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <Input
                {...register("password")}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
              />
              {errors.password && (
                <div className="text-red-700">Please Enter Valid Password</div>
              )}
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
          </div>

          <Button
            type="submit"
            className="w-full cursor-pointer bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium transition-all duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing in...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          {loginError && <div className="text-red-700">{loginError}</div>}
        </form>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-400">
          Dont have an account?{" "}
          <span
            onClick={() => setIsSignup(true)}
            className="text-teal-400 cursor-pointer hover:text-teal-300 font-medium transition-colors"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
