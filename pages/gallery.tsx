import React from "react";
import Head from "next/head";
import TicketStyles from "../styles/Ticket.module.css";
import CarouselSlide from "../component/Carousel";

const gallery = () => {
  return (
    <>
      <Head>
        <title>AD | Gallery</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties, gallery"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={TicketStyles.wrapper}>
        <div className={TicketStyles.bannerHeader}>
          <p>Gallery</p>
          <p>Join our expenditure</p>
        </div>
      </div>
      <div className={TicketStyles.carouselContainer}>
      <CarouselSlide />
      </div>
    </>
  );
};

export default gallery;
