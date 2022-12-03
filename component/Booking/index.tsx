import React from "react";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BookingArr } from "../IconArr";
import styled from "styled-components";

type bookingProps = {
  eventTitle: string;
  date: string;
  buttonText: string;
};
const Booking: React.FC<bookingProps> = ({ eventTitle, date, buttonText }) => {
  return (
    <>
      <Container>
        <BookingContainer>
          <Row>
            <Col sm={6}>
              <div className={styles.bookingImage}></div>
            </Col>
            <Col sm={6}>
              <BookingContent>
                <h3>{eventTitle}</h3>
                <h5>{date}</h5>
                <ButtonContainer>
                  <Button>{buttonText}</Button>
                </ButtonContainer>
              </BookingContent>
            </Col>
          </Row>
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
  width: 100vh;
  padding: 10px 16px;

  @media screen and (max-width: 970px) {
    width: 50vh;
  }
`;

const BookingContent = styled.div`
  padding: 5px 10px;

  &:p {
    color: #145a32;
  }
  &:h5 {
    background-color: #145a32;
  }
`;
const ButtonContainer = styled.div`
  margin: 2rem 0;
  width: 100%;
`;
const Button = styled.button`
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
  &:hover {
    background-color: #145a32;
    color: white;
  }
`;
