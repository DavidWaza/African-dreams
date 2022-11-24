import React from "react";
import styles from "../../styles/Home.module.css";
import { Container, Col, Row } from "react-bootstrap";
import { FooterArr } from "../IconArr";

const Footer: React.FC<any> = () => {
  return (
    <div className={styles.footerContainer}>
      <Container>
        <Row>
          {FooterArr.map((footer) => (
            <Col sm={4} key={footer.id}>
              <div className={styles.footerText}>
                <h5>{footer.title}</h5>
                <p>{footer.slugOne}</p>
                <p>{footer.slugTwo}</p>
                <p>{footer.slugThree}</p>
                <p>{footer.slugFour}</p>
                <p>{footer.slugFive}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
