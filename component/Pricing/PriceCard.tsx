import React from "react";
import Pricing from "../Pricing/pricing";
import { Container, Col, Row } from "react-bootstrap";
import { PricingArr } from "../IconArr";

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
};

const PriceCard: React.FC<PriceCardProps> = () => {
  return (
    <>
      <Container>
        <Row>
          {PricingArr.map((x: any) => (
            <Col sm={6} lg={4} key={x.id}>
              <Pricing
                // data={[
                //   { text: {x.firstText}, value:{x.firstValue} },
                //   { text: "1 Tent Accomodation", value: false },
                // ]}
                price={x.Price}
                duration={x.duration}
                currency={x.currency}
                buttonContent={x.buttonContent}
                subTitle={x.subTitle}
                headerText={x.headerText}
                data={undefined}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default PriceCard;
