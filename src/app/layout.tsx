import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ASidebar from "@/components/ui/sidebar";
import { cn } from "./lib/utils";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
        className={cn(
          "rounded-md flex lg:flex-row flex-col overflow-hidden border",
          "h-screen"
        )}
    >
        <ASidebar />
        <main className="border flex-1 p-4 ">
        {children}
        </main>
        
      </div>
      </body>
    </html>
  );
}
