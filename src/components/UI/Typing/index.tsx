"use client"

import { FC, useEffect, useState } from "react";

interface Props {
  typeText: string
  callback?: () => void
  speed?: number
  className?: string
  isSkip?: boolean
}

const Typing: FC<Props> = ({ callback, typeText, speed, className = "", isSkip = false }) => {
  const [text, setText] = useState<string>("")
  const [currentIndex, setCurrentIndex] = useState(0);

  const start = () => {
    setCurrentIndex(0)
  }

  useEffect(() => {
    if (currentIndex < typeText.length) {
      const timer = setTimeout(() => {
        setText(prevText => prevText + typeText[currentIndex])
        setCurrentIndex(prev => prev + 1);
      }, speed || 100)

      return () => clearTimeout(timer)
    }

    callback && callback()
  }, [currentIndex])

  useEffect(() => {
    start()
  }, [])

  return <div className={className}>
    <h4>{text + ((text.length != 0 && currentIndex < typeText.length) ? "|" : "")}</h4>
    {
      isSkip && currentIndex != typeText.length && <h4
        className="mt-2 text-sm font-light dark:text-gray-400/60 dark:hover:text-gray-500 text-gray-700/60 hover:text-gray-800 hover:underline transition-opacity duration-300 opacity-70 hover:opacity-100 cursor-pointer select-none"
        onClick={() => {
          setCurrentIndex(typeText.length)
          setText(typeText)
        }}
      >
        skip
      </h4>
    }
  </div>
}

export default Typing;