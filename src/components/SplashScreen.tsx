"use client"

import { FC, useState, useEffect, useRef } from "react"
import { cn } from "@/libs/cn"
import gsap from "gsap"

const SplashScreen: FC = () => {
  const [show, setShow] = useState(true)

  const openDuration = 3

  useEffect(() => {
    // const body = document.querySelector("body")
    // body.classList.add("loading")

    const ctx = gsap.context(() => {
      gsap.to("#bar", {
        onStart: () => {
          gsap.to("#bg-blocker", {
            backgroundColor: "transparent",
            duration: 0,
            repeat: 0,
            ease: "none",
          })
          gsap.to("#stagger-text", {
            yPercent: 100,
            opacity: 0,
            duration: openDuration/3,
            delay: 0.2,
            ease: "power3.inOut",
            stagger: 0.1,
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
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: 0,
      })

      gsap.to("#bar-child", {
        yPercent: 100,
        duration: openDuration * 1.2,
        delay: 0.1,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: 0,
        onComplete: () => {
          setShow(false)
          // body.classList.remove("loading")
        },
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
      <div
        id="bg-blocker"
        className="absolute top-0 left-0 bg-black w-screen h-screen"
      ></div>
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

export default SplashScreen
