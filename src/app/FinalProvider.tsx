"use client";

import { AppSidebar } from "@/components/app-sidebar";
import ScrollingComponent from "@/components/ScrollingComponent";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Toaster } from "sonner";

export default function FinalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isLoggedIn = status === "authenticated";

  const router = useRouter();

  return (
    <SidebarProvider>
      <div className="flex w-full">
        {pathname !== "/auth" && <AppSidebar />}
        <SidebarInset className="flex-1 min-w-0">
          {pathname !== "/auth" && (
            <header className="flex h-16 shrink-0 transition-[width,height] items-center gap-2 px-4 w-full">
              <div className="flex items-center gap-2 px-4 w-full justify-center relative">
                <SidebarTrigger className="-ml-1 text-teal-300 cursor-pointer absolute left-1" />
                <ScrollingComponent
                  text="Turn Your Imagination Into Shorts Video"
                  speed="slow"
                  className="w-1/2"
                />
                {!isLoggedIn && isHomePage && (
                  <Button
                    className="absolute right-2 cursor-pointer text-gray-200 border border-teal-600 hover:border-teal-300 hover:text-white"
                    variant="ghost"
                    onClick={() => router.push("/auth")}
                  >
                    Log In
                  </Button>
                )}
              </div>
            </header>
          )}

          <div>
            <main>{children}</main>
            <Toaster />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
