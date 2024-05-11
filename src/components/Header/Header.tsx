'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {

const [header, setHeader] = useState(false);

useEffect(() => {
  setTimeout(()=> setHeader(true), 1000);
})

  return (
   <header className={styles.header}>
    <div className="container">
     <div className={styles.header_content} style={header ? {display:'block'} : {display:'none'}}>
       В старый особняк на <span>Кожевнической 16с4</span> обычно заезжали гости со всего света. Зная секретный код <span>+7 999 2102222</span>, распрастранявшийся через местных пьяниц, каждый из них попадал в тайную команту…
       </div>
       <picture className={styles.header_logo} style={header ? {marginTop:'15.2rem'} : {marginTop:'16.1rem'} }>
       <Image
        src="img/logo.svg"
        width={286}
        height={193}
        loading="lazy"
        alt="logo"
        />
       </picture>
    </div>
   </header>
  );
}
