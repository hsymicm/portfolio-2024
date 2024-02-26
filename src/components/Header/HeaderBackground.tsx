"use client"

import { FC, useRef, useState, useEffect } from "react";
import { generateRandomNumber } from "@/libs/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import BackgroundWrapper from "@/components/Wrapper/BackgroundWrapper";
import ForegroundWrapper from "@/components/Wrapper/ForegroundWrapper";
import ShinyStar from "@/components/Background/ShinyStar";

const HeaderBackground: FC = () => {
  const orbit = useRef<any[]>([]);

  const totalOfOrbit: number = 12;
  const orbitThickness: number = 1;
  const ballWidth: number = 14;

  const gradient: string =
    "conic-gradient(from 205deg at 50% 50%, rgba(255, 255, 255, 0.43) 4.392405599355698deg, rgba(255, 255, 255, 0.19) 26.433003544807434deg, #FFF 58.7471204996109deg, rgba(255, 255, 255, 0.29) 81.01170837879181deg, #FFF 122.40000128746033deg, rgba(255, 255, 255, 0.17) 160.19999742507935deg, #FFF 198.00000429153442deg, rgba(255, 255, 255, 0.48) 225deg, rgba(255, 255, 255, 0.55) 254.14423942565918deg, #FFF 274.6719789505005deg, rgba(255, 255, 255, 0.35) 291.8365502357483deg, #FFF 313.20000171661377deg, rgba(255, 255, 255, 0.43) 338.86640310287476deg)";

  const [randomRotationArr, _] = useState<number[]>(
    generateRandomNumber(totalOfOrbit)
  );

  useGSAP(() => {
    orbit.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { rotate: randomRotationArr[i] },
        {
          rotate: "+=360",
          duration: 10 + 20 * i,
          ease: "none",
          repeat: -1,
          modifiers: {
            rotate: (r) => gsap.utils.wrap(0, 360, parseInt(r)),
          },
        }
      );
    });
  });

  return (
    <>
      <ForegroundWrapper>
        <ShinyStar className="absolute bottom-48 -left-[4%] md:left-6" size="sm"/>
        <ShinyStar className="absolute -top-8 -right-[4%] md:right-12" size="md"/>
        <ShinyStar className="absolute -bottom-8 left-[6%] md:left-24" size="md"/>
        <div className="absolute -bottom-[280px] md:-bottom-[180px] -left-[240px] md:-left-[120px] w-[420px] bg-white/50 aspect-square rounded-full blur-[300px]" />
        <div className="absolute -top-[280px] md:-top-[180px] -right-[320px] md:-right-[240px] w-[420px] bg-white/60 aspect-square rounded-full blur-[300px]" />
        <div className="absolute -top-1 left-0 w-full h-32 bg-gradient-to-b from-black/50 from-20% to-transparent -z-20" />
        <div className="absolute -bottom-1 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent -z-20" />
      </ForegroundWrapper>
      <BackgroundWrapper>
        {randomRotationArr.map((e, i) => {
          return (
            <div
              key={i}
              ref={(el) => (orbit.current[i] = el)}
              style={{
                width: `${120 + 200 * i}px`,
                background: `${gradient}, #000`,
                zIndex: totalOfOrbit - i,
                mixBlendMode: "screen",
              }}
              className=" shadow-2xl shadow-white/5 absolute aspect-square rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div
                style={{
                  width: ballWidth + 2 * i,
                  left: -(ballWidth + 2 * i) / 2,
                  rotate: `${((e % 360) + 360) % 360}deg`,
                  transformOrigin: "top center",
                }}
                className="absolute top-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-gray-500 to-white aspect-square"
              />
              <div
                style={{
                  width: `calc(100% + ${orbitThickness * 2})`,
                  margin: orbitThickness,
                }}
                className="aspect-square rounded-full bg-black"
              />
            </div>
          );
        })}
      </BackgroundWrapper>
    </>
  );
};

export default HeaderBackground;
