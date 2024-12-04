'use client'
import styles from "./index.module.scss";
import cx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 

import {Pagination, Navigation} from "swiper/modules"
import Image from "next/image";
import jpgFigure from "./assets/article.jpg";

import { hightlightsArticles } from "../../../../constants";
import { useGSAP } from "@gsap/react";

import gsap from "gsap"

type Props = {
    className?: string;
    style?: React.CSSProperties;
  };
  
  export default function SectionArticles({ className, style }: Props) {
    useGSAP(() => {
        gsap.fromTo('#h1', {
            x: -200,
            opacity:0,
          }, {
            x:0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
       
        })
    }, [])
    return (
        <section className={cx(styles.container, className)} style={style}>
            <div className={styles.highlights}>
                <div className={styles.h1} id="h1">
                    <h1> Our highlight articles</h1>
                </div>
                <div className={styles.slider}>
                    <Swiper
                        spaceBetween={50}
                        // slidesPerView={3}
                        navigation={true}
                        pagination = {{clickable: true}}
                        scrollbar = {{draggable: true}}
                        className="w-[80%]"
                        loop = {true}
                        modules={[Pagination, Navigation]}
                        style={{
                            '--swiper-navigation-color': '#228B22',
                            // '--swiper-pagination-color': '#fffff',
                        } as React.CSSProperties & { '--swiper-navigation-color'?: string }}
                        breakpoints={{
                            // When the screen width is 640px or smaller, show 1 slide
                            640: {
                              slidesPerView: 1,
                            },
                            // When the screen width is 768px or larger, show 3 slides
                            768: {
                              slidesPerView: 3,
                            },
                        }}
                    >
                        {hightlightsArticles.map((list, i) => (
                            <SwiperSlide key={i}>
                                <a href="https://www.facebook.com/share/p/1XzDEmYQFq/">
                                    <Image
                                        className={styles.figure}
                                        src={jpgFigure}
                                        alt="figure"
                                        id = "img"
                                        layout="responsive"
                                    />
                                </a>
                            </SwiperSlide>
                            
                        ))}
                    </Swiper>
                </div>
             
            </div>  

        </section>
    )
}
