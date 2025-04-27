import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Layout from "@/components/Wrappers/Layout";
import { ReactNode } from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "f01zy",
  description: "About me.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className="dark">
    <body
      className={`
        ${inter.variable} 
        bg-white
        text-black
        dark:bg-black
        dark:text-white
      `}
    >
      <Layout>
        {children}
      </Layout>
    </body>
  </html>
}
