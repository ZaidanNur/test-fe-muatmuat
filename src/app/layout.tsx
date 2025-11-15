import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import MainProvider from "./MainProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test FE",
  description: "Lorem ipsum dolor sit amet.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className="antialiased w-full min-h-screen overflow-x-hidden bg-white">
        <Header/>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
