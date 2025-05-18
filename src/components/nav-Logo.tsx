"use client";

import { type LucideIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";

export function NavLogo({
  data,
}: {
  data: {
    title: string;
    icon: LucideIcon;
  };
}) {
  const router = useRouter();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              onClick={() => router.push("/")}
              className="cursor-pointer"
            >
              <span className="text-rose-400 cursor-pointer">
                <data.icon />
              </span>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold font-mono tracking-tight text-3xl text-teal-400">
                  {data.title}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
