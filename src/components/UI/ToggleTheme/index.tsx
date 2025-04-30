"use client";

import useTheme from "@/hooks/theme.hook";
import { HTMLAttributes, FC } from "react";
import { motion } from "framer-motion";

interface Props extends HTMLAttributes<HTMLDivElement> { }

const ThemeButton: FC<Props> = (props) => {
  const { theme, toggleTheme } = useTheme()

  return <motion.button
    {...props as any}
    onClick={toggleTheme}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className={`
        ${props.className}
        w-12 h-12 rounded-full p-2 cursor-pointer
        bg-amber-100 dark:bg-indigo-900
        shadow-lg dark:shadow-md dark:shadow-indigo-900/50
        border border-amber-300 dark:border-indigo-700
        flex items-center justify-center z-[2]
      `}
  >
    <motion.div
      className="relative w-full h-full"
      initial={false}
      animate={{ rotate: theme === "dark" ? 0 : 40 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: theme === "dark" ? 0 : 1,
          transition: { duration: 0.3 }
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-amber-500">
          <path fill="currentColor" d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{
          opacity: theme === "dark" ? 1 : 0,
          transition: { duration: 0.3 }
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-indigo-200">
          <path fill="currentColor" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1-8.313-12.454z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={{
          scale: theme === "dark" ? 0.5 : 1,
          opacity: theme === "dark" ? 0 : 1,
          transition: {
            scale: { type: "spring", stiffness: 500, damping: 20 },
            opacity: { duration: 0.2 }
          }
        }}
      >
        <svg viewBox="0 0 24 24" className="w-full h-full text-amber-400/50">
          <path fill="currentColor" d="M5.636 7.05L7.05 5.636l2.122 2.121L7.05 9.88 5.636 7.05zm12.728 9.899l-1.414 1.414-2.121-2.122 1.414-1.414 2.121 2.122zm-8.486-8.485l2.122-2.121 1.414 1.414-2.122 2.122-1.414-1.414zm8.485 8.486l1.415-1.414 2.121 2.122-1.414 1.414-2.122-2.122zM16.95 5.636l1.414-1.414 2.121 2.12-1.414 1.415-2.121-2.121zM9.879 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM12 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-9 1h3v2H3v-2zm18 0h3v2h-3v-2z" />
        </svg>
      </motion.div>
    </motion.div>
  </motion.button>
}

export default ThemeButton;
