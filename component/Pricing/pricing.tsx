import styled from "styled-components";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import ticketStyles from "../../styles/Ticket.module.css";

type PriceProps = {
  shadow?: any;
  background?: any;
  headerText: string;
  price: number;
  currency: string;
  duration: string;
  subTitle: string;
  buttonContent: string;
  data: any;
  value?: number;
  text?: string;
  index?: any;
};

const Pricing: React.FC<PriceProps> = ({
  price,
  currency,
  duration,
  subTitle,
  buttonContent,
  data,
}) => {
  return (
    <>
      <div className={ticketStyles.PriceWrapper}>
        <div className={ticketStyles.MainContainer}>
          <div className={ticketStyles.CaroImage}></div>
          {price !== undefined && (
            <div className={ticketStyles.PricingContainer}>
              <div className={ticketStyles.PriceContainer}>
                <div className={ticketStyles.CurrencyContainer}>
                  <span>{currency}</span>
                </div>
                <div className={ticketStyles.Price}>
                  <span>{price/100}</span>
                </div>
                {price > 0 && (
                  <div className={ticketStyles.DurationWrapper}>
                    <span>{duration === "p" ? "/P" : ""}</span>
                  </div>
                )}
              </div>
              {subTitle && (
                <div className={ticketStyles.SubTitle}>
                  <p>{subTitle}</p>
                </div>
              )}
              {buttonContent && (
                <div className={ticketStyles.PriceButtonContainer}>
                  <div
                    className={ticketStyles.buttonPrice}
                  >
                    <Link href={{
                      pathname: "/paystackForm",
                      query: { price: price },
                    }}>{buttonContent}</Link>
                  </div>
                </div>
              )}
              {/* {data && (
                <DataContainer>
                  <ul>
                    {data.map(
                      ({
                        text,
                        value,
                        index,
                      }: {
                        text: string;
                        value: number;
                        index: number;
                      }) => (
                        <li key={index}>
                          {value ? (
                            <FaCheck className="true" />
                          ) : (
                            <ImCross className="false" />
                          )}
                          {text}
                        </li>
                      )
                    )}
                  </ul>
                </DataContainer>
              )} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Pricing;

