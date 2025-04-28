import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const services = [
  {
    name: "Resume Rebuild",
    price: "$1000 one time",
    description: "Crafted for senior to VP-level professionals ready for their next big step.",
    features: [
      "3× 30-min coaching sessions",
      "Focused on storytelling, not just formatting",
      "Tailored to your target industry, company, or role",
      "Resume Rebuild portfolio available upon request"
    ],
    cta: "Get Started →"
  },
  {
    name: "Interview Prep",
    price: "$500 one time",
    description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
    features: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "Direct work with our co-founder (ex-Google, JP Morgan)"
    ],
    cta: "Get Started →"
  }
];

const ResumeServices = () => {
  return (
    <Section>
      <IntroContainer>
        <IntroHeading>Resume Building & Coaching</IntroHeading>
        <IntroText>
          Let's talk about where you're headed — and how your resume can get you there.
        </IntroText>
        <IntroSubtext>Schedule a call to get started.</IntroSubtext>
      </IntroContainer>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <ServiceHeader>
              <ServiceName>{service.name}</ServiceName>
              <ServicePrice>{service.price}</ServicePrice>
            </ServiceHeader>
            <ServiceDescription>{service.description}</ServiceDescription>
            <FeaturesList>
              {service.features.map((feature, idx) => (
                <FeatureItem 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <CheckIcon>✓</CheckIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeaturesList>
            <ServiceButton 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(6, 73, 231, 0.3)"
              }} 
              whileTap={{ scale: 0.98 }}
            >
              {service.cta}
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
      
      <ContactSection>
        <ContactHeading>STILL have doubts?</ContactHeading>
        <ContactButton 
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#0649E7",
            color: "white"
          }} 
          whileTap={{ scale: 0.98 }}
        >
          Contact us →
        </ContactButton>
      </ContactSection>
    </Section>
  );
};

// Styled Components
const Section = styled.section`
  padding: 100px 24px;
  background: linear-gradient(to bottom, #F8FAFF 0%, #FFFFFF 100%);
  text-align: center;
`;

const IntroContainer = styled.div`
  max-width: 700px;
  margin: 0 auto 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IntroHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 16px;
  line-height: 1.2;
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  color: #425466;
  line-height: 1.6;
`;

const IntroSubtext = styled.p`
  font-size: 1rem;
  color: #7B88A8;
  margin-top: 8px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto 80px;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: 24px;
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(235, 241, 255, 0.5);
  transition: all 0.3s ease;
`;

const ServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  flex-wrap: wrap;
  gap: 16px;
`;

const ServiceName = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  color: #0A2540;
  margin: 0;
`;

const ServicePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #0649E7;
  background: rgba(6, 73, 231, 0.1);
  padding: 8px 16px;
  border-radius: 12px;
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  color: #425466;
  line-height: 1.6;
  margin: 0;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin: 16px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  gap: 12px;
  align-items: flex-start;
`;

const CheckIcon = styled.span`
  color: #0649E7;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 2px;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  color: #425466;
  line-height: 1.5;
`;

const ServiceButton = styled(motion.button)`
  background-color: #0649E7;
  color: white;
  border: none;
  padding: 18px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 16px;
  width: 100%;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 600px;
  margin: 0 auto;
  padding: 40px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const ContactHeading = styled.h3`
  font-size: 1.75rem;
  color: #0A2540;
  margin: 0;
`;

const ContactButton = styled(motion.button)`
  background-color: transparent;
  color: #0649E7;
  border: 2px solid #0649E7;
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export default ResumeServices;