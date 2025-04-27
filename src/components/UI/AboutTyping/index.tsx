"use client"

import { useAppDispatch } from "@/hooks/dispatch.hook"
import Typing from "../Typing"
import { setIsLimitedHeight, setIsAboutTyping } from "@/store/slices/utils.slice"
import { about } from "@/config"
import { useAppSelector } from "@/hooks/selector.hook"
import Down from "../Down"

const AboutTyping = () => {
  const dispatch = useAppDispatch()
  const isAboutTyping = useAppSelector(s => s.utils.isAboutTyping)

  const callback = () => {
    dispatch(setIsLimitedHeight(false))

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      })
      setTimeout(() => {
        dispatch(setIsAboutTyping(false))
        dispatch(setIsLimitedHeight(true))
      }, 1000)
    }, 200)
  }

  return isAboutTyping ? <div className="w-full h-screen flex items-center justify-center">
    <Typing
      className="w-2/3 h-fit"
      typeText={about}
      speed={35}
      callback={callback}
    />
    <Down callback={callback} />
  </div> : ""
}

export default AboutTyping;