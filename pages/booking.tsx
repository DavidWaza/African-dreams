import React from "react";
import Head from "next/head";
import TicketStyles from "../styles/Ticket.module.css";
import BookingCard from "../component/Booking/bookingCard";
import Subscribe from "../component/Subscribe";

const BookingShow = () => {
  return (
    <>
      <Head>
        <title>AD|Ticket</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties, tickets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={TicketStyles.banner}>
        <div className={TicketStyles.bannerHeader}>
          <p>Bookings/Events</p>
          <p>Join our expenditure</p>
        </div>
        <div className={TicketStyles.booking}>
          <BookingCard eventTitle={""} date={undefined} buttonText={""} location={""} />
        </div>
      </div>
      <Subscribe />
    </>
  );
};
export default BookingShow;
