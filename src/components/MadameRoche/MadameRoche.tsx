"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./MadameRoche.module.css";

export default function MadameRoche() {
  gsap.registerPlugin(ScrollTrigger);

  const refMainImg = useRef();
  const refMaskImg = useRef();
  const refIImg = useRef();
  const refNameImg = useRef();

  useEffect(() => {
    gsap.fromTo(
      refMainImg.current,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: refMainImg.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      refMaskImg.current,
      { translateX: -2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: refMaskImg.current,
          start: "top bottom-=280",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      refIImg.current,
      { translateX: -2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: refIImg.current,
          start: "top bottom-=200",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      refNameImg.current,
      { translateX: 2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: refNameImg.current,
          start: "top bottom-=123",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className={styles.MadameRoche}>
      <div className={styles.MadameRoche_imgs}>
        <picture className={styles.MadameRoche_imgs__mr_img}>
          <Image
            ref={refMainImg}
            fill
            src="/img/MadameRoche.png"
            alt="image MadameRoche"
          />
        </picture>
        <picture className={styles.MadameRoche_imgs__i_img}>
          <Image
            ref={refIImg}
            src="/img/BitmapI.png"
            fill
            alt="image BitmapI"
          />
        </picture>
        <picture className={styles.MadameRoche_imgs__mask_img}>
          <Image ref={refMaskImg} src="/img/mask.png" fill alt="image mask" />
        </picture>
        <div ref={refNameImg} className={styles.MadameRoche_imgs__name}>
          <span>Madame Roche</span>
        </div>
      </div>
    </section>
  );
}
