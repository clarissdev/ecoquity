'use client'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import styles from "./index.module.scss";
import cx from "clsx";
import Flex from "@/modules/app-ui/Flex";
import { hightlightsArticles } from "../../../../constants";

import Image from "next/image";
import jpgFigure from "./assets/article.jpg";
import { useEffect, useRef, useState } from "react";
type Props = {
    className?: string;
    style?: React.CSSProperties;
  };
  
export default function SectionArticles({ className, style }: Props) {
    

    return (
        <section className={cx(styles.container, className)} style={style}>
            <div className={styles.screen_max_width}>
                <div>
                    <h1> Our highlight articles</h1>
                </div>
                <div className={styles.list_articles}>
                    {hightlightsArticles.map((list, i) => (
                        <div key={list.id} id = "slider" className={styles.slider}>
                            <div className={styles.carousel_container}>
                                <div className={styles.article}>
                                    <a href="https://www.facebook.com/share/p/1XzDEmYQFq/">
                                        <Image
                                            className={styles.figure}
                                            src={jpgFigure}
                                            alt="figure"
                                            id = "img"
                                            
                                        />
                                    </a>
                                </div>   
                                <div className={styles.article_title}>
                                    Cans Or Bottles? Plastics Or Papers? Which Is The “Greener” Choice?
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>  

        </section>
    )
}
