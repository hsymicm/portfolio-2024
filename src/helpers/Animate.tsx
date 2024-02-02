"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

export default function Animate() {
  useGSAP(() => {
    const stars = document.querySelectorAll(".shiny-star");
    
    stars.forEach((star) => {
        const starContainer = star.querySelector('.shiny-star-container')

        gsap.to(starContainer, {
          yPercent: ,
          ease: "none",
          scrollTrigger: {
            trigger: star,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
    })
  });

  return <></>;
}
