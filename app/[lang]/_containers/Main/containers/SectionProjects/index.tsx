"use client";

import cx from "clsx";
import Image from "next/image";
import React from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt,
} from "react-icons/fa";

import styles from "./index.module.scss";

import { Lang, THUMBNAIL_URL } from "@/modules/app-config";
import Button from "@/modules/app-ui/Button";
import { FeaturedMedia, Post } from "@/modules/business-types";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  lang: Lang;
  dictionary: Record<string, string>;
  projects: Post[];
  projectsMedia: (FeaturedMedia | undefined)[];
};

export default function ProjectShowcase({
  className,
  style,
  lang,
  dictionary,
  projects,
  projectsMedia,
}: Props) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className={cx(styles.section, className)} style={style}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{dictionary["headline"]}</h2>
        </div>

        {/* Slider Container */}
        <div className={styles.sliderContainer}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.grid}>
                {/* Image Section */}
                <div className={styles.imageSection}>
                  <Image
                    src={
                      projectsMedia[currentIndex]?.source_url || THUMBNAIL_URL
                    }
                    alt="content image"
                    fill
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay} />
                </div>

                {/* Content Section */}
                <div className={styles.contentSection}>
                  <div className={styles.content}>
                    <div>
                      <h3 className={styles.projectTitle}>
                        {projects[currentIndex].title.rendered}
                      </h3>
                      <p
                        key={currentIndex}
                        className={styles.projectDescription}
                        dangerouslySetInnerHTML={{
                          __html: projects[currentIndex].excerpt.rendered,
                        }}
                      ></p>
                    </div>

                    {/* Tags */}
                    <div className={styles.tagsContainer}>
                      {projects[currentIndex].tags.map((tag, index) => (
                        <span key={index} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div>
                      <Button.Link
                        href={`/${lang}/projects/${projects[currentIndex].slug}`}
                        icon={<FaExternalLinkAlt className={styles.ctaIcon} />}
                      >
                        {dictionary["discover_more"]}
                      </Button.Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className={`${styles.iconButton} ${styles.navButtonLeft}`}
            onClick={prevSlide}
            aria-label="Previous project"
          >
            <FaChevronLeft className={styles.navIcon} />
          </button>
          <button
            className={`${styles.iconButton} ${styles.navButtonRight}`}
            onClick={nextSlide}
            aria-label="Next project"
          >
            <FaChevronRight className={styles.navIcon} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.dotActive : styles.dotInactive}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Counter */}
        <div className={styles.counter}>
          <span className={styles.counterText}>
            {currentIndex + 1} {dictionary["of"]} {projects.length}
          </span>
        </div>
      </div>
    </section>
  );
}
