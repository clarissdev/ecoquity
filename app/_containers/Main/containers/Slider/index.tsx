"use client"
import cx from "clsx";
import Image from "next/image";

import styles from "./index.module.scss";

import Button from "@/modules/app-ui/Button";
import Flex from "@/modules/app-ui/Flex";
import jpgFigure from "./assets/article.jpg";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { hightlightsArticles } from "@/app/constants";
import { useState } from "react";
import { useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Function to update screen width
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set initial width
    updateWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateWidth);
    }, []);
  const slides = ["Slide 1", "Slide 2", "Slide 3"]; // Example slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{
          transform: `matrix(1, 0, 0, 1, ${-currentSlide * screenWidth}, 0)`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <Image 
                src={jpgFigure}
                alt="he"
                className={styles.figure}
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className={styles.button}>
        Prev
      </button>
      <button onClick={nextSlide} className={styles.button}>
        Next
      </button>
    </div>
  );
}

export default Slider;