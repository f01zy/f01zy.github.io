import { useEffect, useState } from "react";
import type { Theme } from "@/types/theme.type";

const useTheme = () => {
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const savedTheme = localStorage.getItem("theme") as Theme | null
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (systemPrefersDark ? "dark" : "light")

    setTheme((current) => current ?? initialTheme)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined" || theme === null) return

    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return { theme: theme ?? "light", toggleTheme }
};

export default useTheme;
