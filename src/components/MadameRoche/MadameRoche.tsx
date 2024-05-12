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
    const mainImg = refMainImg.current;
    const mask = refMaskImg.current;
    const ieg = refIImg.current;
    const name = refNameImg.current;

    gsap.fromTo(
      mainImg,
      { scale: 0 },
      {
        scale: 1,
        duration: 1,
        ease: "bounce.out",
        scrollTrigger: {
          trigger: mainImg,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      mask,
      { translateX: -2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: mask,
          start: "top bottom-=280",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ieg,
      { translateX: -2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ieg,
          start: "top bottom-=200",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      name,
      { translateX: 2000 },
      {
        translateX: 0,
        duration: 1,
        scrollTrigger: {
          trigger: name,
          start: "top bottom-=123",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className={styles.MadameRoche}>
      <span className={styles.MadameRoche_imgs}>
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
        <span ref={refNameImg} className={styles.MadameRoche_imgs__name}>
          <span>Madame Roche</span>
        </span>
      </span>
    </section>
  );
}
