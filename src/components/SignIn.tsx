"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";

export default function SignIn({ setIsSignup }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
            className="w-full text-gray-400 bg-gray-800/50 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="w-full bg-gray-800/50 text-gray-400 border-gray-700 hover:bg-gray-800 hover:text-teal-400 transition-all duration-300"
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

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              required
              className="bg-gray-800/50 text-gray-300 border-gray-700 focus:border-teal-400 focus:ring-teal-400/10 transition-all duration-300"
            />
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
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                required
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
          </div>

          <Button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-medium transition-all duration-300"
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
