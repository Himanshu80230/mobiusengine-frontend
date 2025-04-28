import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Submit Intake Form',
    description: 'We learn about your career goals and preferences'
  },
  {
    number: '2',
    title: 'We do the search',
    description: 'Our team curates a list of jobs matching your criteria'
  },
  {
    number: '3',
    title: 'You approve, we apply',
    description: 'We handle the tedious application process for you'
  },
  {
    number: '4',
    title: 'You get interviews',
    description: 'Start receiving interview invitations'
  }
];

const HowItWorks = () => {
  return (
    <Section>
      <h2>How we work?</h2>
      <StepsContainer>
        {steps.map((step, index) => (
          <StepCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <StepNumber>{step.number}</StepNumber>
            <h4>{step.title}</h4>
            <p className="p1">{step.description}</p>
          </StepCard>
        ))}
      </StepsContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled(motion.div)`
  background-color: #FEFEFE;
  border: 1px solid #EBF1FF;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  background-color: #0649E7;
  color: #FEFEFE;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`;

export default HowItWorks;