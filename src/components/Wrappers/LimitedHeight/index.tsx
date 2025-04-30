"use client"

import { useAppSelector } from "@/hooks/selector.hook";
import { ReactNode } from "react";

const LimitedHeight = ({ children }: Readonly<{ children: ReactNode }>) => {
  const isLimitedHeight = useAppSelector(s => s.utils.isLimitedHeight)

  return <div className={`w-screen ${isLimitedHeight ? "h-screen" : ""}`}>
    {children}
  </div>
}

export default LimitedHeight;