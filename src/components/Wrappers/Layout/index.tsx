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
      <Navigation />
      <Breadcrumbs />
      <ThemeButton className="fixed bottom-6 right-6 z-[1]" />
      {children}
    </LimitedHeight>
  </Providers>
}

export default Layout;
