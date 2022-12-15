import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";
import aboutStyles from "../styles/About.module.css";
import { QuickLinks } from "../component/IconArr";

type AboutUsProps = {
  fill?: any;
  src: string;
  alt: string;
  className: any;
};

const About: React.FC<AboutUsProps> = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <p>About Us</p>
        </HeroText>
      </HeroContent>
      {QuickLinks.map((x) => (
        <QuickLink key={x.id}>
          <Image src={x.Link} alt="png" width={30} height={30} />
          <p className={aboutStyles.textContent}>{x.text}</p>
        </QuickLink>
      ))}
    </HeroSection>
  );
};
export default About;

const HeroSection = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&display=swap");
  height: 50vh;
`;
const HeroContent = styled.div`
  display: flex;
  justify-content: center;
`;
const HeroText = styled.p`
  font-family: Heebo, sans-serif;
  color: #ffc107;
  font-size: 3em;
  letter-spacing: 0.089rem;
`;
const QuickLink = styled.div`
  display: flex;
  justify-content: center;
`;
