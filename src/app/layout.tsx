import type { Metadata } from "next";
import "./globals.css";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Text-To-Video",
  description: "Convert Your Imagination into Short Video",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`antialiased bg-slate-800`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
