import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'next/image';
import styles from "../../styles/Home.module.css";

const Subscribe = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className={styles.subscribe}>
                <Image src="/subscribe.png" alt="img" width={800} height={250} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Subscribe;
