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
    base: "flex flex-col w-full h-full bg-primaryBackground rounded-2xl border-[1px] border-white/20",
    variant: {
      lg: "justify-between p-6 gap-2",
      md: "justify-between p-4 gap-2",
      sm: "justify-center items-center p-2",
    },
    square: "aspect-square",
  }

  return (
    <section className="grid grid-cols-7 gap-4 text-white w-full h-96">
      <section
        className={cn(
          "col-span-3 row-span-3",
          classes.base,
          classes.variant.lg,
          classes.square
        )}
      >
        <Image
          className="h-fit w-fit aspect-square max-w-20"
          src={React}
          alt="React Logo"
        />
        <section>
          <h3 className="font-semibold text-xl">React.js</h3>
          <p className="font-thin text-sm mt-[1px] text-white/80">
            My most used Libraries for creating interactive and responsive
            websites.
          </p>
        </section>
      </section>
      <section
        className={cn(
          "col-span-3 row-span-3 overflow-clip",
          classes.base,
          classes.variant.lg,
          classes.square
        )}
      >
        <section className="flex">
          <Image
            className="w-fit h-fit max-w-20 aspect-square invert"
            src={Next}
            alt="Next Logo"
          />
        </section>
        <section className="flex flex-col">
          <h3 className="font-semibold text-xl">Next.js</h3>
          <p className="font-thin text-sm mt-[1px] text-white/80">
            Powerful and versatile React-based framework for building websites.
          </p>
        </section>
      </section>
      <section
        className={cn(
          "col-span-1 row-span-5",
          classes.base,
          classes.variant.sm
        )}
      >
        <p
          style={{ writingMode: "vertical-rl" }}
          className="font-light text-white/80"
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
          className="h-fit w-fit aspect-square max-w-10"
          src={Javascript}
          alt="Javascript Logo"
        />
        <section>
          <h3 className="font-semibold text-sm">Javascript</h3>
          <p className="font-thin text-xs leading-4 text-white/80">
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
          className="h-fit w-fit aspect-square max-w-10"
          src={TailwindCSS}
          alt="TailwindCSS Logo"
        />
        <section>
          <h3 className="font-semibold text-sm">TailwindCSS</h3>
          <p className="font-thin text-xs leading-4 text-white/80">
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
    </section>
  )
}

export default TechStackGrid
