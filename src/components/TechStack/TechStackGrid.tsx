import { FC } from "react"
import { cn } from "@/libs/cn"

import Image from "next/image"
import Figma from "@/assets/figma.svg"
import Vue from "@/assets/vue.svg"
import Firebase from "@/assets/firebase.svg"
import Vercel from "@/assets/vercel.svg"
import React from "@/assets/react.svg"
import Next from "@/assets/nextjs.svg"
import Javascript from "@/assets/javascript.svg"
import TailwindCSS from "@/assets/tailwindcss.svg"

const TechStackGrid: FC = () => {
  const classes = {
    base: "flex flex-col w-full h-full bg-primary/50 rounded-2xl border-[1px] border-white/20 backdrop-blur-lg backdrop-brightness-75",
    variant: {
      lg: "justify-between p-6 gap-2",
      md: "justify-between p-6 sm:p-4 gap-2",
      sm: "justify-center items-center p-2",
    },
    square: "aspect-square",
  }

  return (
    <section className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-4 text-white w-full md:h-96">
      <section
        className={cn(
          "col-span-2 row-span-2 sm:col-span-3 sm:row-span-3",
          classes.base,
          classes.variant.lg,
          classes.square
        )}
      >
        <Image
          className="aspect-square w-full max-w-40 md:max-w-20"
          src={React}
          alt="React Logo"
        />
        <section>
          <h3 className="text-center sm:text-left font-semibold text-xl">React.js</h3>
          <p className="text-center sm:text-left font-light text-sm mt-[1px] text-white/80">
            My most used Libraries for creating interactive and responsive
            websites.
          </p>
        </section>
      </section>
      <section
        className={cn(
          "col-span-2 row-span-2 sm:col-span-3 sm:row-span-3 overflow-clip",
          classes.base,
          classes.variant.lg,
          classes.square
        )}
      >
        <section className="flex">
          <Image
            className="p-1 w-full max-w-40 md:max-w-20 aspect-square invert"
            src={Next}
            alt="Next Logo"
            />
        </section>
        <section className="flex flex-col">
          <h3 className="text-center sm:text-left font-semibold text-xl">Next.js</h3>
          <p className="text-center sm:text-left font-light text-sm mt-[1px] text-white/80">
            Powerful and versatile React-based framework for building websites.
          </p>
        </section>
      </section>
      <section
        className={cn(
          "col-span-1 row-span-5",
          classes.base,
          classes.variant.sm,
          "hidden md:flex",
        )}
      >
        <p
          className="text-white/80 vertical-text"
        >
          And many more...
        </p>
      </section>

      <section
        className={cn(
          "col-span-2 row-span-2",
          classes.base,
          classes.variant.md,
          classes.square
        )}
      >
        <Image
          className="p-1 w-full max-w-40 sm:max-w-32 md:max-w-10 aspect-square"
          src={Javascript}
          alt="Javascript Logo"
        />
        <section className="flex flex-col gap-[2px]">
          <h3 className="text-center sm:text-left font-semibold text-lg md:text-sm">Javascript</h3>
          <p className="text-center sm:text-left font-light text-sm md:text-xs md:leading-4 text-white/80">
            Currently my primary programming language.
          </p>
        </section>
      </section>
      <section
        className={cn(
          "col-span-2 row-span-2",
          classes.base,
          classes.variant.md,
          classes.square
        )}
      >
        <Image
          className="p-1 w-full max-w-40 sm:max-w-32 md:max-w-10 aspect-square"
          src={TailwindCSS}
          alt="TailwindCSS Logo"
        />
        <section className="flex flex-col gap-[2px]">
          <h3 className="text-center sm:text-left font-semibold text-lg md:text-sm">TailwindCSS</h3>
          <p className="text-center sm:text-left font-light text-sm md:text-xs md:leading-4 text-white/80">
            CSS Framework for fast development time.
          </p>
        </section>
      </section>

      <section className={cn(classes.base, classes.variant.sm, classes.square)}>
        <Image
          className="w-full h-full aspect-square max-w-8"
          src={Figma}
          alt="Figma Logo"
        />
      </section>
      <section className={cn(classes.base, classes.variant.sm, classes.square)}>
        <Image
          className="w-full h-full aspect-square max-w-8"
          src={Vue}
          alt="Vue Logo"
        />
      </section>
      <section className={cn(classes.base, classes.variant.sm, classes.square)}>
        <Image
          className="w-full h-full aspect-square max-w-8"
          src={Firebase}
          alt="Firebase Logo"
        />
      </section>
      <section className={cn(classes.base, classes.variant.sm, classes.square)}>
        <Image
          className="w-full h-full aspect-square max-w-8 invert"
          src={Vercel}
          alt="Vercel Logo"
        />
      </section>
      <section
        className={cn(
          "col-span-4 sm:col-span-6 row-span-1",
          classes.base,
          classes.variant.sm,
          "md:hidden flex",
        )}
      >
        <p
          className="text-white/80"
        >
          And many more...
        </p>
      </section>
    </section>
  )
}

export default TechStackGrid
