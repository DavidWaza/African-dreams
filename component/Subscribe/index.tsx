/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Subscribe = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 1,
                ease: [0.9, 0.71, 0.7, 1.01],
              }}
              className={styles.subscribe}
            >
              <div className={styles.subScribeContainer}>
                <Row>
                  <Col sm={6}>
                    <div className={styles.campContent}>
                      <p>Let's stay in Touch</p>
                      <p>
                        Keep updated with our travel <br />
                        plans and adventures.
                      </p>
                      <form className={styles.formContainer}>
                        <input type="text" />
                        <div className={styles.iconSendContainer}>
                          <div className={styles.iconSend}>
                            <Link href="/">
                              <Image
                                src="/send.png"
                                alt="alt"
                                height={20}
                                width={20}
                                objectFit="cover"
                                objectPosition="center"
                              />
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </Col>
                  <Col sm={6}>
                    <div className={styles.imgContainer}>
                      <Image
                        src="/camp.png"
                        layout="fill"
                        alt="alt"
                        objectFit="none"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Subscribe;
