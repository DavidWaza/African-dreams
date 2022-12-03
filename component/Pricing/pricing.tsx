import styled from "styled-components";
import React from "react";

type PriceProps = {
  shadow: any;
  background: any;
  headerText: string;
  price: number;
  currency: number;
  duration: string;
  subTitle: string;
  buttonContent: string;
};

const Pricing: React.FC<PriceProps> = ({
  background,
  shadow,
  headerText,
  price,
  currency,
  duration,
  subTitle,
  buttonContent,
}) => {
  return (
    <>
      <MainContainer shadow={shadow}>
        <Header background={background}>{headerText}</Header>
        {price !== undefined && (
          <PricingContainer>
            <PriceContainer>
              <CurrencyContainer>
                <span>{currency}</span>
              </CurrencyContainer>
              <Price>
                <span>{price}</span>
              </Price>
              {price > 0 && (
                <Duration>
                  <span>{duration === "p" ? "/P" : ""}</span>
                </Duration>
              )}
            </PriceContainer>
            {subTitle && (
              <SubTitle>
                <h4>{subTitle}</h4>
              </SubTitle>
            )}
            {buttonContent && (
              <ButtonContainer>
                <Button>{buttonContent}</Button>
              </ButtonContainer>
            )}
          </PricingContainer>
        )}
      </MainContainer>
    </>
  );
};

export default Pricing;

const MainContainer = styled.div<PriceProps>`
  padding: 3em;
  min-height: 20rem;
  height: max-content;
  background: #fff;
  flex-direction: column;
  color: #1d3557;
  opacity: 0.6;
  box-shadow: 0 8px 14px -6px ${(props) => props.shadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 8px 26px -6px ${(props) => props.shadow};
    margin-bottom: 0.4rem;
  }
`;
const Header = styled.div<PriceProps>`
  margin: 0.6rem;
  height: 4rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: larger;
  font-weight: 600;
  color: #000;
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
  }
`;

const Duration = styled.div`
  margin-top: 2rem;
`;

const SubTitle = styled.div`
  text-transform: uppercase;
  text-align: center;
  margin: 0.4rem 0 1.3rem 0;
`;

const PriceText = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  text-align: center;
  font-weight: 100;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-radius: 0.3rem;
  border: 0.1rem solid #1d3557;
  width: 90%;
  height: 3.5rem;
  background-color: transparent;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #1d3557;
    color: white;
  }
`;

const DataContainer = styled.div`
  ul {
    list-style-type: none;
    li {
      display: flex;
      align-items: center;
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
