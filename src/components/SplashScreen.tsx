"use client";

import { FC, useState, useEffect, useRef } from "react";
import { cn } from "@/libs/utils";
import gsap from "gsap";

const SplashScreen: FC = () => {
  const [show, setShow] = useState(true);
  const opener = useRef<any>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to("#splash-screen-1",  {yPercent: -100, duration: 0.8, ease: "sine.inOut", repeat: 0})
      gsap.to("#splash-screen-2",  {yPercent: 100, duration: 0.8, ease: "sine.inOut", repeat: 0})
    })

    const body = document.querySelector("body");
    body.classList.add("loading");


    setTimeout(() => {
      setShow(false);
      body.classList.remove("loading");
    }, 4000);

    return () => ctx.revert();
  }, []);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed top-0 left-0",
        "w-screen h-screen",
        "flex items-center justify-center",
        "overflow-hidden",
        "z-[9999]"
      )}
    >
      <p className="text-white z-10">Loading...</p>
      <div className="absolute top-0 left-0 flex w-screen h-screen">
        <div id="splash-screen-1" className="w-1/2 bg-black"></div>
        <div id="splash-screen-2" className="w-1/2 bg-black"></div>
      </div>
      {/* <div id="splash-screen" style={{borderWidth: 9999}} className={cn(
          "absolute w-[300%] border-black aspect-square rounded-full"
        )}
      /> */}
    </div>
  );
};

export default SplashScreen;
