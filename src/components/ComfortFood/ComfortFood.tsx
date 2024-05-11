
'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from "./ComfortFood.module.css";

export default function ComfortFood() {

    const triggerRef = useRef(null);
    const mainImg = useRef(null);
    const foodList = useRef(null);
    const text = useRef(null)

    useEffect(() => {
        gsap.fromTo(mainImg.current, { scale: 0, opacity:0}, {
            scale:1,
            opacity:1, 
            duration: 1, 
            scrollTrigger: {
               trigger: mainImg.current,
               scrub: true,
                start: "top bottom",
                end: "bottom 50%"
           }
       });

       gsap.fromTo(foodList.current, {x: 2000, scale: 0, rotate:180, opacity:0}, {
          x:0, 
          rotate:0,
          scale:1,
          opacity:1,
          duration: 1, 
          scrollTrigger: {
              trigger: foodList.current,
              start: "top center",
               toggleActions: "play none none reverse"
          }
      });
      gsap.fromTo(
        text.current,
        { y: 200, opacity: 0},
        {
          y: 0,
          duration: 5,
          opacity: 1,
          scrollTrigger: {
            trigger: text.current,
            scrub: true,
            start: "top bottom",
            end: "bottom 100%"
        }
        }
      );
    },[])

  return (
    <section className={styles.ComfortFood} ref={triggerRef}>
        <div className={styles.ComfortFood__images}>
            <picture className={styles.ComfortFood__images_img}>
                <Image
                ref={mainImg}
                    src="/img/blackPhotoBig.png"
                    width={908}
                    height={591}
                    loading="lazy"
                    alt="image blackPhotoBig"
                />
            </picture>
            <picture className={styles.ComfortFood__images_imgR}>
                <Image
                ref={foodList}
                    src="/img/foodList.png"
                    width={324}
                    height={442}
                    loading="lazy"
                    alt="image foodList"
                />
            </picture>
        </div>
        <div className={styles.ComfortFood__text}  ref={text}>
        Основное меню представлено актуальным и авторским comfort-food, построенным на захватывающих вкусовых сочетаниях соусов и высококачественных овощах,  мясе и морепродуктах.
        </div>
    </section>
  );
}
