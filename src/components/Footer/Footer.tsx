"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Footer() {
  const logo = useRef(null);
  const text = useRef(null);
  const linkL = useRef(null);
  const linkR = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      logo.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: logo.current,
          scrub: true,
          start: "top bottom",
          end: "bottom 80%",
        },
      }
    );

    gsap.fromTo(
      text.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: logo.current,
          scrub: true,
          start: "top bottom",
          end: "bottom 50%",
        },
      }
    );

    gsap.fromTo(
      linkL.current,
      { x: -2000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: linkL.current,
          scrub: true,
          start: "top bottom",
          end: "bottom 95%",
        },
      }
    );

    gsap.fromTo(
      linkR.current,
      { x: 2000, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: linkR.current,
          scrub: true,
          start: "top bottom",
          end: "bottom 95%",
        },
      }
    );
  }, []);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Link href="/">
          <picture className={styles.footer_logo}>
            <Image
              ref={logo}
              src="img/logo.svg"
              fill
              loading="lazy"
              alt="logo"
            />
          </picture>
        </Link>
        <div className={styles.footer_text} ref={text}>
          Основное меню представлено актуальным и авторским comfort-food
        </div>
        <div className={styles.footer_links}>
          <Link href="/" ref={linkL}>
            Telegram
          </Link>
          <Link href="/" ref={linkR}>
            Whatsapp
          </Link>
        </div>
      </div>
    </footer>
  );
}
