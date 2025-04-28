import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import heroBackground from '../assets/Gradient.png'; // <-- Import your background image

const Hero = () => {
  return (
    <HeroSection>
      <Overlay />
      <HeroContent>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Land job interviews 10x faster
        </motion.h1>
        <motion.p 
          className="p1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Custom-built resumes that match your goals, keywords, and recruiter expectations.
        </motion.p>
        <HeroButtons>
          <PrimaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Get Started →
          </PrimaryButton>
          <SecondaryButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Download Free E-Book ↙
          </SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  padding: 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  color: white;
  overflow: hidden;
`;

// Optional dark overlay for better text visibility
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative; /* Important to be above overlay */
  max-width: 800px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index: 2;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.button)`
  background-color: #0649E7;
  color: #FEFEFE;
  border: none;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #022183;
  }
`;

const SecondaryButton = styled(motion.button)`
  background-color: transparent;
  color: #FEFEFE;
  border: 1px solid #FEFEFE;
  padding: 16px 32px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Hero;
