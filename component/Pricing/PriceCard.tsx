import React from "react";
import Pricing from "../Pricing/pricing";
import styled from "styled-components";

type PriceCardProps = {
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
      <div>
        <Pricing
          price={7500}
          duration="p"
          currency="N"
          buttonContent="Buy Now"
          subTitle="Single"
          priceText="Discover how to create your first projects."
          headerText="i wan a barnie"
        />
      </div>
    </>
  );
};

export default PriceCard;
