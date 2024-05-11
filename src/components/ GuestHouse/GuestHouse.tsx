'use client'
import Image from 'next/image';
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from "./GuestHouse.module.css";

export default function GuestHouse() {

    const [lettersRef, setLettersRef] = useArrayRef();
    const triggerRef = useRef(null);
    const triggerRefSection = useRef(null);
    const triggerRefParagraphOne = useRef(null);
    const triggerRefParagraphTwo = useRef(null);
    const triggerRefParagraphThree = useRef(null);
    const triggerRefImgLeft = useRef(null);
    const triggerRefImgRight = useRef(null);

    function useArrayRef() {
        const lettersRef = useRef([]);
        lettersRef.current = [];
        return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
    }

    gsap.registerPlugin(ScrollTrigger);
    const text = "The guest house of the mysterious Asian woman in the heart of the Eurasian world";

    useEffect(() => {
        const anim = gsap.to(
            lettersRef.current, 
            {
                color: "#B51B1B",
                duration: 5,
                stagger: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    scrub: true,
                    start: "top center",
                    end: "bottom 100%",
                }
            }
        );
        // gsap.to(
        //     triggerRefSection.current, 
        //     {
            
        //         duration: 5,
        //         stagger: 1,
        //         scrollTrigger: {
        //             trigger: triggerRefSection.current,
        //             start: "top top", // Начинаем анимацию, когда верх первого блока виден
        //             end: "top top", // Завершаем анимацию, когда верх первого блока остается на виду
        //             scrub: true,
        //             pin: true, // Фиксируем первый блок во время анимации
        //         }
        //     }
        // );
        gsap.fromTo(
            triggerRefParagraphOne.current,
            { x: -1000, opacity: 0 },
            {
              x: 0,
              duration: 5,
              opacity: 1,
              scrollTrigger: {
                trigger: triggerRefParagraphOne.current,
                scrub: true,
                start: "top bottom",
                end: "bottom 50%"
            }
            },
          );
          gsap.fromTo(
            triggerRefParagraphTwo.current,
            { x: 1000, opacity: 0 },
            {
              x: 0,
              duration: 5,
              opacity: 1,
              scrollTrigger: {
                trigger: triggerRefParagraphTwo.current,
                scrub: true,
                start: "top bottom",
                end: "bottom 50%"
            }
            }
          );
          gsap.fromTo(
            triggerRefParagraphThree.current,
            { x: -1000, opacity: 0 },
            {
              x: 0,
              duration: 5,
              opacity: 1,
              scrollTrigger: {
                trigger: triggerRefParagraphThree.current,
                scrub: true,
                start: "top bottom",
                end: "bottom 50%"
            }
            }
          );
          gsap.fromTo(
            triggerRefImgLeft.current,
            { x: -1000, opacity: 0, rotate: -180},
            {
              x: 0,
              rotate:0,
              duration: 5,
              opacity: 1,
              scrollTrigger: {
                trigger: triggerRefImgLeft.current,
                scrub: true,
                start: "top bottom",
                end: "bottom 50%"
            }
            }
          );
          gsap.fromTo(
            triggerRefImgRight.current,
            { x: 1000, opacity: 0, rotate: 180},
            {
              x: 0,
              rotate:0,
              duration: 5,
              opacity: 1,
              scrollTrigger: {
                trigger: triggerRefImgRight.current,
                scrub: true,
                start: "top bottom",
                end: "bottom 50%"
            }
            }
          );

        return (() => {
            anim.kill();
        })
    }, []);

  return (
    <section className={styles.GuestHouse} ref={triggerRefSection}>
        <div className={styles.GuestHouse__main_text} ref={triggerRef}>
                    {text.split("").map((letter, index) => (
                        <span key={index} ref={setLettersRef}>
                            {letter}
                        </span>
                    ))}
            <picture className={styles.GuestHouse__main_text_img}>
                <Image
                    src="/img/CombinedShape.png"
                    width={578}
                    height={986}
                    loading="lazy"
                    alt="image CombinedShape"
                />
            </picture>
        </div>
        <div className={styles.GuestHouse__text_img}>
        <p ref={triggerRefParagraphOne}>
Атмосферный бордель на Олдрич-стрит был домом для мафиози, чиновников, коллекционеров, богачей Гонконга и гостей мегаполиса.
 Особняк изобиловал опиумом, дурманящими напитками и роскошными азиатками — лучшими в городе. 
</p>
<p ref={triggerRefParagraphTwo}>
В конце пути, из-за ужесточения законов, смены власти и преображения социальной среды, как и многие проститутки, Roche — просветлела.
 С этого самого момента всю свою энергию, открывшиеся знания и время она посвятила изучению культуры высокой кухни.    
</p>
<div className={styles.GuestHouse__text_img__pictures}>
<picture>
<Image 
               ref={triggerRefImgLeft}
                    src="/img/blackPhotoMini.png"
                    className={styles.GuestHouse__text_img__pictures_imgL}
                    width={252}
                    height={321}
                    loading="lazy"
                    alt="image blackPhotoMini"
                />
</picture>
<picture>
<Image
          ref={triggerRefImgRight}
                    src="/img/pochtMarka.png"
                    className={styles.GuestHouse__text_img__pictures_imgR}
                    width={210}
                    height={250}
                    loading="lazy"
                    alt="image pochtMarka"
                />
</picture>
</div>
<p ref={triggerRefParagraphThree}>
Бурное прошлое наложило на ее дом-ресторан некоторые особенности: она всегда не против как следует выпить и станцевать
 с гостями под лучшую эклектичную музыку со всего света.
</p>
        </div>
    </section>
  );
}
