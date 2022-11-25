import React from "react";
import Head from "next/head";
import TicketStyles from "../styles/Ticket.module.css";
import BookingCard from "../component/Booking";

const Booking = () => {
  return (
    <>
      <Head>
        <title>AD | Ticket</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={TicketStyles.banner}>
        <div className={TicketStyles.bannerHeader}>
          <p>Bookings/Events</p>
          <p>Join our expenditure</p>
          <div className={TicketStyles.booking}>
            <BookingCard id={0} title={""} slug={""} price={""} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Booking;
