"use client"

import { FC, useRef, useState, ButtonHTMLAttributes, ReactNode, MouseEvent } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<Props> = ({ children, className = "", ...props }) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setPosition({ x, y })
    }
  }

  return <button
    ref={buttonRef}
    {...props}
    className={`relative overflow-hidden px-5 bg-slate-400/50 dark:bg-gray-800/80 py-2 rounded-md hover:text-whitet ransition-all duration-300 ${className}`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onMouseMove={handleMouseMove}
  >
    <span className="relative z-10">{children}</span>

    <span
      className={`absolute block rounded-full bg-indigo-600 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: "300px",
        height: "300px",
      }}
    />
  </button>
}

export default Button;