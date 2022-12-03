import React from "react";
import Pricing from "../Pricing/pricing";
import { Container, Col, Row } from "react-bootstrap";
import TicketStyles from "../../styles/Ticket.module.css";

type PriceCardProps = {
  text: string;
  value: false;
  price: number;
  duration: string;
  currency: string;
  buttonContent: string;
  subTitle: string;
  priceText: string;
  headerText: string;
};

const PriceCard: React.FC<PriceCardProps> = () => {
  return (
    <>
        <Container>
          <Row>
            <Col sm={4}>
              <Pricing
                data={[
                  { text: "1 Person Ticket", value: true },
                  { text: "1 Tent Accomodation", value: false },
                ]}
                price={12000}
                duration="p"
                currency="N"
                buttonContent="Buy Now"
                subTitle="Single Camping Pass"
                headerText="Bush Doings"
              />
            </Col>
            <Col sm={4}>
              <Pricing
                data={[
                  { text: "2 Person Ticket", value: true },
                  { text: "1 Tent Accomodation", value: true },
                ]}
                price={17500}
                duration="p"
                currency="N"
                buttonContent="Buy Now"
                subTitle="Couple Camping Pass"
                headerText="Bush Doings"
              />
            </Col>
            <Col sm={4}>
              <Pricing
                data={[
                  { text: "1 Person Ticket", value: true },
                  { text: " Tent Accomodation", value: true },
                ]}
                price={36000}
                duration="p"
                currency="N"
                buttonContent="Buy Now"
                subTitle="Gang Camping Pass (free drinks)"
                headerText="Bush Doings"
              />
            </Col>
          </Row>
        </Container>
    </>
  );
};

export default PriceCard;
