import { FC, ReactNode } from "react";
import { cn } from "@/libs/cn";

import Link from "next/link";

interface NavMenuProps {
  children: ReactNode;
  currentPath: string;
  path?: string;
}

const NavMenu: FC<NavMenuProps> = ({ children, currentPath, path = "" }) => {
  return (
    <Link
      href={path}
      className={cn(
        currentPath === path ? "bg-white text-black" : "bg-transparent text-white",
        "hover:bg-zinc-100 active:bg-zinc-300 hover:text-black",
        "flex items-center h-full px-4 rounded-lg transition duration-150 ease-in-out cursor-pointer"
      )}
    >
      {children}
    </Link>
  );
};

export default NavMenu;
