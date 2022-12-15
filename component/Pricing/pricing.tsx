import styled from "styled-components";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import TicketStyles from "../../styles/Ticket.module.css";

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
      <PriceWrapper>
        <MainContainer>
          <CaroImage></CaroImage>
          {price !== undefined && (
            <PricingContainer>
              <PriceContainer>
                <CurrencyContainer>
                  <span>{currency}</span>
                </CurrencyContainer>
                <Price>
                  <span>{price/100}</span>
                </Price>
                {price > 0 && (
                  <Duration>
                    <span>{duration === "p" ? "/P" : ""}</span>
                  </Duration>
                )}
              </PriceContainer>
              {subTitle && (
                <SubTitle>
                  <p>{subTitle}</p>
                </SubTitle>
              )}
              {buttonContent && (
                <ButtonContainer>
                  <div
                    className={TicketStyles.buttonPrice}
                  >
                    <Link href={{
                      pathname: "/paystackForm",
                      query: { price: price },
                    }}>{buttonContent}</Link>
                  </div>
                </ButtonContainer>
              )}
              {data && (
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
              )}
            </PricingContainer>
          )}
        </MainContainer>
      </PriceWrapper>
    </>
  );
};

export default Pricing;

const PriceWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap");
  margin-top: 10%;
  font-family: "Heebo", sans-serif;

  @media screen and (max-width: 970px) {
    margin-top: 10%;
  }
`;
const MainContainer = styled.div`
  padding: 3em;
  min-height: 20rem;
  border-radius: 10px;
  font-weight: 500;
  background-color:#082313;
  color: #fff;
  opacity: 1;
  box-shadow: 0 8px 14px -6px;
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 8px 26px -6px;
    margin-bottom: 0.4rem;
  }
`;
const CaroImage = styled.div`
  background-image: url("/bush.jpg");
  background-size: cover;
  background-position: 10px -40px;
  background-repeat: no-repeat;
  min-height: 15vh;
  width: 100%;
  color: #fff;
  text-align: center;
  padding-top: 30%;
  font-weight: Bold;
  border-radius: 10px;
`;
const PricingContainer = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

const PriceContainer = styled.div`
  display: flex;
`;

const CurrencyContainer = styled.div`
  margin-top: 0.5rem;
  margin-right: 0.2rem;
`;

const Price = styled.div`
  span {
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
  }
`;

const Duration = styled.div`
  margin-top: 2rem;
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  margin: 0.4rem 0 1.3rem 0;
  font-size: 1.3em;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  width: 100%;
`;

const DataContainer = styled.div`
  ul {
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      .true {
        color: #34f034;
        font-size: 1rem;
      }
      .false {
        color: #f54343;
      }
      svg {
        margin-right: 0.5rem;
        font-size: 0.8rem;
      }
      margin-bottom: 1rem;
    }
  }
`;
