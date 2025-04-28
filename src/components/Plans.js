import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "$35/week",
    popular: false,
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week",
      "Apply to 15 job titles"
    ],
    cta: "Get Started →"
  },
  {
    name: "Plus",
    price: "$50/week",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 50 job apps/week",
      "Personalized with up to 10 filters & 5 job titles",
      "Analyst support within 6 hours (SLA/PST hours)"
    ],
    cta: "Get Started →"
  },
  {
    name: "Advance",
    price: "$100/week",
    popular: false,
    features: [
      "Everything in Plus",
      "Up to 75 apps/week",
      "Dedicated search specialist",
      "Extra apps at $1.5 each"
    ],
    cta: "Get Started →"
  }
];

const Plans = () => {
  return (
    <Section>
      <SectionHeader>
        <h2>Job Application Service Plans</h2>
        <PromoBadge>April Promo</PromoBadge>
      </SectionHeader>
      
      <PlansContainer>
        {plans.map((plan, index) => (
          <PlanCard 
            key={index}
            popular={plan.popular}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {plan.popular && <PopularBadge>Popular</PopularBadge>}
            <PlanName>{plan.name}</PlanName>
            <PlanPrice>{plan.price}</PlanPrice>
            <FeaturesList>
              {plan.features.map((feature, idx) => (
                <FeatureItem key={idx}>
                  <CheckIcon>✓</CheckIcon>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeaturesList>
            <PlanButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {plan.cta}
            </PlanButton>
          </PlanCard>
        ))}
      </PlansContainer>
    </Section>
  );
};

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
`;

const SectionHeader = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

const PromoBadge = styled.div`
  position: absolute;
  top: -20px;
  right: 50%;
  transform: translateX(50%);
  background-color: #0649E7;
  color: #FEFEFE;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
`;

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled(motion.div)`
  background-color: #FEFEFE;
  border: 1px solid ${props => props.popular ? '#0649E7' : '#EBF1FF'};
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 20px;
  background-color: #0649E7;
  color: #FEFEFE;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
`;

const PlanName = styled.h3`
  font-size: 24px;
  margin-bottom: 8px;
`;

const PlanPrice = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
  color: #0649E7;
`;

const FeaturesList = styled.ul`
  list-style: none;
  text-align: left;
  margin-bottom: 32px;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  align-items: flex-start;
`;

const CheckIcon = styled.span`
  color: #0649E7;
  font-weight: bold;
`;

const PlanButton = styled(motion.button)`
  background-color: #0649E7;
  color: #FEFEFE;
  border: none;
  padding: 16px;
  border-radius: 20px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

  &:hover {
    background-color: #022183;
  }
`;

export default Plans;