import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import ticketStyles from "../../styles/Ticket.module.css";

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
        <div className={ticketStyles.BookingContainer}>
          <div className={ticketStyles.BookingContent}>
            <div className={ticketStyles.ImgContainer}></div>
            <div className={ticketStyles.EventTitle}>
              <h3>{eventTitle}</h3>
            </div>
            <div className={ticketStyles.EventDuration}>
              <Image src="/time.png" alt="du" height={20} width={20} />
              <div className={ticketStyles.Duration}>
                <p>{date}</p>
              </div>
            </div>
            <div className={ticketStyles.LocationContainer}>
              <Image src="/pin.png" alt="du" height={20} width={20} />
              <div className={ticketStyles.Location}>
                <p>{location}</p>
              </div>
            </div>
            <div className={ticketStyles.ButtonContainer}>
              <Link href="\price">{buttonText}</Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Booking;
