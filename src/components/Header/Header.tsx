"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {

  const text = useRef();

  useEffect(() => {
    gsap.fromTo(text.current, {
      translateX: -2000,
      opacity: 0, 
      duration: 2
    }, {
        translateX: 0,
        opacity: 1,
        duration: 2,
 });
  },[]);

  return (
    <header className={styles.header}>
      <div className="container">
        <div
        ref={text}
          className={styles.header_content}
        >
          В старый особняк на <span>Кожевнической 16с4</span> обычно заезжали
          гости со всего света. Зная секретный код <span>+7 999 2102222</span>,
          распрастранявшийся через местных пьяниц, каждый из них попадал в
          тайную команту…
        </div>
        <picture
          className={styles.header_logo}
        >
          <Image
            src="img/logo.svg"
            fill
            loading="lazy"
            alt="logo"
          />
        </picture>
      </div>
    </header>
  );
}
