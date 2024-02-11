"use client"

import { FC, useState, useEffect } from "react"
import { cn } from "@/libs/cn"
import gsap from "gsap"

const SplashScreenV2: FC = () => {
  const [show, setShow] = useState(true)

  const openDuration = 2

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#bar", {
        onStart: () => {
          gsap.to("#stagger-text", {
            yPercent: 100,
            opacity: 0,
            duration: openDuration/3,
            delay: openDuration/15,
            ease: "power4.inOut",
            stagger: openDuration/30,
            repeat: 0,
          })
          gsap.to("#splash-screen-glow", {
            opacity: 0,
            duration: openDuration,
            ease: "none",
            repeat: 0,
          })
        },
        yPercent: 100,
        duration: openDuration,
        ease: "power3.inOut",
        stagger: openDuration/10,
        repeat: 0,
      })

      gsap.to("#bar-child", {
        yPercent: 100,
        duration: openDuration * 1.2,
        delay: openDuration/30,
        ease: "power3.inOut",
        stagger: openDuration/10,
        repeat: 0,
        onComplete: () => setShow(false),
      })
    })

    return () => ctx.revert()
  }, [])

  if (!show) return null

  return (
    <div
      id="splash-screen"
      className={cn(
        "fixed top-0 left-0",
        "w-screen h-screen",
        "flex items-center justify-center",
        "overflow-hidden",
        "z-[9999]"
      )}
    >
      <div className="flex text-white text-5xl font-serif z-10 pb-[6px] mb-4 overflow-hidden">
        <span id="stagger-text">F</span>
        <span id="stagger-text">a</span>
        <span id="stagger-text">d</span>
        <span id="stagger-text">i</span>
        <span id="stagger-text" className="mr-[10px]">l</span>
        <span id="stagger-text">H</span>
        <span id="stagger-text">i</span>
        <span id="stagger-text">s</span>
        <span id="stagger-text">y</span>
        <span id="stagger-text">a</span>
        <span id="stagger-text">m</span>
        <span id="stagger-text" className="">.</span>
      </div>
      <div id="splash-screen-glow" className="absolute left-1/2 -translate-x-1/2 -bottom-[380px] w-[540px] bg-white/40 aspect-square rounded-full blur-[300px] z-10" />
      <div className="absolute top-0 left-0 flex  w-screen h-screen">
        <div id="bar" className="w-1/5 bg-black border-2 border-black"></div>
        <div id="bar" className="w-1/5 bg-black border-2 border-black"></div>
        <div id="bar" className="w-1/5 bg-black border-2 border-black"></div>
        <div id="bar" className="w-1/5 bg-black border-2 border-black"></div>
        <div id="bar" className="w-1/5 bg-black border-2 border-black"></div>
      </div>
      <div className="absolute top-0 left-0 flex w-screen h-screen -z-10">
        <div
          id="bar-child"
          className=" w-1/5 bg-gradient-to-b from-transparent to-40% to-white"
        ></div>
        <div
          id="bar-child"
          className=" w-1/5 bg-gradient-to-b from-transparent to-40% to-white"
        ></div>
        <div
          id="bar-child"
          className=" w-1/5 bg-gradient-to-b from-transparent to-40% to-white "
        ></div>
        <div
          id="bar-child"
          className=" w-1/5 bg-gradient-to-b from-transparent to-40% to-white "
        ></div>
        <div
          id="bar-child"
          className=" w-1/5 bg-gradient-to-b from-transparent to-40% to-white "
        ></div>
      </div>
    </div>
  )
}

export default SplashScreenV2
