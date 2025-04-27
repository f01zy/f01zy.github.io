"use client"

import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import React, { FC } from "react";
import { useAppSelector } from "@/hooks/selector.hook";

interface Props {
  callback: () => void
  className?: string
  arrowColor?: string
  bounceHeight?: number
  hoverScale?: number
}

const Down: FC<Props> = ({
  callback,
  className = "",
  arrowColor = "text-gray-400 dark:text-gray-500",
  bounceHeight = 5,
  hoverScale = 1.05,
}) => {
  const { isAboutTyping, isLimitedHeight } = useAppSelector(s => s.utils)

  return isAboutTyping && <motion.div
    className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-opacity ${className} ${isLimitedHeight ? "opacity-70 hover:opacity-100" : "opacity-0"}`}
  >
    <motion.div
      onClick={callback}
      whileHover={{
        y: -bounceHeight * 1.5,
        scale: hoverScale,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 10,
        },
      }}
      className={`${arrowColor} transition-colors`}
    >
      <FiChevronDown className="w-8 h-8" />
    </motion.div>
  </motion.div>
}

export default Down;