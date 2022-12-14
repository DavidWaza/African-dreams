import React, { Children } from "react";
import Head from "next/head";
import TicketStyles from "../styles/Ticket.module.css";
import PriceCard from "../component/Pricing/PriceCard";
import { Row, Col } from "react-bootstrap";

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
        <Row>
          <Col>
            <div className={TicketStyles.bannerHeader}>
              <p>Bookings/Events</p>
            </div>
            <div className={TicketStyles.pricingDiv}></div>
          </Col>
        </Row>
        <PriceCard
          text={""}
          value={false}
          price={0}
          duration={""}
          currency={""}
          buttonContent={""}
          subTitle={""}
          priceText={""}
          headerText={""}
        />
      </div>
    </>
  );
};

export default Price;
