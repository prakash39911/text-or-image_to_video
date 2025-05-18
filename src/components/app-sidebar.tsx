"use client";

import * as React from "react";
import { Image, Tv, Video } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { NavLogo } from "./nav-Logo";

// This is sample data.
const data = {
  logo: {
    title: "Video AI",
    icon: Tv,
  },
  navMain: [
    {
      title: "Text-To-Video",
      url: "#",
      icon: Video,
      isActive: true,
    },
    {
      title: "Image-To-Video",
      url: "#",
      icon: Image,
      isActive: true,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavLogo data={data.logo} />
      </SidebarHeader>
      <DropdownMenuSeparator />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
