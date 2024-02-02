"use client"

import { FC } from "react";

const NoiseOverlay: FC = () => {
  return (
    <svg
      className="fixed"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="grainy-filter"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="linearRGB"
        >
          <feTurbulence
            type="turbulence"
            baseFrequency="0.8"
            numOctaves="8"
            seed="15"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feSpecularLighting
            surfaceScale="13"
            specularConstant="1.3"
            specularExponent="20"
            lightingColor="#ffffff"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="specularLighting"
          >
            <feDistantLight azimuth="3" elevation="152"></feDistantLight>
          </feSpecularLighting>
        </filter>
      </defs>
    </svg>
  );
};

export default NoiseOverlay;