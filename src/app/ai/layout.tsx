import { AppSidebar } from "@/components/app-sidebar";
import CreditsWidget from "@/components/CreditWidget";
import ScrollingComponent from "@/components/ScrollingComponent";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getUserCredits } from "../actions/authActions";

export default async function AiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const credit = await getUserCredits();

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1 min-w-0">
          <header className="flex h-16 shrink-0 transition-[width,height] items-center gap-2 px-4 w-full">
            <div className="flex items-center gap-2 px-4 w-full justify-center relative">
              <SidebarTrigger className="-ml-1 text-teal-300 cursor-pointer absolute left-1" />
              <ScrollingComponent
                text="Turn Your Imagination Into Shorts Video"
                speed="slow"
                className="w-1/2"
              />
              <div className="ml-30">
                <CreditsWidget credits={credit} />
              </div>
            </div>
          </header>
          <div>
            <main>{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
