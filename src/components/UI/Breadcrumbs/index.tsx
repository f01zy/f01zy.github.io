"use client"

import { useAppSelector } from "@/hooks/selector.hook"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Fragment, useEffect, useState } from "react"

type TPaths = Array<{ name: string; path: string }>

const Breadcrumbs = () => {
  const [paths, setPaths] = useState<TPaths>([])
  const pathname = usePathname()
  const { isAboutTyping } = useAppSelector(s => s.utils)

  useEffect(() => {
    if (!pathname) return

    const segments = pathname.split("/").filter(Boolean)
    const accumulatedPaths = segments.reduce<Array<{ path: string, name: string }>>((acc, segment) => {
      const prevPath = acc.length > 0 ? acc[acc.length - 1].path : ""
      return [
        ...acc,
        {
          path: `${prevPath}/${segment}`,
          name: segment.charAt(0).toUpperCase() + segment.slice(1)
        }
      ]
    }, [])

    setPaths([
      { name: "Home", path: "/" },
      ...accumulatedPaths
    ])
  }, [pathname])

  return <div className={`flex h-[15vh] px-10 items-center gap-2 text-sm w-full transition-opacity duration-300 ${isAboutTyping ? "opacity-0" : "opacity-100"}`}>
    {paths.map((item, index) => (
      <Fragment key={item.path}>
        <Link
          href={item.path}
          className={`${index === paths.length - 1
            ? "text-gray-800 dark:text-gray-200 font-medium"
            : "text-gray-500 dark:text-gray-400 hover:underline"
            }`}
        >
          {item.name}
        </Link>
        {index < paths.length - 1 && (
          <span className="text-gray-400 dark:text-gray-500 mx-1">{">"}</span>
        )}
      </Fragment>
    ))}
  </div>
}

export default Breadcrumbs;
