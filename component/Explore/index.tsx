import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Button from "../Button/button";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              // animate={{x: 100}}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={styles.exploreWrapper}
            >
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
            </motion.div>
          </Col>
          <Col sm={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.0],
              }}
              className={styles.exploreTitle}
            >
              <p>Explore Nigeria with us </p>
              <p>
                We are keen on bringing to life the beauty of our country
                Nigeria. so we perform this task through adventures/expeditions
                around the country.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 1.1,
                ease: [0, 0.71, 0.2, 1.0],
              }}
              className={styles.exploreButton}
            >
              <Button title="Join Us" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Explore;
