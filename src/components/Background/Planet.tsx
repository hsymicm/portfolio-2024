"use client";

import { FC, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import { cn } from "@/libs/cn";

gsap.registerPlugin(CustomEase);

interface PlanetProps {
  rotation: number;
  duration: number;
  angle?: number;
  multiplier?: number;
  className?: any;
}

const Planet: FC<PlanetProps> = ({
  rotation,
  duration,
  angle = 0,
  multiplier = 0.75,
  className,
}) => {
  const gradient: string =
    "conic-gradient(from 205deg at 50% 50%, rgba(255, 255, 255, 0.43) 4.392405599355698deg, rgba(255, 255, 255, 0.19) 26.433003544807434deg, #FFF 58.7471204996109deg, rgba(255, 255, 255, 0.29) 81.01170837879181deg, #FFF 122.40000128746033deg, rgba(255, 255, 255, 0.17) 160.19999742507935deg, #FFF 198.00000429153442deg, rgba(255, 255, 255, 0.48) 225deg, rgba(255, 255, 255, 0.55) 254.14423942565918deg, #FFF 274.6719789505005deg, rgba(255, 255, 255, 0.35) 291.8365502357483deg, #FFF 313.20000171661377deg, rgba(255, 255, 255, 0.43) 338.86640310287476deg)";

  const orbitPlanet = useRef<any>();
  const planet = useRef<any>();

  const semiMajorAxis = 7.68;
  const semiMinorAxis = 1;

  function getEllipseCoordinates(angleInDegrees: number) {
    const normalizedAngle = (((angleInDegrees + 180) % 360) + 360) % 360; // Adjust for negative angles
    const x =
      0.5 +
      ((semiMajorAxis / 2) * Math.cos((normalizedAngle * Math.PI) / 180)) /
        semiMajorAxis;
    const y =
      0.5 +
      ((semiMinorAxis / 2) * Math.sin((normalizedAngle * Math.PI) / 180)) /
        semiMinorAxis;
    return { x, y };
  }
  const [coor, setCoor] = useState(getEllipseCoordinates(angle));
  // console.log({x, y})

  useGSAP(() => {
    gsap.to(orbitPlanet.current, {
      rotate: "+=4",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.148,0 0.094,0.866 0.193,0.866 0.294,0.866 0.256,0.2 0.353,0.2 0.452,0.2 0.412,0.7 0.5,0.7 0.589,0.7 0.547,0.405 0.658,0.406 0.735,0.406 0.705,0.8 0.8,0.8 0.901,0.8 0.849,0 1,0 "
      ),
      repeat: -1,
      duration: duration,
    });

    const tween = gsap.to(planet, {
      duration: 20,
      onUpdate: () => {
        const progress = tween.progress();
        setCoor(getEllipseCoordinates(angle + 360 * progress));
      },
      repeat: -1,
    });
  });

  return (
    <div
      ref={orbitPlanet}
      style={{
        width: `${multiplier * 100}%`,
        background: `${gradient}, #000`,
        rotate: `${rotation}deg`,
        aspectRatio: `${semiMajorAxis}/${semiMinorAxis}`,
        mixBlendMode: "screen",
      }}
      className={cn("absolute rounded-[50%] left-0 right-0 top-0 bottom-0 m-auto", className)}
    >
      <div
        ref={planet}
        style={{
          left: `${coor.x * 100}%`,
          top: `${coor.y * 100}%`,
        }}
        className="absolute w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-gray-500 to-white aspect-square"
      />
      <div
        style={{
          aspectRatio: `${semiMajorAxis}/${semiMinorAxis}`,
        }}
        className="rounded-[50%] m-[1px] bg-black"
      />
    </div>
  );
};

export default Planet;
