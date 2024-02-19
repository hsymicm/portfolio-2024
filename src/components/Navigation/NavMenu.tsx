import { FC, ReactNode } from "react"
import { cn } from "@/libs/cn"

import Link from "next/link"

interface NavMenuProps {
  children: ReactNode
  currentPath: string
  className?: string
  path?: string
  scroll?: boolean
  mobile?: boolean
  id?: string
}

const NavMenu: FC<NavMenuProps> = ({
  children,
  id,
  className,
  currentPath,
  mobile = false,
  scroll = true,
  path = "",
}) => {
  const active = currentPath === path

  return (
    <Link
      id={id}
      scroll={scroll}
      href={path}
      className={cn(
        "relative transition duration-150 ease-in-out cursor-pointer",
        !mobile
          ? [
              active ? "bg-white text-black" : "bg-transparent text-white",
              "hover:bg-zinc-100 active:bg-zinc-300 hover:text-black",
              "flex items-center h-full px-4 py-0 rounded-lg",
            ]
          : [
              active ? "before:w-full" : "before:w-0 ",
              "text-white text-lg p-4",
              "before:left-0 before:bottom-0 before:right-0 before:absolute before:h-[2px] before:bg-white",
            ],
        className
      )}
    >
      {children}
    </Link>
  )
}

export default NavMenu
