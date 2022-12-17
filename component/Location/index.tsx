import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Locations } from "../IconArr";
import Button from "../Button/button";


type LocationType = {
  className: any;
  id: number;
  image: string;
  title: string;
};

const Location: React.FC<LocationType> = () => {
  return (
    <>
      <Container>
        <Row>
          <div className={styles.locationTitle}>
            <p>Places we have Explored </p>
          </div>
          {Locations.map(({ id, image, title }) => (
            <Col sm={4} key={id}>
              <div className={styles.location}>
                <Image
                  src="/star.png"
                  alt="star"
                  width={20}
                  height={20}
                  className={styles.star}
                />
                <Image
                  src={image}
                  alt="location"
                  width={200}
                  height={200}
                  className={styles.image}
                />
                <p className={styles.locationName}>{title}</p>
              </div>
            </Col>
          ))}
          <div className={styles.locationButton}>
            <Button title="Join Us" />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Location;
