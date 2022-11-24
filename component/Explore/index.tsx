import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Button from "../Button/button";

const Explore = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <div className={styles.exploreWrapper}>
              <Image
                src="/Rectangle 8.png"
                alt="image"
                width={350}
                height={150}
                className={styles.image}
              />
              <Image
                src="/Rectangle 9.png"
                alt="image"
                width={350}
                height={150}
                className={styles.image}
              />
              <Image
                src="/Rectangle 7.png"
                alt="image"
                width={350}
                height={150}
                className={styles.image}
              />
            </div>
          </Col>
          <Col sm={6}>
            <div className={styles.exploreTitle}>
              <p>Explore Nigeria with us </p>
              <p>
                We are keen on bringing to life the beauty of our country
                Nigeria. so we perform this task through adventures/expeditions
                around the country.
              </p>
            </div>
            <div className={styles.exploreButton}>
              <Button title="Join Us" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Explore;
