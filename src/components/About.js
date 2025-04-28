import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import aboutBackground from '../assets/BG.png'; // 🖼️ import your background

const About = () => {
  return (
    <Section>
      <Overlay />
      <ContentWrapper>
        <h2>About Us</h2>
        <AboutContent>
          <AboutCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3>Ashwin</h3>
            <p className="p1">
              Founder of mobiusengine.ai. An accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. 
              Former roles at Google and JP Morgan. MBA from Yale University.
            </p>
            <p className="p1">
              Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
            </p>
          </AboutCard>

          <AboutCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Nicole</h3>
            <p className="p1">
              Executive coach specializing in resume builds and career advisory. 
              B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy.
            </p>
            <p className="p1">
              She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
            </p>
          </AboutCard>
        </AboutContent>

        <Links>
          <Link href="#">Learn more about our Board of Advisors ↗</Link>
          <Link href="#">Follow us on our LinkedIn page ↗</Link>
        </Links>
      </ContentWrapper>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  padding: 80px 0;
  text-align: center;
  background-image: url(${aboutBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  overflow: hidden;
  min-height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* dark overlay */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 60px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutCard = styled(motion.div)`
  background-color: #FEFEFE;
  color: #101010;
  border: 1px solid #EBF1FF;
  border-radius: 20px;
  padding: 40px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Link = styled.a`
  color: #0649E7;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #022183;
    text-decoration: underline;
  }
`;

export default About;
