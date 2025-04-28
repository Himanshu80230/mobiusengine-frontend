import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we've got your back."
  },
  {
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path."
  },
  {
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
  }
];

const WhyChooseUs = () => {
  return (
    <Section>
      <h2>Why Choose Us?</h2>
      <ReasonsContainer>
        {reasons.map((reason, index) => (
          <ReasonCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{reason.title}</h3>
            <p className="p1">{reason.description}</p>
          </ReasonCard>
        ))}
      </ReasonsContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const ReasonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ReasonCard = styled(motion.div)`
  background-color: #FEFEFE;
  border: 1px solid #EBF1FF;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
`;

export default WhyChooseUs;