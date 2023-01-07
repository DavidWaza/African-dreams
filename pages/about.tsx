import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import abtStyles from "../styles/About.module.css";
import { QuickLinks } from "../component/IconArr";
import { motion } from "framer-motion";
import Link from "next/link";
import { TeamMember } from "../component/IconArr/index";

type AboutUsProps = {
  fill?: any;
  src: string;
  alt: string;
  className: any;
};

const About: React.FC<AboutUsProps> = () => {
  return (
    <>
      <div className={abtStyles.HeroSection}>
        <div className={abtStyles.HeroContent}>
          <div className={abtStyles.HeroText}>
            <p>About Us</p>
          </div>
        </div>
        <p className={abtStyles.quicklinkText}>Quick Link</p>
        <div className={abtStyles.QuickLink}>
          {QuickLinks.map((x) => (
            <div key={x.id}>
              <Image
                src={x.img}
                alt="png"
                width={30}
                height={30}
                className={abtStyles.QuickLinkImage}
              />
              <Link href={x.Link}>
                <p className={abtStyles.textContent}>{x.text}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section>
        <div className={abtStyles.sectionDiv}>
          <Container>
            {/* ABOUT US SECTION */}
            <Row className={abtStyles.aboutContent} id="About">
              <Col sm={6} md={6} lg={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  <Image
                    src="/favorite.png"
                    height={50}
                    width={50}
                    alt={""}
                    className={abtStyles.AboutPng}
                  />
                  <text className={abtStyles.aboutText}>
                    <p>Who are we?</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: [0.9, 0.71, 0.8, 1.01],
                      }}
                    >
                      The <span>African Dream Community</span> believes that
                      youths in Africa have access to grow personally,
                      professionally and socially within their immediate
                      communities. Our mission is to bring people of all
                      backgrounds to engage in events, professional meetups and
                      diverse tourism experiences. Through these engagements,
                      ADC strives to use these engagements to unify youths and
                      young adults in Africa and provide a lifelong supply of
                      camaraderie, opportunities and ideas.
                    </motion.p>
                  </text>
                </motion.div>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={abtStyles.aboutImageCarousel}
                ></motion.div>
              </Col>
            </Row>

            {/* ADC VISION SECTION */}
            <Row className={abtStyles.aboutContent} id="ADC">
              <Col sm={6} md={6} lg={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  // animate={{x: 100}}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                  className={abtStyles.visionImageCarousel}
                ></motion.div>
              </Col>
              <Col sm={6} md={6} lg={6}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  // animate={{x: 100}}
                  transition={{
                    delay: 0.8,
                    duration: 0.8,
                    ease: [0.9, 0.71, 0.7, 1.01],
                  }}
                >
                  <Image
                    src="/binoculars.png"
                    height={50}
                    width={50}
                    alt={""}
                    className={abtStyles.AboutPng}
                  />
                  <text className={abtStyles.aboutText}>
                    <p>The Vision.</p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      // animate={{x: 100}}
                      transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: [0.9, 0.71, 0.8, 1.01],
                      }}
                    >
                      Our <span>Vision</span> is to build the largest
                      interconnected organisation of African youths looking to
                      effect change, unite and affect their communities
                      positively.
                    </motion.p>
                  </text>
                </motion.div>
              </Col>
            </Row>

            {/* MEMBERSHIP SECTION */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.9, 0.71, 0.8, 1.01],
              }}
              className={abtStyles.TeamTitle}
            >
              <p>Meet our Team</p>
            </motion.div>
            <Row className="g-4">
              {TeamMember.map((x: any) => (
                <Col sm={4} md={6} lg={4} key={x.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.8,
                      ease: [0.9, 0.71, 0.8, 1.01],
                    }}
                    className={abtStyles.card}
                  >
                    <div className={abtStyles.cardInfo}>
                      <div className={abtStyles.cardAvatar}>
                        <Image
                          src="/babe.jpeg"
                          alt={""}
                          width={120}
                          height={120}
                          className={` img-responsive ${abtStyles.roundedImage}`}
                        />
                      </div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.8,
                          ease: [0.9, 0.71, 0.8, 1.01],
                        }}
                        className={abtStyles.teamName}
                      >
                        {x.teamName}
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 0.8,
                          ease: [0.9, 0.71, 0.8, 1.01],
                        }}
                        className={abtStyles.teamPosition}
                      >
                        {x.teamPosition}
                      </motion.p>
                    </div>
                    <ul className={abtStyles.cardSocial}>
                      <li className={abtStyles.cardSocialItem}>
                        {/* instagram */}
                        <Link href={x.instagram}>
                          <Image
                            src="/ig-noir.png"
                            alt={""}
                            height={30}
                            width={30}
                          />
                        </Link>
                      </li>
                      <li className={abtStyles.cardSocialItem}>
                        {/* twitter */}
                        <Link href={x.twitter}>
                          <Image
                            src="/twitter-noir.png"
                            alt={""}
                            height={30}
                            width={30}
                          />
                        </Link>
                      </li>
                      <li className={abtStyles.cardSocialItem}>
                        {/* facebook */}
                        <Link href={x.facebook}>
                          <Image
                            src="/fb-noir.png"
                            alt={""}
                            height={30}
                            width={30}
                          />
                        </Link>
                      </li>
                      <li className={abtStyles.cardSocialItem}>
                        <Link href={x.snapchat}>
                          <Image
                            src="/snap-noir.png"
                            alt={""}
                            height={40}
                            width={40}
                          />
                        </Link>
                      </li>
                    </ul>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};
export default About;
