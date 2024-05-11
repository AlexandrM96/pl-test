'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

        gsap.fromTo(mainImg, { scale: 0}, {
             scale:1, 
             duration: 1, 
             scrollTrigger: {
                trigger: mainImg,
                start: "top bottom-=200",
                 toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(mask, {translateX: -2000,}, {
           translateX:0, 
           duration: 1, 
           scrollTrigger: {
               trigger: mask,
               start: "top bottom-=530",
                toggleActions: "play none none reverse"
           }
       });

       gsap.fromTo(ieg, {translateX: -2000}, {
        translateX:0,
         duration: 1, 
         scrollTrigger: {
            trigger: ieg,
            start: "top bottom-=310",
             toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(name, {translateX: 2000}, {
            translateX:0,
             duration: 1, 
             scrollTrigger: {
                trigger: name,
                start: "top bottom-=223",
                 toggleActions: "play none none reverse"
                }
            });
    }, [])

  return (
     <section className={styles.MadameRoche}>
        <picture className={styles.MadameRoche_img}> 
        <Image ref={refMainImg}
            width={603}
            height={578}
            src="/img/MadameRoche.png"
            alt="image MadameRoche" 
            />
            <Image
            ref={refIImg}
            className={styles.MadameRoche__i_img}
            src="/img/BitmapI.png"
            width={84}
            height={127}
            alt="image BitmapI" 
            />
            <Image
            ref={refMaskImg}
            className={styles.MadameRoche__mask_img}
            src="/img/mask.png"
            width={278}
            height={61}
            alt="image mask" 
            />
        </picture>
        <div ref={refNameImg} className={styles.MadameRoche_name__container}>
            <span>Madame Roche</span>
        </div>
   </section>
  );
}
