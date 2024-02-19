import NavMenu from "@/components/Navigation/NavMenu"
import { cn } from "@/libs/cn"

type MobileNavProps = {
  isOpen: boolean
  pathname: string
  setIsOpen: any
}

export default function MobileNav({
  isOpen,
  setIsOpen,
  pathname,
}: MobileNavProps) {
  return (
    <ul
      className={cn(
        isOpen ? "right-0" : "-right-[100%]",
        "fixed bg-black w-full h-full top-0 flex md:hidden flex-col gap-12 justify-center items-center z-10 transition-all duration-[700ms] ease-in-out"
      )}
    >
      <div onClick={setIsOpen}>
        <NavMenu
          className={cn(
            isOpen ? "translate-x-0" : "translate-x-[100%]",
            "transition-all duration-[300ms] ease-in-out"
          )}
          id="mobile-nav"
          path="/"
          currentPath={pathname}
          mobile
        >
          Home
        </NavMenu>
      </div>
      <div onClick={setIsOpen}>
        <NavMenu
          className={cn(
            isOpen ? "translate-x-0" : "translate-x-[100%]",
            "transition-all duration-[400ms] ease-in-out"
          )}
          id="mobile-nav"
          path="/#stack"
          currentPath={pathname}
          scroll
          mobile
        >
          Stack
        </NavMenu>
      </div>
      <div onClick={setIsOpen}>
        <NavMenu
          className={cn(
            isOpen ? "translate-x-0" : "translate-x-[100%]",
            "transition-all duration-[500ms] ease-in-out"
          )}
          id="mobile-nav"
          path="/work"
          currentPath={pathname}
          mobile
        >
          Work
        </NavMenu>
      </div>
      <div onClick={setIsOpen}>
        <NavMenu
          className={cn(
            isOpen ? "translate-x-0" : "translate-x-[100%]",
            "transition-all duration-[600ms] ease-in-out"
          )}
          id="mobile-nav"
          path="/about"
          currentPath={pathname}
          mobile
        >
          About
        </NavMenu>
      </div>
      <div onClick={setIsOpen}>
        <NavMenu
          className={cn(
            isOpen ? "translate-x-0" : "translate-x-[100%]",
            "transition-all duration-[700ms] ease-in-out"
          )}
          id="mobile-nav"
          path="/contact"
          currentPath={pathname}
          mobile
        >
          Contact
        </NavMenu>
      </div>
    </ul>
  )
}
