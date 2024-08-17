'use client'

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Provider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
    <head />
    <body>
      <Providers>
        <Header />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </Providers>
    </body>
  </html>
  );
}
