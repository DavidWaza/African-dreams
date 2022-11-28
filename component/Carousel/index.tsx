import React from "react";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

const CarouselSlide: any = () => {
  return (
    <div>
      {/* First Slide */}
      <Carousel fade className={styles.Carousel}>
        <Carousel.Item>
          <div className={styles.carouselSlideOne}>
            <p>Mpape Hills Climb</p>
            <p>2021</p>
            <Link href="/">
              <p className={styles.carouselLink}>See more</p>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Second Slide */}
      <Carousel fade className={styles.Carousel}>
        <Carousel.Item>
          <div className={styles.carouselSlideTwo}>
            <p>Hi January Pool Party</p>
            <p>2020</p>
            <Link href="/">
              <p className={styles.carouselLink}>See more</p>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Third Slide */}
      <Carousel fade className={styles.Carousel}>
        <Carousel.Item>
          <div className={styles.carouselSlideThree}>
            <p>Kubwa Hike</p>
            <p>2020</p>
            <Link href="/">
              <p className={styles.carouselLink}>See more</p>
            </Link>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
