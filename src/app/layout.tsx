import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";
import { auth } from "./auth";

export const metadata: Metadata = {
  title: "Text-To-Video",
  description: "Convert Your Imagination into Short Video",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className="dark">
      <body className={`antialiased bg-slate-800`}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
