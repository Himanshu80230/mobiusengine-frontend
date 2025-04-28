import React from 'react';
import styled from 'styled-components';
import { FaRobot, FaChartLine, FaCogs } from 'react-icons/fa';

const featuresData = [
  {
    icon: <FaRobot size={40} color="#0052cc" />,
    title: 'AI-Powered Automation',
    text: 'Automate repetitive tasks with intelligent workflows and let AI handle the work.'
  },
  {
    icon: <FaChartLine size={40} color="#0052cc" />,
    title: 'Real-time Analytics',
    text: 'Get insights and analytics on your processes to make data-driven decisions.'
  },
  {
    icon: <FaCogs size={40} color="#0052cc" />,
    title: 'Custom Integrations',
    text: 'Connect with a wide range of tools and services to build a unified workflow.'
  }
];

const Features = () => {
  return (
    <Section id="features">
      <SectionTitle>Features</SectionTitle>
      <FeaturesContainer>
        {featuresData.map((feature, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{feature.icon}</IconWrapper>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureText>{feature.text}</FeatureText>
          </FeatureCard>
        ))}
      </FeaturesContainer>
    </Section>
  );
};

export default Features;

const Section = styled.section`
  padding: 80px 40px;
  background-color: #ffffff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #0052cc;
`;

const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureCard = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 300px;
  text-align: center;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background-color: #fafafa;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  color: #555;
`;