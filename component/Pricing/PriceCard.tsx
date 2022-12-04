import React from "react";
import Pricing from "../Pricing/pricing";
import { Container, Col, Row } from "react-bootstrap";

type PriceCardProps = {
  text: string;
  value: false;
  price: number;
  duration: string;
  currency: any;
  buttonContent: string;
  subTitle: string;
  priceText: string;
  headerText: string;
  onClick: () => void;
};

const PriceCard: React.FC<PriceCardProps> = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6} lg={4}>
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
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
          <Col sm={6} lg={4}>
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
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
          <Col sm={6} lg={4}>
            <Pricing
              data={[
                { text: "1 Person Ticket", value: true },
                { text: " Tent Accomodation", value: true },
              ]}
              price={36000}
              duration="p"
              currency="N"
              buttonContent="Buy Now"
              subTitle="Gang Camping Pass"
              headerText="Bush Doings"
              onClick={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PriceCard;
