"use client"

import Providers from "../Providers";
import LimitedHeight from "../LimitedHeight";
import Navigation from "@/components/UI/Navigation";
import Background from "@/components/UI/Background";
import ThemeButton from "@/components/UI/ToggleTheme";
import Breadcrumbs from "@/components/UI/Breadcrumbs";
import AboutTyping from "@/components/UI/AboutTyping";
import { ReactNode } from "react";

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return <Providers>
    <LimitedHeight>
      <Background />
      <AboutTyping />
      <ThemeButton className="fixed bottom-4 right-6 z-[1]" />
      <div className="w-full h-screen">
        <Breadcrumbs />
        <div className="w-full h-[72vh] flex items-center justify-center">
          {children}
        </div>
        <Navigation />
      </div>
    </LimitedHeight>
  </Providers>
}

export default Layout;
