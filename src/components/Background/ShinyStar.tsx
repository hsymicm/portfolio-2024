"use client";

import { FC, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface ShinyStarProps {
  size?: "sm" | "md" | "lg";
  className?: any;
}

const ShinyStar: FC<ShinyStarProps> = ({ className, size = "md" }) => {
  const [randomRotation, setRandomRotation] = useState<number>(49);

  const starContainerRef = useRef<any>();
  const starRef = useRef<any>();

  useGSAP(() => {
    setRandomRotation(Math.floor(Math.random() * 361) - 180);

    gsap.to(starContainerRef.current, {
      yPercent: size === "lg" ? -60 : size === "sm" ? -30 : -50,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: starRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  // useEffect(() => {
  //   setRandomRotation(Math.floor(Math.random() * 361) - 180);
  // }, [])

  return (
    <div
      className={`${className} shiny-star`}
      id={`shiny-star-${size}`}
      ref={starContainerRef}
    >
      <div ref={starRef} className="shiny-star-container">
        {size === "lg" ? (
          <ShinyStarLarge rotation={randomRotation} />
        ) : size === "sm" ? (
          <ShinyStarSmall rotation={randomRotation} />
        ) : (
          <ShinyStarMedium rotation={randomRotation} />
        )}
      </div>
    </div>
  );
};

interface ShinyStarRotationProp {
  rotation: number;
}

const ShinyStarLarge: FC<ShinyStarRotationProp> = ({ rotation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="166"
      height="377"
      viewBox="0 0 166 377"
      fill="none"
    >
      <mask
        id="mask0_98_13"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="166"
        height="377"
      >
        <path
          d="M82.6837 369.439C82.8919 366.738 83.1668 363.322 83.5113 359.339C84.4119 348.929 85.788 334.651 87.6903 319.178C91.4915 288.261 97.4031 252.484 105.851 233.319C114.324 214.096 129.32 202.539 142.172 195.794C148.6 192.42 154.498 190.246 158.791 188.914C160.938 188.249 162.684 187.793 163.896 187.504C163.985 187.483 164.072 187.462 164.156 187.443C164.049 187.399 163.938 187.353 163.821 187.305C162.613 186.805 160.869 186.048 158.726 185.021C154.44 182.967 148.55 179.83 142.132 175.498C129.302 166.836 114.326 153.372 105.851 134.189C97.4566 115.188 91.5443 81.6214 87.7298 52.865C85.8209 38.4744 84.435 25.2682 83.5262 15.6597C83.175 11.9457 82.895 8.76901 82.6837 6.269C82.472 8.76764 82.1915 11.9422 81.8398 15.6537C80.9296 25.2588 79.5419 38.4611 77.6319 52.8489C73.815 81.6001 67.9027 115.167 59.5178 134.189C51.1144 153.254 36.2677 166.717 23.5484 175.408C17.1859 179.755 11.3475 182.914 7.09843 184.986C4.97366 186.023 3.24562 186.788 2.04733 187.294C1.92151 187.347 1.80153 187.398 1.68755 187.445C1.77901 187.467 1.87413 187.49 1.97282 187.515C3.17372 187.81 4.90488 188.273 7.0331 188.948C11.2889 190.298 17.1363 192.495 23.5082 195.883C36.2491 202.658 51.1158 214.214 59.518 233.319C67.9561 252.506 73.8677 288.282 77.6713 319.195C79.5748 334.664 80.9527 348.939 81.8548 359.345C82.1997 363.325 82.4751 366.74 82.6837 369.439Z"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_98_13)">
        <path
          d="M82.6844 376.328C82.6844 376.328 89.4822 271.694 106.308 233.521C123.135 195.348 165.882 187.582 165.882 187.582C165.882 187.582 123.154 172.117 106.308 133.987C89.5859 96.1355 82.6844 0 82.6844 0C82.6844 0 75.764 96.0924 59.0603 133.987C42.3566 171.882 4.37895e-05 187.582 4.37895e-05 187.582C4.37895e-05 187.582 42.3756 195.583 59.0603 233.521C75.8675 271.737 82.6844 376.328 82.6844 376.328Z"
          fill="black"
        />
        <path
          d="M82.6844 376.328C82.6844 376.328 89.4822 271.694 106.308 233.521C123.135 195.348 165.882 187.582 165.882 187.582C165.882 187.582 123.154 172.117 106.308 133.987C89.5859 96.1355 82.6844 0 82.6844 0C82.6844 0 75.764 96.0924 59.0603 133.987C42.3566 171.882 4.37895e-05 187.582 4.37895e-05 187.582C4.37895e-05 187.582 42.3756 195.583 59.0603 233.521C75.8675 271.737 82.6844 376.328 82.6844 376.328Z"
          fill="url(#paint0_angular_98_13)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_98_13"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(82.9408 188.164) rotate(${rotation}) scale(221.047 82.6426)`}
        >
          <stop offset="0.0122011" stopColor="white" stopOpacity="0.43" />
          <stop offset="0.073425" stopColor="white" stopOpacity="0.19" />
          <stop offset="0.163186" stopColor="white" />
          <stop offset="0.225033" stopColor="white" stopOpacity="0.29" />
          <stop offset="0.34" stopColor="white" />
          <stop offset="0.445" stopColor="white" stopOpacity="0.17" />
          <stop offset="0.55" stopColor="white" />
          <stop offset="0.625" stopColor="white" stopOpacity="0.482759" />
          <stop offset="0.705956" stopColor="white" stopOpacity="0.55" />
          <stop offset="0.762978" stopColor="white" />
          <stop offset="0.810657" stopColor="white" stopOpacity="0.35" />
          <stop offset="0.87" stopColor="white" />
          <stop offset="0.941296" stopColor="white" stopOpacity="0.43" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const ShinyStarMedium: FC<ShinyStarRotationProp> = ({ rotation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="118"
      height="268"
      viewBox="0 0 118 268"
      fill="none"
    >
      <mask
        id="mask0_98_10"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="118"
        height="268"
      >
        <path
          d="M58.8763 6.59068C58.7495 8.0409 58.5979 9.7175 58.4209 11.5854C57.7739 18.4124 56.7876 27.7963 55.4299 38.0231C52.7178 58.4522 48.5145 82.326 42.5464 95.8657C36.5596 109.448 25.9854 119.034 16.9343 125.219C12.406 128.313 8.25069 130.561 5.2262 132.036C3.79814 132.732 2.62157 133.257 1.77609 133.617C2.618 133.828 3.77033 134.143 5.16009 134.584C8.19089 135.545 12.3547 137.109 16.8921 139.522C25.964 144.346 36.5583 152.579 42.5465 166.195C48.5529 179.852 52.7556 205.298 55.4581 227.262C56.8111 238.257 57.7904 248.403 58.4316 255.8C58.6041 257.79 58.7521 259.581 58.8763 261.136C59.0004 259.58 59.1482 257.787 59.3205 255.795C59.9606 248.396 60.9387 238.248 62.2908 227.25C64.9916 205.283 69.1942 179.837 75.2076 166.195C81.2467 152.494 91.9331 144.261 101.084 139.458C105.661 137.056 109.861 135.507 112.919 134.559C114.306 134.129 115.459 133.822 116.306 133.615C115.455 133.259 114.278 132.744 112.853 132.061C109.802 130.599 105.61 128.367 101.042 125.283C91.9117 119.119 81.2454 109.532 75.2078 95.8661C69.2327 82.3414 65.0294 58.4673 62.319 38.0345C60.9622 27.8058 59.9771 18.419 59.3312 11.5896C59.1544 9.72003 59.003 8.042 58.8763 6.59068Z"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_98_10)">
        <path
          d="M58.877 267.881C58.877 267.881 63.7077 193.523 75.6651 166.396C87.6225 139.269 118 133.751 118 133.751C118 133.751 87.6361 122.76 75.6651 95.664C63.7814 68.7651 58.877 0.447632 58.877 0.447632C58.877 0.447632 53.9591 68.7345 42.0888 95.664C30.2186 122.594 0.118388 133.751 0.118388 133.751C0.118388 133.751 30.2321 139.436 42.0888 166.396C54.0327 193.554 58.877 267.881 58.877 267.881Z"
          fill="black"
        />
        <path
          d="M58.877 267.881C58.877 267.881 63.7077 193.523 75.6651 166.396C87.6225 139.269 118 133.751 118 133.751C118 133.751 87.6361 122.76 75.6651 95.664C63.7814 68.7651 58.877 0.447632 58.877 0.447632C58.877 0.447632 53.9591 68.7345 42.0888 95.664C30.2186 122.594 0.118388 133.751 0.118388 133.751C0.118388 133.751 30.2321 139.436 42.0888 166.396C54.0327 193.554 58.877 267.881 58.877 267.881Z"
          fill="url(#paint0_angular_98_10)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_98_10"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(59.0592 134.164) rotate(${rotation}) scale(200.575 74.9888)`}
        >
          <stop offset="0.0122011" stopColor="white" stopOpacity="0.43" />
          <stop offset="0.073425" stopColor="white" stopOpacity="0.19" />
          <stop offset="0.163186" stopColor="white" />
          <stop offset="0.225033" stopColor="white" stopOpacity="0.29" />
          <stop offset="0.34" stopColor="white" />
          <stop offset="0.445" stopColor="white" stopOpacity="0.17" />
          <stop offset="0.55" stopColor="white" />
          <stop offset="0.625" stopColor="white" stopOpacity="0.482759" />
          <stop offset="0.705956" stopColor="white" stopOpacity="0.55" />
          <stop offset="0.762978" stopColor="white" />
          <stop offset="0.810657" stopColor="white" stopOpacity="0.35" />
          <stop offset="0.87" stopColor="white" />
          <stop offset="0.941296" stopColor="white" stopOpacity="0.43" />
        </radialGradient>
      </defs>
    </svg>
  );
};

const ShinyStarSmall: FC<ShinyStarRotationProp> = ({ rotation }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="67"
      height="151"
      viewBox="0 0 67 151"
      fill="none"
    >
      <mask
        id="mask0_98_7"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="67"
        height="151"
      >
        <path
          d="M64.4888 74.8037C64.102 74.634 63.6474 74.4273 63.1364 74.1824C61.4175 73.3587 59.0567 72.1015 56.484 70.3647C51.3441 66.8949 45.3252 61.489 41.9159 53.7719C38.55 46.153 36.1897 32.7316 34.6699 21.275C33.9085 15.5344 33.3556 10.2666 32.9932 6.43415C32.9807 6.30208 32.9684 6.17171 32.9564 6.04308C32.9444 6.17095 32.9322 6.30055 32.9197 6.43184C32.5567 10.2629 32.0032 15.5291 31.2412 21.2686C29.7205 32.7232 27.3602 46.1443 23.9982 53.7715C20.6177 61.4409 14.6509 66.8466 9.55572 70.328C7.00531 72.0706 4.66507 73.3367 2.96114 74.1677C2.44402 74.42 1.98525 74.6322 1.59671 74.8057C1.97108 74.9084 2.40686 75.0355 2.8942 75.1901C4.60397 75.7324 6.95215 76.6145 9.51123 77.9754C14.6266 80.6955 20.6134 85.3445 23.9984 93.0414C27.3825 100.736 29.7422 115.041 31.2573 127.355C32.0166 133.525 32.5661 139.219 32.9259 143.369C32.9362 143.488 32.9464 143.606 32.9564 143.722C32.9664 143.605 32.9766 143.487 32.987 143.367C33.3462 139.215 33.895 133.52 34.6538 127.348C36.168 115.032 38.5277 100.727 41.9158 93.041C45.3295 85.2964 51.3685 80.6473 56.5285 77.9389C59.1099 76.5841 61.4786 75.7109 63.2033 75.1759C63.6848 75.0266 64.1164 74.9035 64.4888 74.8037Z"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_98_7)">
        <path
          d="M32.957 150.164C32.957 150.164 35.6665 108.458 42.3733 93.2427C49.08 78.0274 66.1184 74.9321 66.1184 74.9321C66.1184 74.9321 49.0876 68.7679 42.3733 53.5698C35.7078 38.4825 32.957 0.164078 32.957 0.164078C32.957 0.164078 30.1986 38.4654 23.5407 53.5698C16.8828 68.6743 -1.54718e-05 74.9321 -1.54718e-05 74.9321C-1.54718e-05 74.9321 16.8904 78.1211 23.5407 93.2427C30.2399 108.475 32.957 150.164 32.957 150.164Z"
          fill="black"
        />
        <path
          d="M32.957 150.164C32.957 150.164 35.6665 108.458 42.3733 93.2427C49.08 78.0274 66.1184 74.9321 66.1184 74.9321C66.1184 74.9321 49.0876 68.7679 42.3733 53.5698C35.7078 38.4825 32.957 0.164078 32.957 0.164078C32.957 0.164078 30.1986 38.4654 23.5407 53.5698C16.8828 68.6743 -1.54718e-05 74.9321 -1.54718e-05 74.9321C-1.54718e-05 74.9321 16.8904 78.1211 23.5407 93.2427C30.2399 108.475 32.957 150.164 32.957 150.164Z"
          fill="url(#paint0_angular_98_7)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_angular_98_7"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform={`translate(33.0592 75.1641) rotate(${rotation}) scale(112.5 42.0603)`}
        >
          <stop offset="0.0122011" stopColor="white" stopOpacity="0.43" />
          <stop offset="0.073425" stopColor="white" stopOpacity="0.19" />
          <stop offset="0.163186" stopColor="white" />
          <stop offset="0.225033" stopColor="white" stopOpacity="0.29" />
          <stop offset="0.34" stopColor="white" />
          <stop offset="0.445" stopColor="white" stopOpacity="0.17" />
          <stop offset="0.55" stopColor="white" />
          <stop offset="0.625" stopColor="white" stopOpacity="0.482759" />
          <stop offset="0.705956" stopColor="white" stopOpacity="0.55" />
          <stop offset="0.762978" stopColor="white" />
          <stop offset="0.810657" stopColor="white" stopOpacity="0.35" />
          <stop offset="0.87" stopColor="white" />
          <stop offset="0.941296" stopColor="white" stopOpacity="0.43" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ShinyStar;
