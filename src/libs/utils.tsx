import { clsx } from "clsx";
import { useState, useLayoutEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...args: any[]) {
  return twMerge(clsx(args));
}

export function generateRandomNumber(num: number) {
  return Array.from({ length: num }, () => Math.random() * 360);
}

export function useWindowSize() {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}
