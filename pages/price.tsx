import React, { Children } from "react";
import Head from "next/head";
import TicketStyles from "../styles/Ticket.module.css";
import PriceCard from "../component/Pricing/PriceCard"

type PriceProps = {
  shadow: any;
  background: any;
  headerText: any;
};

const Price: React.FC<PriceProps> = () => {
  return (
    <>
      <Head>
        <title>AD | Ticket</title>
        <meta
          name="description"
          content="Hiking, Mountain, fun, climb, extra activity, activities, parties, tickets"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={TicketStyles.eventBanner}>
        <div className={TicketStyles.bannerHeader}>
          <p>Bookings/Events</p>
          <p>Join our expenditure</p>
        </div>
        <div className={TicketStyles.pricingDiv}>
          <PriceCard />
        </div>
      </div>
    </>
  );
};

export default Price;
