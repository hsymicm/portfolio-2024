"use client"

import { FC, useState } from "react"
import { usePathname } from "next/navigation"
import { Twirl as Hamburger } from "hamburger-react"

import Image from "next/image"
import Profile from "@/assets/profile.jpg"
import MobileNav from "@/components/Navigation/MobileNav"
import NavMenu from "@/components/Navigation/NavMenu"
import Button from "@/components/Button"

const Navigation: FC = () => {
  const pathname = usePathname()

  const [menu, setMenu] = useState(false)

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <nav className="fixed bg-gradient-to-b from-black/70 to-transparent w-full p-6 flex justify-between z-50">
      <section className="flex gap-6">
        <Image
          className="w-16 aspect-square rounded-2xl bg-primary/50 backdrop-blur-lg backdrop-brightness-75 object-cover object-center"
          src={Profile}
          alt=""
          width={64}
          placeholder="blur"
        />
        <section className="hidden lg:block px-4 py-2 border-[1px] border-white/20 bg-primary/50 backdrop-blur-lg backdrop-brightness-75 rounded-2xl">
          <p className="text-white text-xl font-serif">Fadil Hisyam</p>
          <div className="flex items-center gap-[6px] text-xs font-thin text-white/80">
            <p>Front End Developer</p>
            <div className="text-[6px] leading-3">✦</div>
            <p>UI/UX Designer</p>
          </div>
        </section>
      </section>
      <section className="flex gap-6">
        <ul className="hidden md:flex items-center text-white p-2 border-[1px] border-white/20 bg-primary/50 backdrop-blur-lg backdrop-brightness-75 rounded-2xl">
          <NavMenu path="/" currentPath={pathname}>
            Home
          </NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu path="/#stack" currentPath={pathname} scroll>
            Stack
          </NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu path="/work" currentPath={pathname}>
            Work
          </NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu path="/about" currentPath={pathname}>
            About
          </NavMenu>
        </ul>
        <Button href="/contact" className="hidden md:flex items-center">
          Contact
        </Button>
        <div className="flex md:hidden items-center text-white z-20">
          <Hamburger
            onToggle={setMenu}
            toggled={menu}
            label="Show menu"
            distance="lg"
            size={36}
            rounded
          />
        </div>
        <MobileNav setIsOpen={handleMenu} isOpen={menu} pathname={pathname} />
      </section>
    </nav>
  )
}

export default Navigation
