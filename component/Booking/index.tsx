import React from "react";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { BookingArr } from "../IconArr";

type booking = {
  id: number;
  title: string;
  slug: string;
  price: number | string;
  href: string;
};
const BookingCard: React.FC<booking> = () => {
  return (
    <>
      {BookingArr.map(({ id, img, title, slug, price }) => (
        <div className={styles.bookingCard} key={id}>
          <Container>
            <Row>
              <Col sm={4}>
                <Image src={img} alt="alt" width={150} height={150} />
              </Col>
              <Col sm={8}>
                <div className={styles.bookingContent}>
                  <p>{title}</p>
                  <p>{slug}</p>
                </div>
                <div className={styles.bookingWrapper}>
                  <Row>
                    <Col sm={6}>
                      <div className={styles.bookingValue}>
                        <Link href="/">book now</Link>
                      </div>
                    </Col>
                    <Col sm={6}>
                      <div className={styles.bookingPrice}>
                        <p>{price}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
};

export default BookingCard;
