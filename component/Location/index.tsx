import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { Locations } from "../IconArr";
import Button from "../Button/button";
import Scroll from "../ReactScroll/Scroll";
import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0, 0.71, 0.2, 1.0],
            }}
            className={styles.locationTitle}
          >
            <p>Places we have Explored </p>
          </motion.div>
          {Locations.map(({ id, image, title }) => (
            <Col sm={4} key={id}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  default:{
                    delay: 0.9,
                    duration: 1.1,
                    ease: [0, 0.99, 0.89, 1.01],
                  }
                }}
                className={styles.location}
              >
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
              </motion.div>
            </Col>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 1.1,
              ease: [0, 0.71, 0.2, 1.0],
            }}
            className={styles.locationButton}
          >
            <Button title="Join Us" />
          </motion.div>
        </Row>
        <div className={styles.LocationMobileView}>
          <Scroll />
        </div>
      </Container>
    </>
  );
};

export default Location;
