import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

type bookingProps = {
  eventTitle: string;
  date: string;
  location: string;
  buttonText: string;
};
const Booking: React.FC<bookingProps> = ({
  eventTitle,
  date,
  location,
  buttonText,
}) => {
  return (
    <>
      <Container>
        <BookingContainer>
          <BookingContent>
            <ImgContainer></ImgContainer>
            <EventTitle>
              <h3>{eventTitle}</h3>
            </EventTitle>
            <EventDuration>
              <Image src="/time.png" alt="du" height={20} width={20} />
              <Duration>
                <p>{date}</p>
              </Duration>
            </EventDuration>
            <LocationContainer>
              <Image src="/pin.png" alt="du" height={20} width={20} />
              <Location>
                <p>{location}</p>
              </Location>
            </LocationContainer>
            <ButtonContainer>
              <Link href="\price">
                <AnchorTag>{buttonText}</AnchorTag>
              </Link>
            </ButtonContainer>
          </BookingContent>
        </BookingContainer>
      </Container>
    </>
  );
};

export default Booking;

const BookingContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap");
  background-color: #f3f3f3;
  opacity: 0.9;
  width: 50vh;
  padding: 10px 16px;
  border-radius:10px;

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

const BookingContent = styled.div`
  padding: 5px 10px; 
`;
const ImgContainer = styled.div`
  background-image: url("/bush.jpg");
  background-position: 0px -40px;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 30vh;
  border-radius: 10px;
`;
const EventTitle = styled.div`
  text-align: justify;
  margin-top: 20px;


  @media screen and (max-width: 768px) {
    margin-top: -10px;
    text-align:center;
  }
`;
const EventDuration = styled.div`
  margin-top: 20px;
  display: flex;
`;
const Duration = styled.p`
  font-size: 16px;
  margin-left: 5px;
  margin-top: -2px;
  font-family: "Heebo", sans-serif;
`;
const LocationContainer = styled.div`
  display: flex;
  margin-top: -10px;
`;
const Location = styled.p`
  font-size: 16px;
  margin-left: 5px;
  margin-top: -2px;
  font-family: "Heebo", sans-serif;
`;
const ButtonContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border:none;
  width: 50%;
  color: #fff;
  opacity:1
  padding: 0 10px;
  height: 3rem;
  background-color: #145a32;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  border-radius:5px;
  &:hover {
    background-color: #000;
    color: white;
  }
 
  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;

const AnchorTag = styled.a`
  color: #fff;
  text-decoration:none !important;
  font-family: "Heebo", sans-serif;

  &:hover {
    color: #fff;
  }
`;
