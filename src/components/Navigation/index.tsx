"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Profile from "@/assets/profile.jpg";
import NavMenu from "@/components/Navigation/NavMenu";
import Button from "@/components/Button";

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full p-6 flex justify-between z-50">
      <section className="flex gap-6">
        <Image
          className="w-16 aspect-square rounded-2xl bg-primaryBackground object-cover object-center"
          src={Profile}
          alt=""
          width={64}
        />
        <section className="px-4 py-2 border-[1px] border-white/20 bg-primaryBackground rounded-2xl">
          <p className="text-white text-xl font-serif">Fadil Hisyam</p>
          <div className="flex items-center gap-[6px] text-xs font-thin text-white/80">
            <p>Front End Developer</p>
            <div className="text-[6px] leading-3">✦</div>
            <p>UI/UX Designer</p>
          </div>
        </section>
      </section>
      <section className="flex gap-6">
        <ul className="flex items-center text-white p-2 border-[1px] border-white/20 bg-primaryBackground rounded-2xl">
          <NavMenu path="/" currentPath={pathname}>
            Home
          </NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu currentPath={pathname}>Stack</NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu currentPath={pathname}>Work</NavMenu>
          <hr className="mx-2 border-[1px] border-white/20 h-8" />
          <NavMenu currentPath={pathname}>About</NavMenu>
        </ul>
        <Button className="flex items-center">Contact</Button>
      </section>
    </nav>
  );
};

export default Navigation;
