"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = () => {
  useEffect(() => {
    const defaults = {
      duration: 1.2,
      ease: "power3.out",
      animation: "fade_from_bottom",
    };

    gsap.utils.toArray<HTMLElement>(".scroll-animation").forEach((box) => {
      const animationType = box.dataset.animation || defaults.animation;
      const duration = parseFloat(box.dataset.animationDuration || `${defaults.duration}`);

      const animations: Record<string, any> = {
        fade_from_bottom: { y: 100, opacity: 0 },
        fade_from_top: { y: -100, opacity: 0 },
        fade_from_left: { x: -100, opacity: 0 },
        fade_from_right: { x: 100, opacity: 0 },
        fade_in: { opacity: 0 },
        rotate_up: { y: 100, rotation: 10, opacity: 0 },
      };

      gsap.fromTo(
        box,
        animations[animationType],
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: box,
            start: "top bottom+=20%",
            toggleActions: "play none none reverse",
            once: false,
          },
        }
      );
    });
  }, []);

  return null;
};

export default ScrollAnimations;
