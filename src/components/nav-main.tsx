"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import clsx from "clsx";
import { useState } from "react";
import { useRouter } from "next/navigation";

type currentlyActiveType = {
  title: string;
  isActive: boolean;
};

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const [currentlyActive, setCurrentlyActive] = useState<currentlyActiveType>({
    title: "Text-To-Video",
    isActive: true,
  });

  const router = useRouter();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm">Features</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                className={clsx(
                  "text-xl font-semibold text-gray-300",
                  currentlyActive?.title === item.title
                    ? "text-teal-500 border border-teal-800"
                    : ""
                )}
                asChild
              >
                <SidebarMenuButton
                  className="mb-6 p-5 py-6 mt-2 bg-zinc-800 cursor-pointer"
                  tooltip={item.title}
                  onClick={() => {
                    setCurrentlyActive({ title: item.title, isActive: true });
                    if (item.title === "Text-To-Video") {
                      router.push("/ai/text-to-video");
                    } else {
                      router.push("/ai/videogallery");
                    }
                  }}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
